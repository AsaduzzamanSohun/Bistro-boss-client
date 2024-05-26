import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/Cart/AddItems";
import ManageItems from "../Pages/Dashboard/Cart/ManageItems";
import UpdateItem from "../Components/UpdateItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: "/shop/:category",
                element: <OurShop></OurShop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <AdminRoute><Cart></Cart></AdminRoute>
            },

            // admin only routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItems/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL}/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }

        ]
    }

]);

export default router;