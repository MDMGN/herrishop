import { NavLink } from "react-router-dom";
const clasActive="after:bg-red-500 after:w-10 after:h-1 after:absolute after:top-4 after:left-[-45px] md:after:left-[-55px]";

export default function Navbar() {
  return (
    <nav>
        <ul className="flex flex-col text-xl gap-5 my-16">
            <li className="relative">
              <NavLink to={'/'} className={({isActive})=> isActive ? clasActive : ""} >Home</NavLink>
            </li>
            <li className="relative">
              <NavLink to={"/shop"} className={({isActive})=> isActive ? clasActive : ""} >Shop</NavLink>
              </li>
            <li className="relative">
              <NavLink to={"/product"} className={({isActive})=> isActive ? clasActive : ""}>Product</NavLink>
            </li>
            <li className="relative">
              <NavLink to={"/cart"} className={({isActive})=> isActive ? clasActive : ""}>Cart</NavLink>
              </li>
            <li className="relative">
              <NavLink to= {"/checkout"} className={({isActive})=> isActive ? clasActive : ""}>Checkout</NavLink>
            </li>
        </ul>
    </nav>
  )
}
