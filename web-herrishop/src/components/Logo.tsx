import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="text-4xl my-7 font-bold">
            <Link to={'/'} className="text-yellow-500"><img src="img/core-img/logo.png" alt=""/>Herri<span className="text-cyan-600">Shop</span></Link>
    </div>
  )
}
