import { UserContext } from './UserContext'
import { ReactNode, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ajax } from '../../helpers';
import { URL_LOGIN } from '../../api/API_HERRISHOP';
import { Alert, ToastAndroid } from 'react-native';

type Props={
    children: ReactNode
}
export function UserProvider({children}:Props) {
  const [isLogin, setIsLogin]=useState(false)
  const [user,setUser]=useState({} as User)

  useEffect(()=>{
    const init=async()=>{
      const user=await AsyncStorage.getItem("user");
      if(!!!user) return;
        ajax({
          url: URL_LOGIN,
          method: 'POST',
          data: JSON.parse(user),
          cbError: (error)=>{
              Alert.alert('Error de conexión','Herrishop no pudo conectarse al servidor',
              [
                {style:'destructive',text:'Aceptar'}
              ])
          },
          cbSuccess:(response:reponseApiLogin)=>{

            console.log(response)
            return;
            if(!response.error){
                setUser((user)=>response.results?.user ?? user)
                setIsLogin(true)
            }else{
              Alert.alert('Inicio de sesión','Lo sentimos, la sesión ha expirado.',[
                  {style:'destructive',text:'Aceptar',onPress:()=>setIsLogin(false)}
              ])
            }
          }
        })
    }
    init();
  },[])

  return (
    <UserContext.Provider value={{user, isLogin,setUser, setIsLogin}}>
        {children}
    </UserContext.Provider>
  )
}