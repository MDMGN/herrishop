import { createBrowserRouter } from "react-router-dom";
import { CartPage, CheckoutPage, HomePage, LoginPage, ProductPage, Root, ShopPage } from "../pages";
import PrivateRoute from "./PrivateRoute";


export const router=createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'product/:id',
                Component: ProductPage
            },
            {
                path: 'product',
                Component: ProductPage
            },
            {
                path: 'cart',
                Component: CartPage
            },
            {
                path: 'dashboard',
                Component: PrivateRoute
            },
            {
                path: 'login',
                Component: LoginPage
            },
            {
                path:'checkout',
                Component: CheckoutPage
            },
            {
                path: 'page',
                Component: CheckoutPage
            },
            {
                path: 'shop',
                Component: ShopPage
            }
        ]
    }
])