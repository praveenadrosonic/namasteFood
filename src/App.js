import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from './components/Header'
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
const routes = createBrowserRouter ([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/aboutus",
                element:<About/>,
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);