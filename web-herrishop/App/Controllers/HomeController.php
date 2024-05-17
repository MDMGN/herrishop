<?php
namespace App\Controllers;

use App\Core\Router;

class HomeController implements IController{
    public static function index(Router $router){
        $datos=[];
        $router->render('Home',$datos);
    }
}
?>
