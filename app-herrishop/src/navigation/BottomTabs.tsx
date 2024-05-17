import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoritesScreen, SearchScreen } from "../screens";
import {Fontisto} from '@expo/vector-icons'
import TopTabs from "./TopTabs";

const Tab=createBottomTabNavigator()

const nameIcons:Record<string,typeNameIcon>={
    TopTabs: "shopping-bag",
    Deseos:'favorite',
    Buscar: "search"
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=> <Fontisto name={nameIcons[route.name]} size={24} color={'#000'} />,
    })}
    >
      <Tab.Screen name="TopTabs" component={TopTabs} options={{title: 'Inicio'}} />
      <Tab.Screen name="Deseos" component={FavoritesScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
    </Tab.Navigator>
  )
}
