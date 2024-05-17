import { Dispatch, SetStateAction, createContext } from "react";
import type { Cart } from "../../types/response";

type UserProvider={
    user: User,
    isLogin: SetStateAction<boolean>,
    cart : Cart,
    setIsLogin: SetStateAction<boolean>,
    setUser: Dispatch<SetStateAction<User>>,
    setCart: Dispatch<SetStateAction<Cart>>
}

export const UserContext=createContext({} as UserProvider);