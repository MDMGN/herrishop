import { Product } from "../types/entities";
import { CardProduct } from "./CardProduct";

type Props={
    products:Product[]
}
export  function Products(props:Props) {
    const {products} = props
  return (
    <article className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {
            products?.map((product)=>(
                <CardProduct key={product.id} product={product} />
            ))
        }
    </article>
  )
}
