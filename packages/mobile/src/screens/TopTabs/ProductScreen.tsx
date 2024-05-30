  import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
  import { useContext, useLayoutEffect, useReducer } from 'react'
  import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
  import type { Product } from '../../types/entities'
  import { ScrollView } from 'react-native-gesture-handler'
import { moneyFormat } from '../../helpers'
import {  typeAction } from '../../reducers/ProductsReducer'
import { UserContext } from '../../contexts/UserContext'

  type DetailsHeroRouteParams={
    product: Product | undefined
  }
  type DetailsHeroRouteProp = RouteProp<ParamListBase, "product-hunt"> & {
    params: DetailsHeroRouteParams;
  };

  export  function ProductScreen() {
    const {dispatchCart,cart} =useContext(UserContext)
    const {params} = useRoute<DetailsHeroRouteProp>()


    return (
      <View>
        {
          !(params?.product) ?
              <Text>Elige un producto</Text>
              :
              <ScrollView>
                  <Text>{ params.product.name}</Text>
                  <Text>Categoria: { params.product.category.name}</Text>
                  <Image source={ {uri: params.product.image ?? ''}}></Image>
                  <Text>{ params.product.description}</Text>
                  <Text>{ moneyFormat(params.product.unit_price) }</Text>
                  <Text>Stock: { params.product.unit_stock}</Text>
                   { 
                   cart[params.product.id] ? 
                   (<TouchableOpacity
                      onPress={()=> dispatchCart(
                            {
                              payload: { ...params.product!, amount: 0 },
                              type: typeAction.CART_ADD
                            }
                      ) }
                    >
                      <Text>Agregar a la cesta</Text> 
                      </TouchableOpacity>)
                      :
                    (<TouchableOpacity
                          onPress={()=> dispatchCart(
                                {
                                  payload: params.product?.id!,
                                  type: typeAction.CART_REMOVE
                                }
                          ) }
                        >
                      <Text>Quitar de la cesta</Text> 
                    </TouchableOpacity>)
                  }
              </ScrollView>
        }
        
      </View>
    )
  }