import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CategoriesDetails from "../pages/Home/CategoriesDetails/CategoriesDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
                path : '/categories/:id',
                loader: ({params}) => fetch(`http://localhost:5000/categoryDetails/${params.id}`),
                element : <CategoriesDetails></CategoriesDetails>
            },
        ]
    }
])