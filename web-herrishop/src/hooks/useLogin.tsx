import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { ajax } from "../helpers"
import { URL_LOGIN } from "../api/API_HERRISHOP"
import {type reponseApiLogin } from "../types/responseApi"


export default function useLogin() {
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const {user,isLogin, setIsLogin, setUser}=useContext(UserContext)

    const onLogin=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
          ajax({
            url: URL_LOGIN,
            data: user,
            method: 'POST',
            cbError: (error)=> setMessage(error.message),
            cbSuccess: (response: reponseApiLogin)=>{
              setError(response?.error ?? true);
                if(response.error){
                  setMessage((oldValue)=>{
                  if(!response?.message) return oldValue
                      return (typeof response.message !== 'string') ?
                              Object.values(response.message.error).reduce((acc,msg)=> acc+=msg+'\n\n' ,'')
                              : response.message
                  })
                }else{
                  const {user}=response.results!
                    localStorage.setItem("user",JSON.stringify(user))
                    setUser(user);
                    setIsLogin(true);
                }
            }
          })}
    
    const onChange=(key:string,value:string):void=>{
      setUser((current:User)=>  ({...current,[key]:value.trim()}))
  }

  return {
    onLogin,
    message,
    error,
    onChange,
    isLogin
  }
}
