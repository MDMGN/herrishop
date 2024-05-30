import { Text, View } from 'react-native'
import { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { UserContext } from '../../contexts/UserContext'
import { CartItem } from '../../components'
import { moneyFormat } from '../../helpers'

export  function CartScreen() {
  const {cart} = useContext(UserContext)
  return  Object.keys(cart).length  ?(
      <FlatList
        data={Object.values(cart)}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=> <CartItem key={item.id} item={item} /> }
       />
  )
  : (
    <View style={{justifyContent: 'center', height:'100%'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>No hay productos en el carrito</Text>
    </View>
  )
}