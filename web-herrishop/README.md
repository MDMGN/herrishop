<div align="center"> 

# ___Orduda___

</div>

https://themewagon.com/themes/free-html5-e-commerce-template-bootstrap4-amado/


## __Trabajando con VITE__

Dentro del directorio ___App/config/src.php___ .

Tendremos lo siguiente:

```php
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
?>
```
El archivo __PHP__ (___src.php___) será nuestro archivo de configuración para habilitar las direcciones __src__ de ___JavaScript___ que depende __VITE__.

__'default'__ será la importación por defecto de nuestra aplicación en el caso que lo pasemos a producción (subirlo a algún hosting).

__'dev'__ importará las depedencias __js__ que requiere __VITE__ para trabajar con cualquier archivo dentro de __JavaScript__ .

### ___Importando la configuración a nuestro proyecto:___

Dentro de ___App/config/initiate.php___  copiamos está linea de código para configurar e importar las dependencias de desarrollo.


### __Configuración de  PHP__
__Para desarrollo:__
```php
$src = Model::getSrc("dev", require('src.php'));
```

__Para producción:__

```php
$src = Model::getSrc("dev", require('src.php'));
```

Ahora dentro del metodo render en ___App/Core/Router.php___ para la vista de nuestro router  ___(.php o .html)___, colocamos en global la variable ___$src___.

```php
public funtion render(){
    global $src;
}
```

Y en nuestra ___layout.php___ en ___App/Views/layout.php___ hacemos un __echo__ de __$src__.

__Como ejemplo HomeView.php__

```php
<?=$src?>
```

Estó importará las depedencias de __JavaScript__ si la opción fué habilitada en __'dev'__ en los archivos ___.js___ o ___.css___ para el proyecto.


### __Trabajando con CSS o SASS en VITE__

Para trabajar con ___.css___ o ___.sass___ hay que importar las rutas de la siguiente manera:

En  ___public/assets/js/app.js___, importamos nuestras rutas para ___main.css___ o ___main.scss___.

___CSS___

```js
import 'vite/modulepreload-polyfill'
import  '../css/main.css'
```

__SASS__
```js
import 'vite/modulepreload-polyfill'
import  '../scss/main.scss'
```

__vite/modulepreload-polyfill__ se encargará de compilar a producción o trabajar con __CSS__ o __SASS__ dentro de nuestro proyecto.

### __Correr el servidor de ___Node___ para desarrollo__
<br/>

Ejecutar dentro de la terminal de __VSCode__:

```console
npm run dev
```
Ahora deja la consola de node abierta y trabaja sobre __XAMPP__ __(recuerda correr el servidor desde public/index.php )__.

__!En hora buena!__  Ya podremos trabajar con __CSS__ ,  __SASS__ y __JavaScript__.

#### __NOTA:__
Si no te cargan los estilos o el javascript. Verifica que el puerto que está en la consola sea el mismo que la configuración de ___App/config/src.php___. El puerto predeterminado en que trabaja __VITE__ es el __:5173__ pero si estás usando esté puerto __VITE__ correrá en el siguiente puerto, por lo tanto, tendrás que cambiar manualmente la configuración del puerto en el archivo antes mencionado.

<!-- Tambien verifica que __ORDuDA__ esté dentro de la raíz de __htdocs__  -->
---

### __Otras maneras de como usar VITE__

#### __Importando imágenes__

En caso de trabajar dentro de __JavaScript__ podemos obtener la ruta absoluta de nuestra imagen para usarlo en nuestra plantilla __HTML__.

En este caso tenemos dentro de ___assets/img/LiquidART.png___ el logo de __LiquidART__, podemos usarlo en __JavaScript__ y __VITE__ de la siguiente manera.
```js
import LiquidArt from '../img/LiquidART.png'

$nav.innertHTML=
    `
        <img src="${LiquidArt}" alt="logo">
    `;
```

Tambien tenemos la ventaja de trabajar con diferentes depedencias de __Node.js__ que se instalen dentro del ___node_modules___ importado dentro de nuestro __main.js__ y __VITE__ se encargará de transpilar solo el código necesario para el funcionamiento de nuestra __app__.

También podemos usar archivos __.html__ como plantilla de __html__ dentro de __js__ pero aun me falta configurar esta opción.

Y por ultimo el archivo __vite.config.js__ contiene toda la configuración que hice a __VITE__ para el funcionamiento dentro de nuestro proyecto.
<br /><br /><br />

---
___Para que __VITE__ transpile todo el proyecto para producción.___

Ejecutamos en la consola de __VSCode__ dentro de nuestro proyecto:

```console
npm run build
```
---
<br /> 

> Autor: __Darren Vargas Ramirez__
