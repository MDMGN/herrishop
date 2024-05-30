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

export type Product={
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

export type ProductCart = Product &{ amount: number };

export type Cart = {
    [key: Product["id"]] : ProductCart
}