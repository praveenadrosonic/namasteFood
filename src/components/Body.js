import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import {RESTAURANT_API_URL} from "../utils/constants.js"
const Body = () => {
    const [restaurantList,setRestaurantList] = useState([]);
    const [restaurantTopList,setTopRestaurantList] = useState([]);
    const [topRatedText,setTopRatedText] =useState('Top Rated Restaurants :');

    const topFilterToggle = () => {
        if(topRatedText === 'Top Rated Restaurants :') {
            setTopRestaurantList(restaurantList.filter( (restaurant) => { return (restaurant?.info?.avgRating >= 4.0) }).sort((a, b) => { return (a?.info?.avgRating - b?.info?.avgRating) *-1}));
            setTopRatedText('Hide Top Rated Restaurants :');
        } else {
            setTopRestaurantList([]);
            setTopRatedText('Top Rated Restaurants :');
        }
    }

    useEffect(()=> {
        fetchRestaurantData();
    },[])

    const fetchRestaurantData = async () => {
        const data = await fetch(RESTAURANT_API_URL);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurantList.length === 0) {
        return <span className="loader"></span>;
    }

    return (
        <>
            <div className="search-container">Search</div>
            <button className="top-rated" onClick={topFilterToggle}><h2>{topRatedText}</h2></button>
            <div className="restaurant-container top-rated-restaurants-container">{ restaurantTopList.map( (restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurantDetails={restaurant}/> ) }</div>
            <h2>All Restaurants:</h2>
            <div className="restaurant-container">
                { restaurantList.map( (restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurantDetails={restaurant}/> ) }
            </div>
        </>
    )
}

export default Body;