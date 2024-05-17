<?php
namespace App\Core;
use PDO;
use PDOException;
use App\Core\App;

class Db extends App{
        /**
     * Abre la conexión a la bbdd.
     * @param array $data
     * @return void
     */
        public static function connect($data){
                self::$conn= new PDO("mysql:host=".$data['hostname'].";
                dbname=".$data['database'].";
                charset=utf8",
                $data['username'],
                $data['password'],array(PDO::MYSQL_ATTR_FOUND_ROWS => true));
                self::$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        }
        public static function disconnect(){
            if(static::$conn)
                static::$conn;
        }
    }
?>