import { TextInput, TextInputProps, View } from "react-native";
import { globalStyles } from "../themes/globalStyles";


interface Props extends TextInputProps{}

export function InputField(props:Props){
    return(
      <View style={{paddingHorizontal:20,paddingVertical:5}}>
        <TextInput {...props}  style={globalStyles.inputField} />
      </View>
    );
}