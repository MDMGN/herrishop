import { useContext, useState } from 'react'
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'
import { UserContext } from '../contexts/UserContext'
import { Product, ProductCart } from '../types/entities'
import { Alert } from 'react-native'
import { typeAction } from '../reducers/ProductsReducer'

  type DetailsProductRouteParams={
    product: Product | ProductCart | undefined 
  }
  type DetailsProductRouteProp = RouteProp<ParamListBase, "product-hunt"> & {
    params: DetailsProductRouteParams;
  };

export default function useProduct() {

    const {dispatchCart,cart} =useContext(UserContext)
    const {params} = useRoute<DetailsProductRouteProp>()
    const [amount, setamount] = useState<number>(0)


    const handleAddCart=()=>{
      if(Number(amount) > 0){
        if(amount > Number(params.product?.unit_stock) ){
            Alert.alert("Error: Cantidad","No hay stock suficiente para la cantidad",[
                { style: 'cancel' },
                { style: 'default' }
              ]
            )
        }else{
          dispatchCart(
            {
              payload: { ...params.product!, amount: +amount! },
              type: typeAction.CART_ADD
            }
          )
        }
      }else{
          Alert.alert("Error: Cantidad", "La cantidad no es correcta",[
            { style: 'cancel' },
            { style: 'default' }
          ])
      }
    }
  return {
    cart, 
    setamount, 
    params, 
    handleAddCart,
    dispatchCart
  }
}
