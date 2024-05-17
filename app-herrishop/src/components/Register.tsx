import { Text,TouchableOpacity, View } from "react-native"
import { btnStyles, globalStyles } from "../themes/globalStyles"
import colors from "../themes/colors"
import { InputField } from "./InputField"
import { BackgroundRotateRound } from "./BackgroundRotateRound"
import { ScrollView } from "react-native-gesture-handler"
import { DatePicker } from "./DatePicker"
import useRegister from "../hooks/useRegister"
    
export function Register() {
    const {onChange,resgistrar,message ,error}= useRegister()
  return (
    <>
       <BackgroundRotateRound />
        <Text style={[globalStyles.title,{marginTop: 50}]}>Registro</Text>
       <ScrollView>
            <InputField  
                placeholder="Nombre" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity}
                onChangeText={(value)=>onChange('name',value)}
                />
            <InputField  
                placeholder="Contraseña" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity} 
                secureTextEntry={true}
                onChangeText={(value)=>onChange('password',value)}
            />
            <InputField  
                placeholder="Apellidos" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity}
                autoCapitalize="words" 
                onChangeText={(value)=>onChange('surname',value)}
            />
            <InputField  
                placeholder="Dirección" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity} 
                onChangeText={(value)=>onChange('address',value)}
            />
            <InputField  
                placeholder="Código Postal" 
                placeholderTextColor={colors.secondary} 
                underlineColorAndroid={colors.secondaryOpacity}
                keyboardType="numeric"
                onChangeText={(value)=>onChange('zip_code',value)}
            />
            <InputField 
                 placeholder="Correo Electrónico" 
                 placeholderTextColor={colors.secondary} 
                 underlineColorAndroid={colors.secondaryOpacity}
                 keyboardType="email-address"
                 onChangeText={(value)=>onChange('email',value)}
            />
            <View style={{padding:20}}>
                <Text style={[globalStyles.inputField,{paddingVertical:0}]}>Fecha de nacimiento:</Text>
            </View>
            <DatePicker
                onChange={onChange}
                name="birthdate"
            />
            <Text style={{color: error ? '#f00' : '#008f39',fontWeight:'bold', padding:5,textAlign:'center',margin: 5}}>
                {message}
            </Text>
           <View style={btnStyles.btnContainer}>
                <TouchableOpacity 
                    style={[btnStyles.btn, {width: 100}]}
                    activeOpacity={0.4}
                    onPress={resgistrar}
                >
                    <Text style={btnStyles.btnText}>Registrar</Text>
                </TouchableOpacity>
           </View>
       </ScrollView>
    </>
  )
}
