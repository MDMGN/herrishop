import { Product } from "./response"

type reponseApiRegister={
    error : boolean,
    code : number,
    message: string | ErrorMessage,
}

type ErrorMessage={
    error_message: string,
    error: Array<Record<string,string>>
}


type reponseApiLogin={
    error: boolean,
    message?: string | ErrorMessage,
    results?: {
        user: User,
        orders:Array
    }
}

type reponseApiProducts={
    error: boolean,
    count: int,
    current_page: int,
    next_page: int | null,
    total_pages: int,
    data: Product[]
}