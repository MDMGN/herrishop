import { Dispatch, SetStateAction, createContext } from "react";

type UserProvider={
    user: User,
    isLogin: boolean,
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    setUser: Dispatch<SetStateAction<User>>,
    token: string | undefined,
    setToken: Dispatch<SetStateAction<string | undefined>>
}

export const UserContext=createContext({} as UserProvider);