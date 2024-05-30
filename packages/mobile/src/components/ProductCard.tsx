import { View, Text } from 'react-native'
import React from 'react'
import { Product } from '../types/entities'

type Props = {
  product: Product
}
/*  */
export function ProductCard(props: Props) {

  const {brand, name} = props.product
  

  return (
    <View>
      <Text style={{color:'#000'}}>{name}</Text>
      <Text style={{color:'#000'}}>{name}</Text>
    </View>
  )
}