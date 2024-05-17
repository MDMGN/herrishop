<?php

namespace App\Models;

use PDO;
use App\Core\App;
use App\Models\IModel;

abstract class ActiveRecord extends App implements IModel
{
    protected PDO $db;
    public static string $table;
    public static Array $columnsDB = [];
    protected static Array $alerts= [];
    protected $id;
     /**
     * Consulta SQL para crear uno o varios objetos en memoria.
     *
     * @return ActiveRecord[]
     */
    public static function consultarSQL($query,$data=[]):Array {
        // Consultar la base de datos
        $resultado = self::$conn->prepare($query);
        $resultado->execute($data);
        // Iterar los resultados
        $array = [];
        while($registro = $resultado->fetch()) {
            $array[] = static::crearObjeto($registro);
        }
        // liberar la memoria
        $resultado->closeCursor();
        // retornar los resultados
        return $array;
    }

    // Crea el objeto en memoria que es igual al de la BD
    protected static function crearObjeto($registro): ActiveRecord{
        $objeto = new static;
        foreach($registro as $key => $value ) {
            if(property_exists( $objeto, $key  )) {
                $objeto->$key = $value;
            }
        }
        return $objeto;
    }

    public function getAlerts():Array{
       return self::$alerts;
    }

    public function setAlerts(string $tipo,string $key,string $mensaje):void{
            self::$alerts[$tipo][$key]=$mensaje;
    }

    public static function all():Array{
        new static;
        $query="SELECT ".join(",",static::$columnsDB)." FROM ".self::$table.";";
        $resultado = self::consultarSQL($query);
        return $resultado;
    }

    public function select(int $limit=null,string $group=null,$orderBy=null,$desc=false):Array{
        // Sanitizar y limpiar los datos
        $atributos = $this->getMapQueryParams($this->sanitizarAtributos());
                                
        $query = "SELECT SQL_CALC_FOUND_ROWS ".join(", ",static::$columnsDB)." FROM " . self::$table . ($atributos ? " WHERE " : "") . join(' AND ',array_keys($atributos))
        .($group ? " GROUP BY $group" : "")
        .($orderBy ? " ORDER BY $orderBy".($desc ? " DESC" : "") : "" )
        .($limit ? " LIMIT $limit;" : ";");
        //Mapear los valores de parametros en la query desde el array de $atributos
        $params_values=array_reduce(array_values($atributos),fn($arr,$value)=> $arr= (is_array($value)) ? [...$arr,...$value] : [...$arr,$value] , []);

        $resultado = $this->consultarSQL($query,$params_values);
        // Obtener el total de filas sin LIMIT
        $totalQuery = "SELECT FOUND_ROWS()";
        $rs2 = self::$conn->query($totalQuery);
        $rowCount = (int) $rs2->fetchColumn();
        // Calcular el número total de páginas
        $totalPages =($rowCount <= 0 || $limit <= 0) ? 0 : ceil($rowCount / $limit);
        // Calcular la página actual (basada en 1)
        $current_page = $limit <= 0 ? 0 : max(1, floor($limit / $rowCount) + 1);
        // Calcular la página siguiente
        $next_page = min($totalPages, $current_page + 1);
        // Retornar los resultados junto con la información de paginación
        return [
            "count" => $rowCount,
            "current_page" => ($rowCount > 0  && $current_page <= 0) ? 1  : $current_page,
            "next_page" => $next_page <= 0 ? null : $next_page,
            "total_pages" => ($current_page > $totalPages) ? 1  : $totalPages,
            "items" => $resultado
        ];

    }

    public static function find($id):object{
        new static;
        $query="SELECT ".join(",",static::$columnsDB)." FROM ".self::$table." WHERE id=".$id.";";
        $resultado = self::consultarSQL($query);
        return array_shift($resultado);
    }

    // crear o actualizar objeto en la base de datos
    public function save(): Array | bool {
        if(!is_null($this->id)) {
            // actualizar
            $resultado = $this->update();
        } else {
            // Creando un nuevo registro
            $resultado = $this->create();
        }
        return $resultado;
    }

    // crea un nuevo registro
    public function create():Array{
        // Sanitizar los datos
        $atributos = $this->sanitizarAtributos();
        // Insertar en la base de datos
        $query = " INSERT INTO " . static::$table . " ( ";
        $query .= join(', ', array_keys($atributos));
        $query .= " ) VALUES ("; 
        $query .= join(", ", array_fill(0, count(array_keys($atributos)),'?'));
        $query .= ");";
        $resultado = self::$conn->prepare($query);
        $resultado->execute([...array_values($atributos)]);
        // Resultado de la consulta        
        return [
            'id' => self::$conn->lastInsertId()
         ];
        
    }

    public function update():bool{
         // Sanitizar los datos
         $sanitizado=$this->sanitizarAtributos();
         //obtener los atributos mapeados a párametros
         $atributos = $this->getMapQueryParams($sanitizado);
 
         // Consulta SQL
         $query = "UPDATE " . static::$table ." SET ";
         $query .=  join(', ', array_keys($atributos) );
         $query .= " WHERE id = ?";
         $query .= " LIMIT 1;"; 

         $resultado = self::$conn->prepare($query);
         $resultado->execute([...array_values($atributos),$this->id]);

         return $resultado->rowCount() > 0;
    }

    // Sanitizar los datos antes de guardarlos en la BD
    public function sanitizarAtributos() {
        $atributos = $this->atributos();
        $sanitizado = [];
        foreach($atributos as $key => $value ) {
            if(is_array($value)){
                    $sanitizado[$key]=array_map(fn($val) => htmlspecialchars($val),$value);
            }else if(!is_null($value) && strlen($value)){
                $sanitizado[$key] = htmlspecialchars($value);
            }
        }
        return $sanitizado;
    }

     //Mapea los datos con en array con keys para consultas preparadas
     public function getMapQueryParams($atributos):Array{
        return array_reduce(array_keys($atributos),function ($acc,$key) use ($atributos){

            if(is_array($atributos[$key])){
                $acc[$key.' IN ('.join(',',array_fill(0,count($atributos[$key]),"?")).')'] = $atributos[$key];
            }else
                $acc["{$key}=?"] = (is_int($atributos[$key]) ? (int) $atributos[$key] : $atributos[$key]);
            return $acc;

        }, array());
    }

    // Identificar y unir los atributos de la BD
    public function atributos() {
        $atributos = [];
        foreach(static::$columnsDB as $columna) {
            if($columna === 'id') continue;
            $atributos[$columna] = $this->$columna;
        }
        return $atributos;
    }

      // Sincroniza BD con Objetos en memoria
      public function sincronizar($args=[]) { 
        foreach($args as $key => $value) {
          if(property_exists($this, $key) && !is_null($value)) {
            $this->$key = $value;
          }
        }
    }

    // Busca un registro por su columna y valor
    public static function where(string $columna, string $valor): object | null{
        new static;
        $query = "SELECT ".join(",",static::$columnsDB)." FROM " . static::$table  ." WHERE $columna = '$valor';";
        $resultado = self::consultarSQL($query);
        return array_shift($resultado);
    }

     // Eliminar un Registro por su ID
     public function delete() {
        $query = "DELETE FROM "  . static::$table . " WHERE id = :id LIMIT 1;";
        $result = self::$conn->prepare($query);
        $result=$result->execute([':id' =>$this->id]);
        return array_shift($result);
    }
}