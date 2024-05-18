import { useEffect, useState } from "react"
import { ajax } from "../helpers"
import { URL_CATEGORIES } from "../api/API_HERRISHOP"
import { reponseApiCategories } from "../types/responseApi"

export  function Filters() {
    const [categories, setCategories]= useState<Categories[]>([])

    useEffect(()=>{
        ajax({
          url: URL_CATEGORIES,
          method: "GET",
          cbSuccess: (resp:reponseApiCategories)=>{
              const {data} =resp
              setCategories([...data])
          },
          cbError: (resp)=>{}
        })
    },[])
    
  return (
   <aside>
     <div>
        <p>Categories</p>
        <ul className="px-5 my-5">
            {categories.map(category=> <li key={category.id} className="text-md my-3 cursor-pointer hover:font-bold">{category.name}</li>)}
        </ul>
     </div>
     <div>
        <p>Brands</p>
        <ul className="px-5 my-5">
            {["Ikea","Artdeco","Factory"]
            .map(el=> <li key={el+Date.now()} className="text-md my-3"><input type="checkbox" value={el}/> {el}</li>)}
        </ul>
     </div>
   </aside>
  )
}
