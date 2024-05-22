import { Product } from "../types/entities";
import { Products } from "./Products";

type Props={
  products: Product[]
}

export function ProductsContainer( props: Props) {
 const { products} = props

  return (
      <Products products={products} />
  )
}
