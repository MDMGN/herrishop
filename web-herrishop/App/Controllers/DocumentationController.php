<?php
namespace App\Controllers;

use App\Core\Router;

class DocumentationController implements IController{
    public static function index(Router $router){
            $router->render('Documentation',[]);
    }
}