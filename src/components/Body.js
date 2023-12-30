import RestaurantCard from "./RestaurantCard";
import resList from "../utils/appData";
const Body = () => {
    const hell = 'a';
    
    return (
        <>
            <div className="search-container">Search</div>
            <button className="top-rated" onMouseOver={ resList.map( (restaurant) => { if(restaurant.info.avgRating >= 4.0){<RestaurantCard key={restaurant.info.id} restaurantDetails={restaurant}/> }}) }>Top Rated Restaurants :</button>
            <div className="restaurant-container">
                { resList.map( (restaurant) => <RestaurantCard key={restaurant.info.id} restaurantDetails={restaurant}/> ) }
            </div>
        </>
    )
}

export default Body;