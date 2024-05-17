import { BackgroundRotateRound } from "../components";
import useLogin from "../hooks/useLogin";

export  function LoginPage() {
    const {onLogin,onChange, message, error, isLogin} = useLogin();
    return (
        <>
        <BackgroundRotateRound />
            <h1>Iniciar Sessión</h1>
        <form onSubmit={(e)=>onLogin(e)} >
                <input  
                    placeholder="Correo electrónico" 
                    type="email"
                    onChange={({target})=>onChange('email',target.value)}
                    />
                <input  
                    placeholder="Contraseña" 
                    type="password"
                    onChange={({target})=>onChange('password',target.value)}
                />
                {/* Si hay error, ostrar el mensaje de error o icono de carga para pasar a la pantalla de productos*/}
            { (!error && isLogin) ?
                <div>

                </div> :
                <p style={{color:'#f00',fontWeight:'bold', padding:5,textAlign:'center',margin: 5}}>
                    {message}
                </p>
            }

            <div>
                <button type="submit">Iniciar</button>
            </div>
        </form>
        </>
  )
}
