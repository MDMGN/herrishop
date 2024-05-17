import { useCallback, useContext } from "react"
import { ProductCart } from "../types/entities"
import { UserContext } from "../contexts/UserContext"

export  function TableCart() {

  const { cart, setCart } = useContext(UserContext)
  const total = useCallback(()=>Object.values(cart).reduce((acc,item)=> acc+= (item.amount * item.unit_price),0),[cart])

  return (
    <table className="border-neutral-950 border w-full text-center">
          <thead>
            <tr>
              <th className="border-neutral-950 border">Imagen</th>
              <th className="border-neutral-950 border">Precio</th>
              <th className="border-neutral-950 border">Producto</th>
              <th className="border-neutral-950 border">Cantidad</th>
              <th className="border-neutral-950 border"></th>
            </tr>
          </thead>
          <tbody>
            
          {Object.values(cart).map(({id, name ,unit_price  ,unit_stock, image, amount }:ProductCart)=>
             (<tr key={id}>
                 <td className="w-auto border-neutral-950 border">
                      <img src={ image ?? ''}  title={`Image of ${name} product`} />
                 </td>
                 <td className="w-auto border-neutral-950 border">{name}</td>
                 <td className="w-16 text-center border-neutral-950 border">{ unit_price+ " $"}</td>
                 <td className="border-neutral-950 border">
                  <input  
                        type="number" 
                        min={1} 
                        max={unit_stock}
                        className="w-16 text-center"
                        value={amount}
                        onChange={(e)=>{
                            setCart((oldValue)=>{
                                const newValue={...oldValue, [id]: {...oldValue[id], amount:  +e.target.value} }
                                localStorage.setItem("cart",JSON.stringify(newValue))
                               return newValue
                            })
                          } 
                        }
                  />
                  </td>
                  <td className="w-20 border-neutral-950 border">
                      <i className="fa fa-trash cursor-pointer p-2 text-xl" 
                          onClick={()=>{
                                 setCart((oldValue)=>{
                                  const {[id]:deleteValue, ... restValues}= oldValue
                                    localStorage.setItem("cart",JSON.stringify(restValues))
                                    return restValues
                                 })
                          }}
                      ></i>
                  </td>
             </tr>
          ))
          }
          </tbody>
          <tfoot>
            <tr>
                <td className="font-bold text-right">Total: </td>
                <td className="font-bold w-auto" colSpan={3}>{total() + " $"}</td>
            </tr>
          </tfoot>
      </table>
  )
}
