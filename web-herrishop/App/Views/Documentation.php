<div class="doc__bg"></div>
    <div class="wrapper">
        <aside class="doc__nav">
        <ul>
            <li class="js-btn selected">Comenzar</li>
            <li class="js-btn">Configuración</li>
        </ul>
        </aside>
        <article class="doc__content">
        <section class="js-section">
            <h3 class="section__title">Comenzar</h3>
            <h3 class="section__title">Instalación</h3>
            <p>Al descargar el software en .zip colocar en el directorio raíz de tu servidor web.</p> 
            <p>Ejemplo en <b>XAMPP</b>:</p>
            <div class="installation">
                <div class="tab__container">
                <ul class="tab__menu">
                    <li class="tab active" data-tab="mac">mac</li>
                    <li class="tab" data-tab="linux">linux</li>
                    <li class="tab" data-tab="win">win</li>
                </ul>
                <pre class="nohighlight code">
                    <code class="tab__pane active mac">cd ~/.bitnami/stackman/machines/xampp/volumes/root/htdocs</code>
                    <code class="tab__pane linux">/root/opt/lampp/htdocs/</code>
                    <code class="tab__pane win">C:/xampp/htdocs</code>
                </pre>
            </div>
            </div>
        </section>
        <section class="js-section">
            <h3 class="section__title">Configuración (Local)</h3>
            <p>Abrir el archivo <span class="code code--inline">config/config.servers.php</span>.</p>
            <div class="code__block code__block--notabs">
            <pre class="code code--block">
                <code>
                // Authentication type and info 
                $cfg_s['Servers'][$i_serv]['auth_type'] = 'config';
                $cfg_s['Servers'][$i_serv]['user'] = 'root';
                $cfg_s['Servers'][$i_serv]['password'] = 'Your password';
                $cfg_s['Servers'][$i_serv]['extension'] = 'mysqli';
                $cfg_s['Servers'][$i_serv]['AllowNoPassword'] = false;
                </code>
            </pre>
            </div>
            <table id="customers">
            <tr>
                <th>Options</th>
                <th>Value</th>
                <th>Default</th>
            </tr>
            <tr>
                <td>user</td>
                <td>Insertar tu nombre de usuario.</td>
                <td>root</td>
            </tr>
            <tr>
                <td>password</td>
                <td>Insertar tu contraseña.</td>
                <td>''</td>
            </tr>
            </table>
            <h3 class="section__title">Configuración (Servidor)</h3>
            <p>Abrir el archivo <span class="code code--inline">config/config.servers.php</span>.</p>
            <div class="code__block code__block--notabs">
            <pre class="code code--block">
                <code>
                // Bind to the localhost ipv4 address and tcp 
                $cfg_s['Servers'][$i_serv]['host'] = 'Your host';
                $cfg_s['Servers'][$i_serv]['hostShortName'] = 'Your host short name';
                $cfg_s['Servers'][$i_serv]['connect_type'] = 'tcp';
                </code>
            </pre>
            </div>
            <table id="customers">
            <tr>
                <th>Options</th>
                <th>Value</th>
                <th>Default</th>
            </tr>
            <tr>
                <td>host</td>
                <td>La dirección y puerto del host.</td>
                <td>POAPMYSQL119.dns-servicio.com:3306</td>
            </tr>
            <tr>
                <td>hostShortName</td>
                <td>Insertar pseudo nombre del host.</td>
                <td>Localhost DB server</td>
            </tr>
            </table>
            <p>Esto es la configuración basica para comenzar a usar la aplicación. Puedes leer la documentación completa en PDF.</p>
            <div class="changelog__callout">
            <a href="./assets/resources/myLQSadmin-readme-20220819.pdf" target="_blank" class="button--secondary">Ver PDF</a>
        </div>
            <hr />
        </section>
        </article>
    </div>