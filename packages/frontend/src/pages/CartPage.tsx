import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { TableCart } from "../components"

export function CartPage() {

  const { cart }= useContext(UserContext)
  
    return (
      <section className="flex flex-col  items-center p-5 md:p-16 my-7 text-lg">
        {
          Object.keys(cart).length > 0 ? <TableCart /> :
          <p>No tiene propductos en la cesta</p>
        }
      </section>
    )
}
