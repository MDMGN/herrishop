<?php
namespace App\Core;

use Exception;

class Router
{
    private $routesGET=[];
    private $routesPOST=[];

    public function get(string $url, $fn):void{
        $this->routesGET[$url]=$fn;
    }

    public function post(string $url, $fn):void{
        $this->routesPOST[$url]=$fn;
    }

    private function get_params_matches(&$url): array {
        $params = [];
        foreach ($this->routesGET as $route => $class) {
            // Convertimos nuestra ruta en un patrón válido
            $pattern = preg_replace('/{(\w+)}/', '([^\/]+)', $route);
            $pattern = '#^' . str_replace('/', '\/', $pattern) . '$#';
    
            // Si hacemos match, retornamos los valores de los parámetros pasados por URL
            if ($route != '/' && preg_match($pattern, $url, $matches)) {
                // Reemplazamos nuestra ruta actual por una ruta válida
                $url = $route;
                // Eliminamos el primer elemento que contiene la URL completa
                array_shift($matches);
                // Asociamos los parámetros con sus nombres
                $params = array_combine($this->get_param_names($route), $matches);
                return $params;
            }
        }
        return $params;
    }
    
    private function get_param_names($route): array {
        preg_match_all('/{(\w+)}/', $route, $matches);
        return $matches[1];
    }
    

    public function validateURL():void{
        $currentURL=$_SERVER['REQUEST_URI'] ?? '/';

        if(str_contains($currentURL,"?")){
            $currentURL=explode('?',$currentURL)[0];
        }
        
        $method=$_SERVER['REQUEST_METHOD'];
        
        if($method === 'GET'){
            $params= $this->get_params_matches($currentURL);
            $fn= $this->routesGET[$currentURL] ?? null;
        }else if($method === 'POST'){
            $params= $_POST;
            $fn= $this->routesPOST[$currentURL] ?? null;
        }

        if($fn){
            call_user_func_array($fn,[$this,$params]);
        }else{
            throw new Exception("Resource not found",404);
        }
    }

    public function render(string $view,$datos=[]):void{
        global $src;
        
        foreach ($datos as $key => $value) {
            $$key=$value;
        }
        ob_start();
        header('Content-Type: text/html; charset=utf8');

        require_once __DIR__.'\\..\\Views\\'.$view.'.php';
        $contenido=ob_get_clean();
        require_once __DIR__.'\\..\\Views\\layout.php';
    }

    public function json(Array $response){
        header('Content-Type: application/json; charset=utf8');
        //Respuesta JSON con los datos
        echo json_encode($response);
    }

    public function image(String $image,$resource){

        $extension=pathinfo($image, PATHINFO_EXTENSION);
        $routeImage = __DIR__.'\\..\\files\\images\\'.$resource.''.$image.'.png';
        
        header("Content-Type: image/png");
        // Lee la imagen y la imprime en el flujo de salida
        debuguear(file_exists($routeImage));
        if(!readfile($routeImage)){
            http_response_code(500);
        }

    }
}
