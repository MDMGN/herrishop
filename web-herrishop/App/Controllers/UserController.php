<?php
namespace App\Controllers;

use App\Core\Router;
use App\Models\User;
use Exception;

class UserController implements IController{
    public static function index(Router $router){
        // Eliminar la propiedad "password"  y 'token' de un objeto User
        $users = array_map(fn($user) => array_diff_key((array)$user, ['password' => '','token'=>'']), User::all());
        $router->json([
            "error"=>false,
            "results"=>$users
        ]);
    }

    public static function add(Router $router, $data){
        //$datos=json_decode(file_get_contents("php://input",true));
        //formateamos la fecha a YYYY-MM-DD
        if(isset($data["birthdate"])){
            $fecha = $data["birthdate"];
            $fechaFormateada = date("Y-m-d", strtotime(str_replace("/", "-", $fecha)));
            $data["birthdate"]=$fechaFormateada;
        }
        $user=new User($data);
        //Si no se envian todos los campos requeridos se lanza una exception
        if(!$user->validate_user()) throw new Exception(json_encode([
            "error_ message" => "Bad request",
            ...$user->getAlerts()
        ]),400);
            //ciframos el password
            $user->hash_password();
            //Guardamos el nuevo usuario en bd
            $result=$user->save();
            $time_exp=time()+ (60*60*24);// Tiempo en que expirará el token (1 día)
            //Obtenemos el jwt con 1 día de expiración para dar de alta al nuevo usuario
            $token=jwt((int)$result["id"],$data["email"],$time_exp); 
            $user->create_token($token);
            $isSend=sendMail($data["email"],$token); //Enviamos un email de verificación

            if(!$isSend) throw new Exception("No se pudo enviar el email verificación",422);

            $router->json([
                "error"=>false,
                "message"=>"Hemos enviado un acceso temporal a tu correo eléctronico"
            ]);
    }

    public static function find(Router $router, $datos){
        $result=User::find($datos["id"]);

        if(!$result) throw new Exception("Resource not found");

        $router->json([
            "error"=>false,
            "results"=>$result
        ]);
     }
}
?>