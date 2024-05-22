import { useCallback, useContext } from "react"
import { ProductCart } from "../types/entities"
import { UserContext } from "../contexts/UserContext"

export  function TableCart() {

  const { cart, setCart } = useContext(UserContext)
  const total = useCallback(()=>Object.values(cart).reduce((acc,item)=> acc+= (item.amount * item.unit_price),0),[cart])

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
        <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41KufN65f8L.jpg" className="w-12" />
            <div className="w-2/3">
              <h3 className="text-lg font-medium">Black Jacket XL</h3>
              <p className="text-gray-600 text-xs">Sold by <b>Aashir Khan</b></p>
              <h4 className="text-red-700 text-xs font-bold mt-1">Only 2 left in stock</h4>
            </div>
            <div>
              <h4 className="text-3xl font-medium"><sup className="text-lg text-purple-800">$</sup> 89</h4>
              <h5 className="text-sm font-bold text-purple-800">60% OFF</h5>
            </div>
            <div className="w-full flex justify-between mt-4">
              <button className="text-red-700 hover:bg-red-100 px-2">DELETE</button>
              <label className="block uppercase tracking-wide text-gray-700" htmlFor="grid-first-name">
                QTY
                <select className="ml-3 text-sm bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight" id="grid-state">
                  <option>1</option>
                  <option>2</option>
                </select>
              </label>
            </div>
        </div>
        <div className="border w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
          <img src="https://cdn11.bigcommerce.com/s-tboh32g/images/stencil/1280x1280/products/385314/492280/104C_BlackBlackHQ__07610.1557157866.jpg?c=2?imbypass=on" className="w-12" />
          <div className="w-2/3">
            <h3 className="text-lg font-medium">Black Hat</h3>
            <p className="text-gray-600 text-xs">Sold by <b>Taha Dildar</b></p>
            <h4 className="text-red-700 text-xs font-bold mt-1">Only 1 left in stock</h4>
          </div>
          <div>
            <h4 className="text-3xl font-medium"><sup className="text-lg text-purple-800">$</sup> 20</h4>
            <h5 className="text-sm font-bold text-purple-800">40% OFF</h5>
          </div>
          <div className="w-full flex justify-between mt-4">
            <button className="text-red-700 hover:bg-red-100 px-2">DELETE</button>
            <label className="block uppercase tracking-wide text-gray-700" htmlFor="grid-first-name">
              QTY
              <select className="ml-3 text-sm bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight" id="grid-state">
                <option>1</option>
                <option>2</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <button className="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple-900">PROCEED TO CHECKOUT SCREEN</button>
    </div>
  </div>
  )
}
