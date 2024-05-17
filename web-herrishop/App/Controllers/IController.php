<?php
namespace App\Controllers;

use App\Core\Router;

interface IController{
    public static function index(Router $router);
}