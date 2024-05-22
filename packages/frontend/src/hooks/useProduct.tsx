import { useContext, useEffect, useRef, useState } from "react";
import type { Product } from "../types/entities";
import { ajax } from "../helpers";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { toast} from 'sonner'
import { URL_PRODUCTS } from "../api/API_HERRISHOP";
import { responseApiProduct } from "../types/responseApi";

export default function useProduct() {
  const {id} = useParams<{id: string}>();
  const [ product, setProduct] = useState({} as Product);
  const { cart, setCart} = useContext(UserContext)
  const amountRef = useRef<HTMLInputElement | null>(null)

  
  useEffect(()=>{
    if (!id) return
    ajax({
      url: `${URL_PRODUCTS}/${id}`,
      cbSuccess: ({ data:product, error }: responseApiProduct)=>{
        if(!error){
          setProduct(product)
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
  
    return {
        product,
        addCart,
        cart,
        amountRef
    }
}
