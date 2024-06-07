import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { ajax } from "../helpers"
import { URL_LOGIN } from "../api/API_HERRISHOP"

type Auth={
  email: string,
  password: string
}

export default function useLogin() {
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
  
    const { isLogin, setIsLogin, setToken }=useContext(UserContext)
    const [auth, setAuth] = useState({} as Auth)

    const login=()=>{
      ajax({
        url: URL_LOGIN,
        data: auth,
        method: 'POST',
        cbSuccess: (response: ReponseApiLogin)=>{
              const token= response.result
                setIsLogin(true);
                setError(false);
                setToken(token)

        },
        cbError: (res: ResponseError)=>{
          setMessage(()=> typeof res.message === 'string' ? res.message : res.message.reduce((acc,msg)=> acc+=msg+'\n\n' ,''))
          setError(true)
        },
      })}
    
    const onChange=(key:string,value:string):void=>{
      setAuth((old: Auth )=>  ({...old,[key]:value.trim()}))
    }

  return {
    login,
    message,
    error,
    onChange,
    isLogin
  }
}
