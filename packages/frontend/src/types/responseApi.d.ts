import { Product } from "./entities"

export type reponseApiRegister={
    error : boolean,
    code : number,
    message: string | ErrorMessage,
}

export type ErrorMessage={
    error_message: string,
    error: Array<Record<string,string>>
}


export type reponseApiLogin={
    error: boolean,
    message?: string | ErrorMessage,
    results?: {
        user: User,
        orders:Array
    }
}

export type reponseApiProducts={
    error: boolean,
    count: int,
    current_page: int,
    next_page: int | null,
    total_pages: int,
    data: Product[]
}

export type reponseApiCategories={
    error: boolean,
    status: number,
    data: Category[]
}

export type reponseApiBrands={
    error: boolean,
    status: number,
    data: Brand[]
}

export type responseApiProduct={
    error: boolean,
    status: number,
    data: Brand
}