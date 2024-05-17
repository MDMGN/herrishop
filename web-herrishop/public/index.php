<?php
require_once '../vendor/autoload.php';
require_once '../app/config/initiate.php';
require_once '../app/helpers.php';

use App\Core\Router;
use App\Controllers\HomeController;
use App\Controllers\DocumentationController;
use App\Controllers\AdminController;
use App\Controllers\ProductController;
use App\Controllers\UserController;
use App\Controllers\RegisterController;
use App\Controllers\LoginController;

$router= new Router();

try{

    $router->get('/',[HomeController::class,'index']);
    $router->get('/documentation',[DocumentationController::class,'index']);
    $router->get('/admin',[AdminController::class,'index']);

    $router->get('/verify_email',[RegisterController::class,'verify_email']);

    $router->get('/api/users/{id}',[UserController::class,'find']);
    $router->get('/api/products',[ProductController::class,'index']);
    $router->get('/api/products/{id}',[ProductController::class,'find']);
    $router->get('/api/categories/',[CategoriesController::class,'index']);
    $router->get('/api/users',[UserController::class,'index']);
    $router->post('/api/users',[UserController::class,'add']);
    $router->get('/api/users/{id}',[UserController::class,'find']);
    $router->post('/api/login',[LoginController::class,'index']);
    $router->validateURL();

}catch(Exception $e){
    $code=$e->getCode()==23000 ? 400 : $e->getCode();
    $message=$e->getCode()==23000  ? "¡El correo electrónico ya existe!" : (json_decode($e->getMessage()) ?? $e->getMessage());
    http_response_code($code);
    $router->json([
        "error"=>true,
        "code"=>$code,
        "message"=> $message
    ]);
}
require_once '../app/config/terminate.php';