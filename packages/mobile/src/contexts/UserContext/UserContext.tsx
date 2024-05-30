import { Dispatch, SetStateAction, createContext } from "react";
import type { Cart, User } from "../../types/entities";
import type { ActionCart } from "../../reducers/ProductsReducer";

type UserProvider={
    user: User,
    isLogin: boolean,
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    setUser: Dispatch<SetStateAction<User>>,
    token: string | undefined,
    setToken: Dispatch<SetStateAction<string | undefined>>
    cart: Cart,
    dispatchCart: Dispatch<ActionCart>
}

export const UserContext=createContext({} as UserProvider);