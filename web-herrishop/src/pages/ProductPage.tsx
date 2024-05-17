import { useContext, useEffect, useRef, useState } from "react";
import type { Product } from "../types/entities";
import { ajax } from "../helpers";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {Toaster, toast} from 'sonner'
import { URL_PRODUCTS } from "../api/API_HERRISHOP";

export function ProductPage() {
  const {id} = useParams<{id: string}>();
  const [ product, setProduct] = useState({} as Product);
  const {cart, setCart} = useContext(UserContext)
  const amountRef = useRef<HTMLInputElement | null>(null)

  
  useEffect(()=>{
    ajax({
      url: `${URL_PRODUCTS}/${id}`,
      cbSuccess: ({error,data})=>{
        if(!error){
          setProduct(data)
        }
      },
      cbError: ()=>{},
      method: "GET",
    })
  },[])

  const addCart=():void=>{
    const amount=Number(amountRef.current?.value)
      
        if(!cart?.hasOwnProperty(product.id)){
            if(amount <= 0){
              amountRef.current?.select()
              return
            }
          const newValue={...cart,[product.id]:{...product,amount}};
          setCart({...newValue})
          localStorage.setItem("cart",JSON.stringify(newValue))
          toast.success("Producto se ha agregado al carrito")
          return
        }
        const { [product.id] : deleteValue, ...restValues } = cart
        setCart({...restValues})
        localStorage.setItem("cart",JSON.stringify(restValues))
        toast.error("El producto se ha elimnado del carrito")
  }

  const hasStock= product.unit_stock > 0
  const isAdded= cart.hasOwnProperty(product.id)
  return (
      <section className="p-5 md:p-16 my-7 text-lg">
        <Toaster richColors />  
        { Object.keys(product).length !== 0 ?
          (<>
              <div className="flex justify-between w-80 font-bold">
                <NavLink to={"/"}>Home</NavLink> 
                <span>/</span>
                <NavLink to={"/shop"}>Shop</NavLink>
                <span>/</span>
                <NavLink to={`/product/${id}`}>{product.name}</NavLink>
              </div>
            <article className="flex flex-wrap gap-5 w-full h-auto">
              <img src={product.image ?? ''} className="h-full w-5" />
              <div className="relative p-10 flex flex-col flex-wrap gap-5">
                <span 
                  className="absolute font-bold p-2 text-[25px] text-yellow-500 after:bg-yellow-500 after:w-20 after:absolute after:h-1 after:left-[-5px] after:top-[0px]"
                >
                    {product.unit_price} €
                  </span>
                <h1 className="center my-10 font-bold text-[30px] text-center">{ product.name }</h1>
                <span 
                    className={`relative  after:w-3 after:absolute after:h-3 after:left-[-15px] after:top-[5px] after:rounded-lg ${hasStock ? 'after:bg-green-500' : 'after:bg-red-500'}`}>
                    Stock
                </span>
                <p>{product.description}</p>
                <div className="flex justify-evenly">
                  <label htmlFor="qyt">Qyt</label>
                  <input type="number" id="qyt" className="border-5 border-black" min={0} max={product.unit_stock} ref={amountRef}/>
                </div>
                <button 
                    className={`${ isAdded ? 'bg-red-500' : 'bg-green-500'} p-5 text-white font-bold text-lg hover:opacity-[.8]`}
                    onClick={addCart}
                  >
                  { isAdded ? 'Delete from cart' : 'Add to cart'  }
                  </button>
              </div>
            </article>
            </>
         ) :
          (<p>Elige un producto</p>)
        }
         </section>
  ) 
}
