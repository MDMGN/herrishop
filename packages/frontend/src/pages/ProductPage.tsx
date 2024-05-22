
import { NavLink } from "react-router-dom";
import { Toaster } from 'sonner'
import useProduct from "../hooks/useProduct";

export function ProductPage() {
  const {addCart,product, cart, amountRef} = useProduct()

  const hasStock= product.unit_stock > 0
  const isAdded= cart.hasOwnProperty(product.id)
  
  return (
    <section className="min-h-screen bg-gray-300">
        <Toaster richColors />  
        { Object.keys(product).length !== 0 ?
          (<>
              <div className="flex justify-between w-80 font-bold">
                <NavLink to={"/"}>Home</NavLink> 
                <span>/</span>
                <NavLink to={"/shop"}>Shop</NavLink>
                <span>/</span>
                <NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
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
                    className={`relative  after:w-3 after:absolute after:h-3 after:left-[-15px] after:top-[5px] after:rounded-lg ${ hasStock ? 'after:bg-green-500' : 'after:bg-red-500'}`}>
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
