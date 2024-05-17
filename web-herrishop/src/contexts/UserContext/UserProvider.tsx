import { UserContext } from './UserContext'
import { ReactNode, useEffect, useState } from 'react'
import { ajax } from '../../helpers';
import { URL_LOGIN } from '../../api/API_HERRISHOP';
import {type  Product } from '../../types/response';
import {type reponseApiLogin } from '../../types/responseApi';

type Props={
    children: ReactNode
}
type Cart=Record<string,Product>

export function UserProvider({children}:Props) {
  const [isLogin, setIsLogin]=useState(false)
  const [user,setUser]=useState({} as User)
  const [cart , setCart] = useState({} as Cart)

  useEffect(()=>{
    const init=()=>{
      const user= localStorage.getItem("user");
      if(!!!user) return;
        ajax({
          url: URL_LOGIN,
          method: 'POST',
          data: JSON.parse(user),
          cbError: (/* error */)=>{
             /*  Alert.alert('Error de conexión : ','Herrishop no pudo conectarse al servidor',
              [
                {style:'destructive',text:'Aceptar'}
              ]) */
          },
          cbSuccess:(response:reponseApiLogin)=>{
            if(!response.error){
                setUser((user)=>response.results?.user ?? user)
                setIsLogin(true)
            }else{
              /* Alert.alert('Inicio de sesión','Lo sentimos, la sesión ha expirado.',[
                  {style:'destructive',text:'Aceptar',onPress:()=>setIsLogin(false)}
              ]) */
            }
          }
        })
    }
    init();
    setCart(JSON.parse(localStorage.getItem("cart")!) as Cart || {} )
  },[])

  return (
    <UserContext.Provider value={{user, isLogin,setUser, setIsLogin, cart, setCart}}>
        {children}
    </UserContext.Provider>
  )
}