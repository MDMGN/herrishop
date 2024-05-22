import useFilter from "../hooks/useFilter"
import { Brand, Category } from "../types/entities"

type Filter={
  brands: Array<Brand["id"]>,
  category: Category["id"]
}

type Props={
  handleFilter: (filter: Filter )=> void,
  brandsFilters: Array<Brand["id"]>
}

export  function Filters(props: Props) {
  const { brands, categories, brandsFilters, setFilter, filter } = useFilter(props)
    
  return (
   <aside>
     <div>
        <p 
        className="text-md my-3 cursor-pointer hover:font-bold hover:scale-5"
        onClick={()=> setFilter((oldValue)=>({...oldValue, category: 0}))}
        >
          Categories
        </p>
        <ul className="px-5 my-5">
            {categories.map(category=> <li key={category.id} 
            className="text-md my-3 cursor-pointer hover:font-bold hover:scale-5"
            data-name="category"
            onClick={e=>{
              const $li = e.target as HTMLElement
              const name= $li.dataset.name ?? ''
                  setFilter({
                    ...filter,
                   [name]: category.id 
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
                  className={ !brandsFilters.includes(brand.id) ? 'opacity-0': ''}
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
