const host = 'localhost:3000'
const BASE_URL = `http://${host}/api`

const URL_REGISTER= `${BASE_URL}/users`

const URL_LOGIN = `${BASE_URL}/login`

const URL_PRODUCTS = `${BASE_URL}/products`

export{
    URL_LOGIN,
    URL_REGISTER,
    URL_PRODUCTS
}