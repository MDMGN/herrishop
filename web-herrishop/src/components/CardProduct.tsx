import { NavLink } from "react-router-dom";
import { Product } from "../types/response";

type Props={
  product:Product
}
export function CardProduct({product}:Props) {
  const {id, name, category_id, customer_id, description, image, unit_price} = product
  return (
    <div className="flex flex-col justify-center p-2 text-center items-center h-60 border border-black rounded-xl">
        <NavLink to={`/product/${id}`}>
            <img src={image ?? ''} title={`Image of ${name} product`} />
            <span className="block text-center">{unit_price} €</span>
            <p>{name}</p>
        </NavLink>
    </div>
  )
}
