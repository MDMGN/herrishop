  import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { moneyFormat } from '../../helpers'
import {  typeAction } from '../../reducers/ProductsReducer'
import useProduct from '../../hooks/useProduct'


  export  function ProductScreen() {
    const { cart, handleAddCart, params, setamount, dispatchCart} = useProduct()

    return (
      <View>
        {
          !(params?.product) ?
          <View style={{justifyContent: 'center', height:'100%'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Elige un producto</Text>
          </View>
              :
              <ScrollView style={styles.container}>
                  <Text style={{textAlign: 'center', margin:10, fontSize: 20, fontWeight:'bold'}}>{ params.product.name}</Text>
                  <Text  style={{margin:10, fontSize: 18, fontWeight:'bold'}}>Categoria: { params.product.category.name}</Text>
                  <Image source={ {uri: params.product.image ?? ''}} />
                  <Text  style={{ margin:10, fontSize: 16, fontWeight:'400'}}>{ params.product.description}</Text>
                  <Text style={{ margin:10, fontSize: 17, fontWeight:'bold'}}> Precio: {moneyFormat(params.product.unit_price) }</Text>
                   { 
                    !cart[params.product.id] ? 
                   (
                    <>
                    <View style= {{flexDirection: 'row', justifyContent: 'center', gap: 20}} >
                      <Text style={{fontSize: 20}}>Cantidad: </Text>
                      <TextInput  
                        onChangeText={value=> setamount(+value)} 
                        keyboardType= 'numeric' 
                        style= {{ borderColor: '#000', borderWidth: 1, width: 80, height: 30}}
                        />
                    </View>
                    <Text style={{ margin:10, fontSize: 18, fontWeight:'bold'}} >
                      Stock: { params.product.unit_stock}
                    </Text>
                    <TouchableOpacity onPress={handleAddCart} >
                        <Text style = {[styles.btn, {backgroundColor: '#22c55e'}]}>Agregar a la cesta</Text> 
                      </TouchableOpacity>
                      </>
                      )
                      :
                    (
                      <TouchableOpacity
                              onPress={()=>dispatchCart({ payload: params.product?.id!,  type: typeAction.CART_REMOVE }) }
                      >
                        <Text style = {[styles.btn, {backgroundColor: '#ef4444'}]}>Quitar de la cesta</Text> 
                      </TouchableOpacity>
                    )
                  }
              </ScrollView>
        }
      </View>
    )
  }

  const styles=StyleSheet.create({
    container:{
        padding: 20,
        textAlign: 'center',
    },
    btn:{
      textAlign: 'center',
      padding: 12,
      borderRadius: 20,
      marginHorizontal: 80,
      marginVertical: 50,
      fontSize: 15,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    }
  })