import { useState } from "react"
import { ajax } from "../helpers"
import { URL_REGISTER } from "../api/API_HERRISHOP"
import type { reponseApiRegister } from "../types/responseApi"
import type { User } from "../types/entities"

export default function useRegister() {
    const [user, setUser] = useState({} as User)
    const [message, setMessage] = useState('')

    const [error, setError] = useState(false)

    const onRegister=()=>{
        ajax({
          url: URL_REGISTER,
          data: user,
          method: 'POST',
          cbError: setMessage,
          cbSuccess: (response: reponseApiRegister)=>{
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
      onRegister,
      message,
      error
    }
}
