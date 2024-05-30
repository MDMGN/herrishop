import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Product } from '../types/entities'
import { moneyFormat } from '../helpers'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  product: Product,
}
type RootStackParamList = {
  "product-hunt": { product: Product }
};
  
type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, "product-hunt">;

export function ProductCard(props: Props) {
  const {navigate} =useNavigation<ProductScreenNavigationProp>()
  const {brand, name, unit_price, image, id} = props.product


  return (
   <Pressable
     onPress={()=>  navigate('product-hunt',{
        product: props.product
     })}
   >
         <View 
            style= {styles.container}
          >
            <Text style={styles.textBrand}>{brand.name}</Text>
            <Image source={{uri: image || ''}} style= {{width: 100, height: 100}} />
            <Text style={{color:'#000', fontWeight: 'bold', fontSize: 18}}>{name}</Text>
            <View style= {{width: '100%',flexDirection: 'row'}}>
            <Text style={{ fontWeight: 'bold', marginHorizontal: 10}}>{moneyFormat(unit_price)}</Text>
            <Text style={{ textDecorationLine: 'line-through'}}>{moneyFormat(+unit_price + 20)}</Text>
      </View>
    </View>
    </Pressable>
  )
}

const styles=StyleSheet.create({
  container: {
    width: 300,
    height: 250,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 5,
    alignItems: 'center',
    gap: 5,
    marginVertical: 20,
    padding: 20
  },
  textBrand:{
      fontSize: 20,
      paddingHorizontal: 'auto',
  }
})