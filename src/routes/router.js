import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import MyOrders from "../pages/DashBoard/MyOrders/MyOrders";
import AddAProduct from "../pages/DashBoard/AddAProduct/AddAProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CategoriesDetails from "../pages/Home/CategoriesDetails/CategoriesDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MyProducts from "../pages/DashBoard/MyProducts/MyProducts";
import AllSeller from "../pages/DashBoard/AllSeller/AllSeller";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BuyerRoute from "./BuyerRoute";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/categories/:category',
                loader: ({params}) => fetch(`http://localhost:5000/categoryDetails/${params.category}`),
                element : <PrivateRoute><CategoriesDetails></CategoriesDetails></PrivateRoute>
            },
        ]
    },
    {
        path : '/dashboard',
        element : <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/dashboard/myOrder',
                element : <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path : '/dashboard/addProduct',
                element : <AddAProduct></AddAProduct>
            },
            {
                path : '/dashboard/myProduct',
                element : <MyProducts></MyProducts>
            },
            {
                path : '/dashboard/allSeller',
                element : <AllSeller></AllSeller>
            },
        ]
    }
])