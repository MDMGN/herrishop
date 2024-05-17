<?php
use Firebase\JWT\JWT;
use Firebase\JWT\KEY;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv= Dotenv::createImmutable('../');
$dotenv->load();


function debuguear($variable){
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

function getImageURL($image,$source){
    $hostname=$_SERVER['HTTP_HOST'];
    $imageURL='http://'.$hostname.'/images/'.$source.'/'.$image;
    return $imageURL;
}


function jwt(int $id, string $email,string $time_exp):string{
        $token=[
            "iat" => time(), //Tiempo en que inicia el token
            "exp" => $time_exp, // Tiempo en que expirará el token
            "data" =>[
                "id" => $id,
                "email" => $email
            ]
        ];
    $jwt=JWT::encode($token, $_ENV['JWT_SECRECT_KEY'],"HS256");
    return $jwt;
}

function jwt_payload($jwt):Array{
    $paylod=(array) JWT::decode($jwt, new Key($_ENV["JWT_SECRECT_KEY"], 'HS256'));
    return $paylod;
}

function sendMail(string $email,string $token):bool{
    $mail = new PHPMailer(true);
    $dataMail=require('../APP/config/mail.php');
    $cuerpoEmail = file_get_contents('../app/templates/enviar_email_token.html');
    // si error al leer la plantilla
    if(!$cuerpoEmail)
        throw new Exception('Error al leer la plantilla');
    // generamos el correo $_SERVER['HTTPS']==='on'? 's':''
    $cuerpoEmail = str_replace(['{s}', '{dominio}','{site}','{token}','{email}'], 
    ['', $_SERVER['HTTP_HOST'],"verify_email", $token, $email], 
    $cuerpoEmail);
    try{
        //Server settings
        $mail->SMTPDebug=SMTP::DEBUG_OFF;
        $mail->isSMTP();
        $mail->Host =$dataMail['host'];
        $mail->SMTPAuth = $dataMail['protocolo_seguro'];
        $mail->Username = $dataMail['email_remitente'];
        $mail->Password = $_ENV["EMAIL_PASSWORD"];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $dataMail['puerto'];
         //Recipients
        $mail->setFrom($email,$dataMail["nombre_remitente"]);
        $mail->addAddress($email,"USER");
        /* $mail->addCC("cdp@gmail.com"); */
        $mail->isHTML(true);
        $mail->CharSet='UTF-8';
        $mail->Subject ='Verficación de email';
        $mail->Body = $cuerpoEmail;
        $mail->send();
       return true;
    }catch(Exception $e){
        return false;
    }
}