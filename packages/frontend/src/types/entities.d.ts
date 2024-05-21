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
    brand: Brand
    category: Category
}

type ProductCart = Product &{ amount: number };

type Cart = {
    [key: Product["id"]] : ProductCart
}

type User={
    id: number,
    password: string,
    surname: string,
    address: string,
    zipCode: string,
    email: string,
    birthdate: string,
    token?: string
}

type Category={
    id: number,
    name: string
}

type Brand={
    id: number,
    name: string
}