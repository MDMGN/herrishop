import { useState } from "react"
import { ajax } from "../helpers"
import { URL_REGISTER } from "../api/API_HERRISHOP"

const headersList = {
  "Content-Type": "application/x-www-form-urlencoded"
}

export default function useRegister() {
    const [user, setUser] = useState({} as User)
    const [message, setMessage] = useState('')

    const [error, setError] = useState(false)

    const resgistrar=()=>{
        ajax({
          url: URL_REGISTER,
          data: user,
          method: 'POST',
          cbError: setMessage,
          cbSuccess: (response: reponseApiRegister)=>{
            console.log(response);
            return;
            setError(response?.error ?? false)
            if(response.error){
              setMessage((oldValue)=>{
                return (typeof response.message !== 'string') ?
                        Object.values(response.message.error).reduce((acc,msg)=> acc+=msg+'\n\n' ,'')
                        : oldValue
              })
            }else{
              setMessage((oldValue)=> typeof response.message === 'string' ? response.message : oldValue)
            }
        }})
      }

    const onChange=(key:string,value:string):void=>{
        setUser((current:User)=>  ({...current,[key]:value.trim()}))
    }

    return {
    onChange,
    resgistrar,
    message,
    error
    }
}
