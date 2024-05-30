import {  Alert, View } from "react-native";
import { ProductsContainer } from "../../components";
import { useEffect, useState } from "react";
import { ajax } from "../../helpers";
import { URL_PRODUCTS } from "../../api/API_HERRISHOP";
import { Product } from "../../types/entities";

export function HomeScreen() {
  const [products, setProducts] = useState([] as Product[])
  
  useEffect(()=>{
      ajax({
        url: URL_PRODUCTS,
        method: "GET",
        cbSuccess: (res: ReponseApiProduts)=>{
              if(!res.error){
                setProducts(()=> [...res.data])
              }
        },
        cbError: (res: ResponseError)=>{
          Alert.alert('Error','Lo sentimos, no se ha podido cargar losp roductos', [
            {style:'destructive',text:'Aceptar'}
         ])
        }
      })
  },[])

  return (
      <ProductsContainer products={products} />
  )
}
