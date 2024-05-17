<?php
namespace App\Controllers;

use App\Core\Router;
use App\Models\User;
use Exception;

class RegisterController implements IController{
    
    public static function index(Router $router){}

    public static function verify_email(Router $router){
        
        if(!isset($_GET["token"])) throw new Exception("Error: Token access required.");
        
        $payload=jwt_payload($_GET["token"]);
        if($payload["exp"]<time()){
            $result=[
                "confirm"=>false,
                "message"=>" ¡Oops! Token expirado. No se ha podido completar tu registro y se dará de baja a la cuenta."
            ];
            $user=new User();
            $user->id=$payload["data"]->id;
            $user->delete();
        }else{
            $resp=User::verify_token($payload["data"]);
            $result=[
                "confirm"=>$resp,
                "message"=> $resp ? "¡Registro exitoso! Te has registrado correctamente." : "¡Oops! Token Invalido. No se ha podido completar tu registro."
            ];
        }
        $router->render('Register',$result);
    }
}