type ReponseApiRegister={
    error : boolean,
    code : number,
    message: string,
}

type ResponseError={
    error: string,
    statusCode:number,
    message: string | string[]
}


type reponseApiLogin={
    error: boolean,
    message?: string | ErrorMessage,
    results?: {
        user: User,
        orders:Array
    }
}