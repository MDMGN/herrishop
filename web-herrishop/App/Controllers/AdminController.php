<?php

namespace App\Controllers;
use App\Core\Router;

class AdminController implements IController{
    
    public static function index(Router $router){
        $router->render('Admin',[]);
    }
}

?>