<?php
namespace App\Models;
interface IModel{
    public static function all();
    public static function find($id):object;
    public function select(int $limit=null,string $group=null,$orderBy=null,$desc=false):Array;
    public static function where(string $columna,string $valor);
    public function save();
    public function update();
    public function delete();
}