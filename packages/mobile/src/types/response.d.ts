import { User } from "./entities"

type Login={
    error: boolean,
    results: {
        user: User,
        orders:Array
    }
}