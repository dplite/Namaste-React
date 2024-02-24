import { Link } from "react-router-dom"

const RestaurantCard=(props)=>{
    console.log(props,'p')
    const {name,cloudinaryImageId,costForTwo,cuisines,avgRating,id}=props.data.info
    return(
    <Link to={`restaurant/${id}`}><div className="res-card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} className="food-image"></img>
            <h4>{name}</h4>
            <div>{cuisines.join(", ")}</div>
            <div>{avgRating} Rating</div>
            <div>{costForTwo}</div>
        </div></Link>

  )
}
export default RestaurantCard