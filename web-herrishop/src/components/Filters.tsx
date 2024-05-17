import { useState } from "react"

export  function Filters() {
    const [categories, setCategories]= useState<string[]>([])
    
  return (
   <aside>
     <div>
        <p>Categories</p>
        <ul className="px-5 my-5">
            {categories.map(el=> <li key={el+Date.now()} className="text-md my-3 cursor-pointer hover:font-bold">{el}</li>)}
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
