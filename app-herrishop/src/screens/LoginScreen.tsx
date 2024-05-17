import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Login } from "../components";
import colors from "../themes/colors";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export function LoginScreen() {
  const {replace} = useNavigation<any>()
  const {isLogin}=useContext(UserContext)

  useEffect(()=>{
      if(isLogin) replace('BottomTabs')
  },[isLogin])
  
  return(
    <View style={styles.container}>
      <Login />
        <TouchableOpacity 
          style={{padding:30}}
          onPress={()=>replace('Register')}
        >
                <Text style={styles.textRegister}>Registrar</Text>
          </TouchableOpacity>
    </View>)
}

const styles=StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center'
  },
  textRegister:{
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: 18,
      textTransform: 'uppercase'
  }
})
