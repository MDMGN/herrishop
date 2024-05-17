<?php
return [
    'name' => [
        'pattern' => "/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}+$/",
        'message' => 'El nombre debe contener solo letras y espacios, y tener entre 4 y 16 caracteres.'
    ],
    'surname' => [
        'pattern' => "/^[a-zA-ZÀ-ÿ\s]{4,16}$/",
        'message' => 'El apellido debe contener solo letras y espacios, y tener entre 4 y 16 caracteres.'
    ],
    'email' => [
        'pattern' => "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/",
        'message' => 'El correo electrónico debe tener un formato válido.'
    ],
    'password' => [
        'pattern' => "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,}$/",
        'message' => 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito, un carácter especial y tener al menos 6 caracteres.'
    ],
    'address'=>[
        'pattern'=>'/^[a-zA-Z0-9\s\-\'\.,#\/]+$/',
        'message'=>'La dirección no es válida.'
    ],
    'zip_code' => [
        'pattern' => "/^\d{5}$/",
        'message' => 'El código postal debe contener exactamente 5 dígitos.'
    ],
    'birthdate' => [
        'pattern' => '/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/',
        'message' => 'El formato de fecha de nacimiento debe ser YYYY-MM-DD.'
    ]
];