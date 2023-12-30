import { CDN_URL } from "../utils/constants"; 
const RestaurantCard = (props) => {
    const {name,cuisines,costForTwo,cloudinaryImageId,avgRating,deliveryTime} = props.restaurantDetails.info;
    return (
        <div className="restaurant-card">
            <img alt="restaurant-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="restaurant-description">
                <div className="resturant-name"><h4>{name}</h4></div>
                <div className="cuisine-description"><h6>{cuisines.join(" ,")}</h6></div>
                <div className="price-for-two">Price for two: {costForTwo}</div>
                <div className="restaurant-rating">Rating: {avgRating}</div>
                <div className="expected-time">{deliveryTime} minutes</div>
            </div>
        </div>
    )
}

export default RestaurantCard;