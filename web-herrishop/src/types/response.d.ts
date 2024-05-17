import { User } from "./user"

type Login={
    error: boolean,
    results: {
        user: User,
        orders:Array
    }
}
type Product={
    id: number,
    name: string,
    customer_id: number,
    category_id: number,
    unit_stock: number,
    unit_price: number,
    description: string,
    image: null | string;
}

type ProductCart = Product &{ amount: number };

type Cart = {
    [key: Product["id"]] : ProductCart
}