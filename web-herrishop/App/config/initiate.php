<?php

use App\Core\Config;
use App\Core\Db;

/**
 * Configuración de las cabeceras en la APIRest.
 */
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH");

spl_autoload_register(function($class){
    require_once __DIR__.'\\..\\..\\'.$class.'.php';
});

try{
    Db::connect(require_once('db.php'));
}catch(Exception $ex){
    echo $ex;
    exit;
}
$src = Config::getSrc("dev", require('src.php'));