import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";

const RestaurantDetails=(props)=>{
  const params=useParams().resId;
  const [data,setData]=useState([])
  console.log(params,'params')
  useEffect(()=>{
    console.log('inin')
    loadData()
 },[])

 const loadData=async ()=>{
     try{
     let res=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${params}`)
     const jsonRes=await res.json()
     console.log(jsonRes,'dd')
     setData(jsonRes?.data?.cards[4]?.groupedCard.cardGroupMap['REGULAR'].cards[5].card.card.itemCards)
 }
     catch(error){
         console.log(error)
     }
 }
    console.log(data,'dataa')
    return(
    <div className="res-card-details">
      {data.map((row)=>{
        const {name,imageId}=row.card.info;
        return <div>
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ imageId} className="food-image"></img>
          {name}
        </div>
      })}
        </div>

  )
}
export default RestaurantDetails