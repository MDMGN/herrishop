import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Register } from "../components";
import colors from "../themes/colors";
import { useNavigation } from "@react-navigation/native";

export  function RegisterScreen() {
    const {replace} = useNavigation<any>()
  return (
    <View style={styles.container}>
      <Register />
        <TouchableOpacity 
            style={{padding:30}}
            onPress={()=>replace('Login')}
        >
                <Text style={styles.textRegister}>Iniciar</Text>
          </TouchableOpacity>
    </View>
  )
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
