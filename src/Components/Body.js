import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { response } from "../../ApiResponse"
const Body=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
       loadData()
    },[])

    const loadData=async ()=>{
        try{
        let res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonRes=await res.json()
        console.log(jsonRes,'dd')
        setData(jsonRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
        catch(error){
            console.log(error)
        }
    }
    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {data.map((restaurant)=><RestaurantCard data={restaurant}/>)}
       
        </div>

    </div>)
}
export default Body