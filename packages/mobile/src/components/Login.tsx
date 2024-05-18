import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { btnStyles, globalStyles } from "../themes/globalStyles";
import colors from "../themes/colors";
import { BackgroundRotateRound } from "./BackgroundRotateRound";
import { InputField } from "./InputField";
import useLogin from "../hooks/useLogin";

export  function Login() {
    const {login,onChange, message, error, isLogin} = useLogin();
  return (
    <>
    <BackgroundRotateRound />
        <Text style={globalStyles.title}>Iniciar Sessión</Text>
       <View>
            <InputField  
                placeholder="Correo electrónico" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity}
                keyboardType="email-address"
                onChangeText={(value)=>onChange('email',value)}
                />
            <InputField  
                placeholder="Contraseña" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity}
                secureTextEntry={true}
                onChangeText={(value)=>onChange('password',value)}
            />
            {/* Si hay error, ostrar el mensaje de error o icono de carga para pasar a la pantalla de productos*/}
           { (!error && isLogin) ?
            <ActivityIndicator size={45} /> :
            <Text style={{color:'#f00',fontWeight:'bold', padding:5,textAlign:'center',margin: 5}}>
                 {message}
             </Text>
           }

           <View style={btnStyles.btnContainer}>
                <TouchableOpacity 
                    style={btnStyles.btn}
                    activeOpacity={0.4}
                    onPress={login}
                >
                    <Text style={btnStyles.btnText}>Iniciar</Text>
                </TouchableOpacity>
           </View>
       </View>
    </>
  )
}
