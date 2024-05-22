import { useEffect, useState } from "react";
import { ajax } from "../helpers";
import { URL_PRODUCTS } from "../api/API_HERRISHOP";
import { reponseApiProducts } from "../types/responseApi";
import { Brand, Product } from "../types/entities";

export default function useShop() {
    const [ products, setProducts ] = useState([] as Product[])
    const [ productsFilter, setProductsFilter ] = useState([] as Product[])
    const [ brandsFilters, setBrandsFilters ] = useState([] as Brand["id"][])

  useEffect(()=>{
    ajax({
      url: URL_PRODUCTS,
      method:"GET",
      cbSuccess: (response:reponseApiProducts)=>{
        const {data: products} = response
        if(!response.error) 
            setProducts([...products])
          setProductsFilter([...products])
      },  
      cbError:(error)=>{
        console.log(error)    
      }
    })
  },[])
  useEffect(()=>{
    const brands= Array.from(new Set(productsFilter.map( item => item.brand.id )))
    setBrandsFilters(()=> brands )
  },[productsFilter])

  return {
    products,
    brandsFilters,
    setProductsFilter,
    productsFilter
  }
}
