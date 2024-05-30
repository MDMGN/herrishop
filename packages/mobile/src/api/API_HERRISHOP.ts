const host = '192.168.37.158:3000'
const BASE_URL = `http://${host}/api/v1`

const URL_REGISTER= `${BASE_URL}/users`

const URL_LOGIN = `${BASE_URL}/auth`
const URL_PRODUCTS = `${BASE_URL}/products`

export{
    URL_LOGIN,
    URL_REGISTER,
    URL_PRODUCTS
}