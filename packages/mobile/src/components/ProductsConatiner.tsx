import { FlatList } from 'react-native-gesture-handler'
import type { Product } from '../types/entities'
import { ProductCard } from './ProductCard'
import { useEffect } from 'react'

type Props={
    products: Product[]
}

export function ProductsConatiner(props: Props) {
    const {products} = props

  return (
        <FlatList 
            data={products}
            keyExtractor={(item)=> item.id.toString() }
            renderItem={({item})=> <ProductCard product={item}  />}
        />
  )
}