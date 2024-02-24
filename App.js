
import React from "react"
import ReactDOM from "react-dom/client"
import { response } from "./ApiResponse";
import RestaurantCard from "./src/Components/RestaurantCard";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter,RouterProvider,useRouteError,Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import RestaurantDetails from "./src/Components/RestaurantDetails";
// https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png
const h1 = React.createElement("h1", {id:"heading"}, "Hello World from React");







const AppLayout=()=>{

    return(
        <div className="app-layout">
            <Header/>
           <Outlet/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {path:'/',element:<AppLayout/>,errorElement:<Error/>,children:[{path:'/',element:<Body/>,errorElement:<Error/>}, {path:'/about',element:<About/>,errorElement:<Error/>},
    {path:'/contact',element:<Contact/>,errorElement:<Error/>},{path:'restaurant/:resId',element:<RestaurantDetails/>,errorElement:<Error/>}]},
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);