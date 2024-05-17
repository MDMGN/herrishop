<?php
namespace App\Controllers;

use App\Core\Router;
use App\Models\Product;
use Exception;

class ProductController implements IController{

    public static function index(Router $router):void{
        $product=new Product();
        $result=$product->select();
        $router->json($result);
    }

    public static function find(Router $router,$params):void{
        $result=Product::find($params['id']);

        if(!$result) throw new Exception("Resource not found");

        $router->json([
            "error"=>false,
            "results"=>$result
        ]);
     }
}