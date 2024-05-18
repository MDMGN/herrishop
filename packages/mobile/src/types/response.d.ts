import { User } from "./user"

type Login={
    error: boolean,
    results: {
        user: User,
        orders:Array
    }
}