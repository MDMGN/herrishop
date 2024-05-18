import { useContext } from "react"
import { Navigate } from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"

type Props={
    children:JSX.Element
}

export default function DashBoardRoute({children}:Props) {
    const {isLogin}=useContext(UserContext)
    return isLogin ? children : <Navigate to={"/login"} />
}
