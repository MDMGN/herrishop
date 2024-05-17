import { useEffect, useState } from "react";
import { ajax } from "../helpers";
import { reponseApiProducts } from "../types/responseApi";
import { Product } from "../types/response";
import {Products} from "../components";

export function HomePage() {
  const [products, setProducts] = useState([] as Product[])

  useEffect(()=>{
    ajax({
      url: '/api/products',
      cbSuccess: (response:reponseApiProducts)=>{
        const {items} = response
        if(!response.error) 
            setProducts(items)
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
