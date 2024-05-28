export function EmailTemplate(dominio,site,token){
    return `
    <html>
    <body style="font-family:arial; font-size:10px;">
        Hola,
        <br>
        Te hemos generado un acceso temporal.
        <br>
        <a href="http://${dominio}/${site}?token=${token}">Pulsa en este enlace para acceder</a>
        <br>
        <br>
        O copia y pega en tu navegador esta URL es caso de dificultades:
        <br>
        http{s}://${dominio}/${site}?token=${token}
    </body>
</html>
    `;
}