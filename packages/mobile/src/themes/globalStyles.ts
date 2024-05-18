import { StyleSheet } from "react-native"
import colors from "./colors"



const btnStyles=StyleSheet.create({
    btnContainer:{
        alignItems: 'center'
    },
    btn:{
        padding: 5,
        width: 80,
        borderColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 7,
    },
    btnText:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary
    }
})

const globalStyles=StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 10
    },
    inputField:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 15,
        color: colors.secondary
    }
})

export {
    btnStyles,
    globalStyles
}