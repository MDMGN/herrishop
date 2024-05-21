import { useEffect, useState } from "react"
import { ajax } from "../helpers"
import type { reponseApiBrands, reponseApiCategories  } from "../types/responseApi"
import { URL_BRANDS , URL_CATEGORIES } from "../api/API_HERRISHOP"

type Filter={
  brands: Array<Brand["id"]>,
  category: Category["id"]
}

type Props={
  handleFilter: (filter: Filter )=> void
}

export  function Filters(props: Props) {
    const [categories, setCategories]= useState<Category[]>([])
    const [ brands, setBrands]= useState<Brand[]>([])
    const [ filter, setFilter ] = useState({ brands: [], category: 0 } as Filter)
    const {handleFilter} = props

    useEffect(()=>{
        ajax({
          url: URL_BRANDS,
          method: "GET",
          cbSuccess: (resp: reponseApiBrands)=>{
              const { data: brands } =resp
              setBrands([...brands])
          },
          cbError: (resp)=>{}
        })
    },[])

    useEffect(()=>{
      ajax({
        url: URL_CATEGORIES,
        method: "GET",
        cbSuccess: (resp:reponseApiCategories)=>{
            const { data: categories } =resp
            setCategories([...categories])
        },
        cbError: (resp)=>{}
      })
  },[])

  useEffect(()=>{
    handleFilter(filter)
  },[filter])
    
  return (
   <aside>
     <div>
        <p>Categories</p>
        <ul className="px-5 my-5">
            {categories.map(category=> <li key={category.id} 
            className="text-md my-3 cursor-pointer hover:font-bold hover:text-xl"
            data-name="category"
            onClick={({ target })=>{
                  setFilter({
                    ...filter,
                   [target.dataset.name]: category.id
                  })
            }} >
              {category.name}
          </li>)}
        </ul>
     </div>
     <div>
        <p>Brands</p>
        <ul className="px-5 my-5">
            {brands.map(brand=> <li key={brand.id} className="text-md my-3">
              <input 
                  type="checkbox" 
                  value={brand.id}
                  name="brands"
                  onChange={({ target })=>{
                    setFilter((oldValue)=> {
                      const newValue = filter.brands.filter( brand => brand !== +target.value )
                      return{
                        ...oldValue,
                        [target.name]: target.checked ? [...oldValue.brands, +target.value] : newValue
                      }
                      })
               }}/> 
                {" "+brand.name}
            </li>)}
        </ul>
     </div>
   </aside>
  )
}
