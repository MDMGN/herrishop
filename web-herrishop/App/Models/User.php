<?php
namespace App\Models;

class User extends ActiveRecord{
    public $id;
    public $name;
    public $password;
    public $surname;
    public $address;
    public $email;
    public $zip_code;
    public $birthdate;
    public $role;
    public $status;
    public $token;

    protected static Array $columnsDB=['id','name','password','surname','address','email','zip_code','birthdate','role'];
    
    public function __construct($data=[]) {
        $this->id = $data['id'] ?? null;
        $this->name=$data['name']  ?? '';
        $this->password=$data['password']  ?? '';
        $this->surname=$data['surname']  ?? '';
        $this->address=$data['address']  ?? '';
        $this->email=$data['email']  ?? '';
        $this->zip_code=$data['zip_code']  ?? null;
        $this->birthdate=$data['birthdate']  ?? '';
        $this->role=$data['role']  ?? 'USER_ROLE';
        $this->status=false;
        $this->token=null;
        self::$table='users';
    }

    public function hash_password(){
        $this->password=password_hash($this->password,PASSWORD_BCRYPT);
    }

    public function validate_user():bool{
            $isValid=true;     
            $regexPatterns = require("../App/patterns/user.php");
            foreach ($regexPatterns as $field => $data) {
                if (empty($this->$field) && !preg_match($data["pattern"], $this->$field)) {
                    self::$alerts["error"][$field] = $data['message'];
                    if($isValid) $isValid=false;
                }
            }
            return $isValid;
    }

    public function create_token(string $token){
        $query = "UPDATE " . self::$table . " SET token = :token WHERE email = :email";
        $result = self::$conn->prepare($query);
        $result->execute([':email' => $this->email, ':token' => $token]);
    }

    public static function verify_token($payload):bool{
        $query = "UPDATE users SET status=1 WHERE email = :email";
        $result = self::$conn->prepare($query);
        $result->execute([':email' => $payload->email]);
        return $result->rowCount() > 0;
    }

    public function validate_login(){
        $isValid=true;     
        $regexPatterns = require("../App/patterns/user.php");
        if(!preg_match($regexPatterns['email']['pattern'],$this->email)){
                self::$alerts["error"]['email']=$regexPatterns['email']['message'];
                $isValid=false;
        }
        if(!preg_match($regexPatterns['password']['pattern'],$this->password)){
            self::$alerts["error"]['password']=$regexPatterns['password']['message'];
            $isValid=false;
        }
        return $isValid;
    }
    
    public function verifyPasswordAndStatus(string $password):bool{
        $resultado= password_verify($password,$this->password);
        return ($resultado && $this->status);
    }
}