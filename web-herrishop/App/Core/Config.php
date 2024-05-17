<?php
namespace App\Core;
use Exception;
    class Config extends App{

        /** @var string Directorio en el que se ejecuta nuestra app */ 
        protected static $dirBase = null;
        public static function setDirBase($arg) { self::$dirBase = $arg; }

        /**
         * @param String $type dev/default
         * @param Array $config
         * @return Array js/css
         * Obtener enlace absoluto de main.js y main.css.
         */
        public static function getSrc(string $type,Array $config):String{
            if(!array_key_exists($type,$config))
                 throw new Exception($type." no existe en la clave de configuración.");
            return $config[$type];
        }
    }