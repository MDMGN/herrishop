<?php
namespace App\Models;

class Product extends ActiveRecord{
    public $id;
    public $name;
    public $customer_id;
    public $category_id;
    public $unit_price;
    public $unit_stock;
    public $description;
    public $image;

    public function __construct($data=[]) {
        $this->id=$data['id'] ?? null;
        $this->name=$data['name']  ?? '';
        $this->customer_id=$data['customer_id']  ?? null;
        $this->category_id=$data['category_id']  ?? null;
        $this->unit_price=$data['unit_price']  ?? null;
        $this->unit_stock=$data['unit_stock']  ?? null;
        $this->description=$data['description']  ?? '';
        $this->image=$data['image'] ?? null;
        self::$table='products';
        self::$columnsDB=['id','name','customer_id','category_id','unit_price','unit_stock','description','image'];
    }
} 