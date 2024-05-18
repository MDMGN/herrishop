import { createStackNavigator } from "@react-navigation/stack"
import { LoginScreen, RegisterScreen } from "../screens"
import BottomTabs from "./BottomTabs"


const Stack=createStackNavigator()

export default  function StackGroup() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown : false}} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}
