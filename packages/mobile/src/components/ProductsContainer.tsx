import { FlatList } from 'react-native-gesture-handler'
import type { Product } from '../types/entities'
import { ProductCard } from './ProductCard'

type Props={
    products: Product[]
}

export function ProductsContainer(props: Props) {
    const {products} = props

  return (
        <FlatList 
            data={products}
            keyExtractor={(item)=> item.id.toString() }
            renderItem={({item})=> <ProductCard product={item}/>}
            style = {{ width : '100%'}}
        />
  )
}