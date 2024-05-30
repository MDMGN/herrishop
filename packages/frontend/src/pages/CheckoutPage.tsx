import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export function CheckoutPage({ }) {
  const  {cart} = useContext(UserContext)
  return (
    <div className="flex justify-between mt-8 flex-wrap lg:justify-center">
          <div className="bg-white rounded shadow p-2 w-full lg:w-2/4">
            <div className="w-full bg-orange-200 px-8 py-6">
              <h3 className="text-2xl mt-4 font-bold">Price Breakdown</h3>
              <div className="flex justify-between mt-3">
                <div className="text-xl text-orange-900 font-bold">Amount</div>
                <div className='text-xl text-right font-bold '>$102</div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="text-xl text-orange-900 font-bold">VAT (15%)</div>
                <div className='text-xl text-right font-bold'>$12</div>
              </div>
              <div className="bg-orange-300 h-1 w-full mt-3"></div>
              <div className="flex justify-between mt-3">
                <div className="text-xl text-orange-900 font-bold">Total Amount</div>
                <div className="text-2xl text-orange-900 font-bold">$114</div>
              </div>
              <button className="px-4 py-4 bg-purple-700 text-white w-full mt-3 rounded shadow font-bold hover:bg-purple- 900"> CHECKOUT</button>
            </div>
          </div>
          <div className="bg-white rounded shadow px-10 py-6 w-full mt-4 flex flex-wrap justify-center lg:w-2/4 lg:ml-3">
            <div className="pr-8">
              <h3 className="text-2xl mt-4 font-bold text-purple-900">Thank You, Alex</h3>
              <h4 className="text-sm text-gray-600 font-bold">ORDER #5624</h4>
            </div>
            <img src="https://image.flaticon.com/icons/svg/1611/1611768.svg" alt="" className="w-24" />
          </div>
        </div>
  )
}
