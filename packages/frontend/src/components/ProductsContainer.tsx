import { useEffect, useState } from "react"
import { Product } from "../types/entities"
import { ajax } from "../helpers";
import { Products } from "./Products";
import { reponseApiProducts } from "../types/responseApi";

export function ProductsContainer() {

  const [products, setProducts ] = useState([] as Product[])

  useEffect(()=>{
    ajax({
      url: '/api/products',
      cbSuccess: (response:reponseApiProducts)=>{
        const {items} = response
        if(!response.error) 
            setProducts([...items])
      },  
      cbError:(error)=>{
        console.log(error)    
      },
      method:"GET"
    })
  },[])

  return (
      <Products products={products} />
  )
}
