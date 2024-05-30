import { UserContext } from './UserContext'
import { ReactNode, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ajax } from '../../helpers';
import { URL_LOGIN } from '../../api/API_HERRISHOP';
import { Alert } from 'react-native';
import type { User } from '../../types/entities';

type Props={
    children: ReactNode
}

export function UserProvider({children}:Props) {
  const [isLogin, setIsLogin]=useState(false)
  const [user,setUser]=useState({} as User)
  const [token, setToken] = useState<string>()

  useEffect(()=>{
    const init= async()=>{

      const token = await AsyncStorage.getItem("token");
      
      if(!!!token) return;
        ajax({
          url: URL_LOGIN,
          method: 'POST',
          data: { token },
          cbSuccess:(response: ReponseApiLogin)=>{
            if(!response.error){
                setUser(()=> response.result as User)
                setIsLogin(true)
            }
          },
          cbError: (error)=>{
            Alert.alert('Inicio de sesión','Lo sentimos, la sesión ha expirado.', [
               {style:'destructive',text:'Aceptar',onPress:()=>setIsLogin(false)}
            ])
            setIsLogin(false)
          },
        })
    }
    init();
  },[])

  return (
    <UserContext.Provider value={{user, isLogin, setUser, setIsLogin, token, setToken}}>
        {children}
    </UserContext.Provider>
  )
}