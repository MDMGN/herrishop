const host = '192.168.1.246:3000'
const BASE_URL = `http://${host}/api`

const URL_REGISTER= `${BASE_URL}/users`

const URL_LOGIN = `${BASE_URL}/login`

export{
    URL_LOGIN,
    URL_REGISTER
}