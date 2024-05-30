import { View, Text } from 'react-native'
import React, { useCallback, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { moneyFormat } from '../../helpers'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function CheckoutSreen() {
  const {cart} = useContext(UserContext)
  const getTotalItems = useCallback(()=> Object.keys(cart).length ,[cart])
  const getTotalPayment = useCallback(()=> Object.values(cart).reduce((acc,item)=> acc+=item.amount * item.unit_price ,0),[cart])
  return (
    <View style={{alignItems: 'center', gap: 10, marginVertical: 50, marginHorizontal: 20, backgroundColor: '#fde7aa', padding: 20}}>
       <View style= {{height: '70%', justifyContent: 'center', gap:10}}>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18 }}>Total de productos: </Text>
              <Text style={{ fontSize: 18 }}>{getTotalItems()}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18 }}>Total a pagar: </Text>
              <Text style={{ fontSize: 18 }}>{moneyFormat(getTotalPayment())}</Text>
        </View>
       </View>
       <View style= {{ width: '80%', borderWidth: 2, borderColor: '#fdba74' }} />
       <TouchableOpacity
        style= {{padding: 10, borderRadius: 10, backgroundColor: '#7e22ce', width: '100%' }}
        disabled= { (getTotalItems() <= 0) }
       >
         <Text style={{textTransform: 'uppercase', color: '#fff', fontWeight: 'bold', opacity: (getTotalItems() > 0) ? 1 : 0.2  }}>Confirmar</Text>
       </TouchableOpacity>
      </View>
  )
}