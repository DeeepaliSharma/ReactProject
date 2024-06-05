import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurnatMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";

  


const AppLayout =()=>
    {
            return(
                <div className ="app">
                    < Header/>
                    < Outlet/>
                </div>
            );
    };

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <AppLayout/>,
            children:[
                {
                    path : "/",
                    element: <Body/>

                },

                {
                    path:"/about",
                    element: <About/>,
                   
        
                },
                {
                    path:"/contact",
                   
                    element: <ContactUs/>,
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurnatMenu/>
                }

            ],
            errorElement : <Error/>
           

        },
        {
            path:"/about",
            element: <About/>,
           

        },
        {
            path:"/contact",
           
            element: <ContactUs/>,
        },
       

]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />);