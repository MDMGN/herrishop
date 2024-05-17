<?php
namespace App\Models;

class Customers extends ActiveRecord{
    public $name;
    public $surname;
    public $age;
    public $repository;
    public $url;

    public function __construct($data=[]) {
        $this->name=$data['name']  ?? '';
        $this->surname=$data['surname']  ?? '';
        $this->age=$data['age']  ?? null;
    }
}