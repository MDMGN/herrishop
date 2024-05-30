import { UserContext } from './UserContext'
import { ReactNode, useEffect, useReducer, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ajax } from '../../helpers';
import { URL_LOGIN } from '../../api/API_HERRISHOP';
import { Alert } from 'react-native';
import type { User } from '../../types/entities';
import { CartReducers } from '../../reducers/ProductsReducer';

type Props={
    children: ReactNode
}

export function UserProvider({children}:Props) {
  const [isLogin, setIsLogin]=useState(true)
  const [user,setUser]=useState({} as User)
  const [token, setToken] = useState<string>()
  const [cart, dispatchCart] = useReducer<typeof CartReducers>(CartReducers,[])

  useEffect(()=>{
    const init= async()=>{

      const { token } = JSON.parse(await AsyncStorage.getItem("token") ?? '');
      
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
          },
        })
    }
    init();
  },[])

  return (
    <UserContext.Provider value={{user, isLogin, setUser, setIsLogin, token, setToken, cart, dispatchCart }}>
        {children}
    </UserContext.Provider>
  )
}