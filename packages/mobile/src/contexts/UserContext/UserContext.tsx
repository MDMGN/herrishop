import { Dispatch, SetStateAction, createContext } from "react";

type UserProvider={
    user: SetStateAction<User>,
    isLogin: SetStateAction<boolean>,
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext=createContext({} as UserProvider);