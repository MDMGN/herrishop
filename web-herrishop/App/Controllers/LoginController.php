<?php
namespace App\Controllers;

use App\Core\Router;
use App\Models\User;
use Exception;

class LoginController implements IController{

    public static function index(Router $router){

        //Comprobamos si llega token en la petición y si ha expirado
        if(isset($_POST['token'])){
            $jwt=$_POST['token'];

            $payload=jwt_payload($jwt);
            $isExpired=$payload['exp'] < time();
            //Si el token ha caducado responde con un código http 401
            $isExpired && http_response_code(401);
            $auth=new User((array) $payload['data']);
            $user=User::where('email',$auth->email)[0];
            //Creamos el array de respuesta
            if ($isExpired){
                $response=[
                    "error"=>$isExpired,
                    "message"=>'token expired'
                ];
            }else{
                $response=[
                    "error"=>$isExpired,
                    "message"=>'token valid',
                    "results"=>[
                        "user"=>array_diff_key((array)$user, ['password' => ''])
                    ]
                ];
            }
        }else{
            $auth=new User($_POST);
            //Lanzamos un error si los datos no son correctos
            if(!$auth->validate_login()) throw new Exception(json_encode([
                "error_message"=>"Bad request",
                ...$auth->getAlerts()
            ]),400);
            //Obtenemos al usuario por su email
            $user=User::where('email',$auth->email)[0] ?? null;
            $resp= $user?->verifyPasswordAndStatus($auth->password);
            //Si no existe el usuario, no está confirmado o la contraseña es incorrecta
            if(!$resp) 
                throw new Exception('Contraseña incorrecta o tu cuenta no ha sido confirmada.',401);

            $time=time() + 60 * 60 * 24 * 30 ; // Un mes de expiración
            $token=jwt($user->id,$user->email,$time);
            $user->create_token($token);
            $response=[
                "error"=>false,
                "results"=> [
                    "user" => array_diff_key((array)$user, ['password' => '']),
                    "orders"=>[]
                ]
            ];
        }
        
        $router->json($response);
    }
}