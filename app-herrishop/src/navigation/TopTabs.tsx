import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import {Fontisto} from '@expo/vector-icons'
import { CartScreen, CheckoutSreen, HomeScreen, ProductScreen, ShopScreen } from "../screens";
const Tab=createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
    screenOptions={({route})=>{
        return{
            tabBarShowLabel: false,
            tabBarLabelStyle: {
                lineHeight: 0
            },
            tabBarScrollEnabled: true,
            tabBarIcon: ({})=> <Fontisto name={route.name as typeNameIcon} size={24} color={'#fbb710'} />,
            title:''
    }}}
    >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="shopping-store" component={ShopScreen} />
        <Tab.Screen name="product-hunt" component={ProductScreen} />
        <Tab.Screen name="shopping-basket" component={CartScreen} />
        <Tab.Screen name="opencart" component={CheckoutSreen} />
    </Tab.Navigator>
  )
}