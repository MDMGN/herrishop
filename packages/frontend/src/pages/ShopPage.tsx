import { useEffect, useState } from "react";
import { Filters, ProductsContainer } from "../components";
import { ajax } from "../helpers";
import { URL_PRODUCTS } from "../api/API_HERRISHOP";
import { reponseApiProducts } from "../types/responseApi";

type Filter={
  brands: Array<Brand["id"]>,
  category: Category["id"]
}

export function ShopPage() {
  const [ products, setProducts ] = useState([] as Product[])
  const [ productsFilter, setProductsFilter ] = useState([] as Product[])

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

  const handleFilter=( filter : Filter  )=>{
    const { brands, category } = filter
    const filters= products.filter( item => category ? item.category.id === category : true && brands.length ? brands.includes(item.brand.id) : true )
      setProductsFilter([...filters])
  }

  return (
    <section className="w-full p-16  h-screen grid grid-cols-[250px,1fr]">
        <Filters handleFilter= {handleFilter}  />
        <ProductsContainer products={ productsFilter} />
    </section>
  )
}
