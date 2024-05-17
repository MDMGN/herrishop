<?php
namespace App\Core;
    abstract class App{
        /** @var object Objeto de conexión a la bbdd */
         protected static $conn = null;

        /** @var object Objeto de configuración */
         static $config = null;
    } 
?>