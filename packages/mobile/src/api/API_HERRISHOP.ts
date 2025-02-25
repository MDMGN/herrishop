const host = "172.18.20.42:3000";
const BASE_URL = `http://${host}/api/v1`;

const URL_REGISTER = `${BASE_URL}/users`;

const URL_LOGIN = `${BASE_URL}/auth`;
const URL_PRODUCTS = `${BASE_URL}/products`;

export { URL_LOGIN, URL_REGISTER, URL_PRODUCTS };
