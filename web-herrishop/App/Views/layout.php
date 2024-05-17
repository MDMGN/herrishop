<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Customized Bootstrap Stylesheet -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900" rel="stylesheet">
    <link href="./assets/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <!-- JavaScript Libraries -->
    <script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script defer src="./assets/js/index.js" type="module"></script>
    <title>HerriShop-Api</title>
</head>
<body>
<h1>HerriShop</h1>
    <?php
    require_once __DIR__.'/../Views/partials/navbar.php';
    echo $contenido;
    require_once __DIR__.'/../Views/partials/footer.php';
    ?> 
</body>
</html>