import { BackgroundRotateRound } from "../components";
import useRegister from "../hooks/useRegister";

export  function RegisterPage() {
    const {onRegister,onChange, message, error} = useRegister();
    return (
        <>
        <BackgroundRotateRound />
            <h1>Iniciar Sessión</h1>
        <form onSubmit={onRegister}>
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

            <div>
                    <button type="submit">Iniciar</button>
            </div>
        </form>
        </>
  )
}
