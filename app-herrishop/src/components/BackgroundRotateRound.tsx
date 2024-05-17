import { StyleSheet, View } from "react-native";
import colors from "../themes/colors";


export function BackgroundRotateRound() {
  return (
    <View style={styles.background}></View>
  )
}

const styles=StyleSheet.create({
    background:{
        position: 'absolute',
        backgroundColor: colors.primary,
        top: -250,
        right: 10,
        width: 1000,
        height: 1100,
        transform: [
            {rotate: '-60deg'}
        ],
        borderRadius: 300,
        borderWidth: 2
    }
})
