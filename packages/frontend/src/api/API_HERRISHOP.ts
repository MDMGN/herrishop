const host = 'localhost:3000'
const BASE_URL = `http://${host}/api/v1`

const URL_REGISTER= `${BASE_URL}/users`

const URL_LOGIN = `${BASE_URL}/login`

const URL_PRODUCTS = `${BASE_URL}/products`
const URL_BRANDS = `${BASE_URL}/brands`
const URL_CATEGORIES = `${BASE_URL}/categories`

export{
    URL_LOGIN,
    URL_REGISTER,
    URL_PRODUCTS,
    URL_CATEGORIES,
    URL_BRANDS
}