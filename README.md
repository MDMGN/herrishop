# HerriShop

<p style="text-align: right; font-weight: bold">
  Darren Michael Vargas Ramirez - SEIM - 2024
</p>

Este es el proyecto FCT para el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) en SEIM, llamado HerriShop. Este proyecto está compuesto por tres paquetes principales:

- `packages/backend`
- `packages/frontend`
- `packages/mobile`

## Requisitos

- Node.js (versión 16 o superior)
- pnpm (versión 6 o superior)

## Instalación

Sigue estos pasos para configurar el emulador, clonar el repositorio, instalar las dependencias necesarias y arrancar el proyecto.

### Configuración para el emulador Android y React Native
Colocar la ruta del sdk de android en las variables de entorno:

- Como nuevos valores de la variable __Path__:

```bash
android\sdk\
android\sdk\platform-tools
```

- Agregar una nueva variable __ANDROID_HOME__ y como valor:
        ```
        android\sdk\
        ```
### Configuración del host para la app mobile
- Dentro de ___packages/mobile/src/api___.
    ```ts
    //Cambia 0.0.0.0 por tu dirección IPv4
        const host = '0.0.0.0:3000'
    ```
    El backend se ejecuta en el puerto __3000__
- Dentro de ___packages/dbherrishop.sql___ se encuentra el script con la base de datos.
### Clonar el Repositorio

```bash
git clone https://github.com/MDMGN/herrishop.git
cd herrishop
```

### Instalar las dependencias

```bash
npm install -g pnpm
```


```bash
pnpm install
```

### Correr en conjunto la aplicaciones backend, web y mobile

```bash
pnpm run dev
```