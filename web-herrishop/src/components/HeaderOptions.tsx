import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function HeaderOptions() {
  const { cart } = useContext(UserContext)

  const numProducts = useCallback(() => Object.keys(cart).length, [cart])

  return (
    <div className="flex flex-col gap-5">
      <Link to={"/cart"} className="flex justify-start gap-5">
        <i className="fa-solid fa-heart"></i> Cart ({numProducts()})
      </Link>
      <Link to="#" className="fav-nav flex justify-start gap-5"><i className="fa-regular fa-heart"></i>Favourite</Link>
      <Link to="#" className="search-nav flex justify-start gap-5"><i className="fa-solid fa-magnifying-glass"></i>Search</Link>
    </div>
  )
}