<?php

return [
        'default' => '
            <link rel="preload" href="' .__DIR__. '/assets/css/main.min.css" as="style">
            <link rel="stylesheet" href="' .__DIR__. '/assets/css/main.min.css?v=1.0">
            <script defer src="' .__DIR__. '/assets/js/app.js?v=1.0" type="module"></script>
    ',
        'dev' => '
            <script type="module" src="http://localhost:5173/@vite/client"></script>
            <script src="http://localhost:5173/public/assets/js/app.js?v=1.0" type="module"></script>
    '
];
