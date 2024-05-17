import { type Product } from "../types/response";
import { CardProduct } from "./CardProduct";

type Props={
    products:Product[]
}
export  function Products(props:Props) {
    const {products} = props
  return (
    <article className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 my-20 overflow-scroll">
        {
            products?.map((product)=>(
                <CardProduct key={product.id} product={product} />
            ))
        }
    </article>
  )
}
