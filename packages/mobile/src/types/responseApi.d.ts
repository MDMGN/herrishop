
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


type ReponseApiLogin={
    error: boolean,
    status: number,
    result: User | { token: string}
}

type ReponseApiProduts={
    error: boolean,
    status: number,
    data: Product[]
}