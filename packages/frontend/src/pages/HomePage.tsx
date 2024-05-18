import { useEffect, useState } from "react";
import { ajax } from "../helpers";
import { reponseApiProducts } from "../types/responseApi";
import { Product } from "../types/entities";
import {Products} from "../components";
import { URL_PRODUCTS } from "../api/API_HERRISHOP";

export function HomePage() {
  const [products, setProducts] = useState([] as Product[])

  useEffect(()=>{
    ajax({
      url: URL_PRODUCTS,
      cbSuccess: (response:reponseApiProducts)=>{
        const {data} = response
        if(!response.error) 
            setProducts(data)
      },  
      cbError:(error)=>{
        console.log(error)    
      },
      method:"GET"
    })
  },[])

  return (
    <>
          <section>
             <Products products={products}/>  
          </section>
    </>
  )
}
