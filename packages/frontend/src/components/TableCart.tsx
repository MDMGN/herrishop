import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { CartItem } from "./CartItem"

export  function TableCart() {

  const { cart } = useContext(UserContext)


  return (
    <div className="container mx-auto p-10 max-w-screen-lg">
    <div className="bg-white rounded shadow p-8">
      {/*  <!--  ToastBar  --> */}
      <div className="w-full bg-orange-200 text-yellow-900 px-4 py-2 flex items-center">
        <img src="https://svgsilh.com/svg/151889.svg" className="w-10 block pr-2" />
        <div className="text-sm">Congrats you're eligible htmlFor a <b>Coupon Code</b> in this order </div>
      </div>
      {/*  <!-- Order Summary  --> */}
      <div>
        <h3 className="text-xl mt-4 font-bold">Order Summary</h3>
        {/* <!--     BOX     --> */}
        { Object.values(cart).map((item)=> <CartItem key={item.id} item={item} />) }
        
      </div>
      <button className="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">PROCEED TO CHECKOUT SCREEN</button>
    </div>
  </div>
  )
}
