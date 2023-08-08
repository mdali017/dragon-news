import {
  Navigate,
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to='/category/0'></Navigate>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
    {
      // path: "/",
      path: "category",
      element: <Main></Main>,
      children: [
        // {
        //     path: '/',
        //     element: <Home></Home>
        // },
        // {
        //     path: '/',
        //     element: <Category></Category>,
        //     loader: () => fetch('http://localhost:3000/news')
        // },
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
        },
      ]
    },
    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router;