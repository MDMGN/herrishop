import { useContext, useRef } from "react";
import { ProductCart } from "../types/entities";
import { UserContext } from "../contexts/UserContext";


type Props={
    item:ProductCart
}
export  function CartItem(props:Props) {
    const {id, name, unit_price, image, unit_stock, amount} = props.item
    const {setCart} = useContext(UserContext)

    const handleDeleteFromCart=(id:ProductCart["id"])=>{
        setCart((oldValue)=>{
            const { [id]: deleteValue, ...newValue} =oldValue
            return newValue
        })
    }

  return (
    <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
        <img src={image ?? ""} className="w-12" />
        <div className="w-2/3">
            <h3 className="text-lg font-medium">{ name }</h3>
            <h4 className="text-red-700 text-xs font-bold mt-1">Only {unit_stock} left in stock</h4>
        </div>
        <div>
            <h4 className="text-3xl font-medium"><sup className="text-lg text-purple-800">$</sup> {unit_price}</h4>
            <h5 className="text-sm font-bold text-purple-800">60% OFF</h5>
        </div>
        <div className="w-full flex justify-between mt-4">
            <button className="text-red-700 hover:bg-red-100 px-2" onClick={()=>handleDeleteFromCart(id)}>DELETE</button>
            <label className="block uppercase tracking-wide text-gray-700" htmlFor="grid-first-name">
                QTY {" "}
            <input 
                type="number" 
                className="text-center" 
                min={1} max={unit_stock} 
                value={amount} 
                onChange={(e)=> 
                    setCart((oldValue)=>{
                        return{
                            ...oldValue,
                            [id]:{
                                ... oldValue[id],
                                amount: +(e.target.value)
                            }
                        }   
                    }) 
                }
            />
            </label>
        </div>
    </div>
  )
}
