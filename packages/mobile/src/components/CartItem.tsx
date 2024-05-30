import { View, Text, Image } from 'react-native'
import { Product, ProductCart } from '../types/entities'
import { moneyFormat } from '../helpers'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

type Props={
    item: ProductCart
}
type RootStackParamList = {
  "product-hunt": { product: Product }
};

type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, "product-hunt">;

export function CartItem({item}:Props) {
  const { navigate } = useNavigation<ProductScreenNavigationProp>()
    const { name, amount, unit_price, id } = item
  return (
    <TouchableHighlight
      onPress={() => navigate('product-hunt', {
        product: item
      })}
      underlayColor="#DDDDDD"
      activeOpacity={0.95}
      style= {{marginVertical: 20}}
    >
      <View style={{flexDirection: 'row', marginHorizontal: 50, width: 100, height: 100, justifyContent: 'space-between' }}>
        <View>
          <Text  style={{ fontWeight: 'bold' }}>{name}</Text>
          <Text  style={{ fontWeight: 'bold' }}>Cantidad: {amount}</Text>
          <Text  style={{ textAlign: 'center' }}>Precio: {moneyFormat(unit_price)}</Text>
        </View>
        <View>
          <Image />
        </View>
    </View>
    </TouchableHighlight>
  )
}