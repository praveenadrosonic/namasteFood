import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import {RESTAURANT_API_URL} from "../utils/constants.js"
import Shimmer from "./Shimmer.js";

const Body = () => {
    const [restaurantList,setRestaurantList] = useState([]);
    const [restaurantTopList,setTopRestaurantList] = useState([]);
    const [topRatedText,setTopRatedText] = useState('Top Rated Restaurants :');
    const [filterText,setFilterText] = useState("");
    const [filteredRestaurantList,setFilteredRestaurantList] = useState([]);  

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
        const data = await fetch(RESTAURANT_API_URL).catch(e => console.log(e));
        const jsonData = await data.json();
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return filteredRestaurantList.length === 0 ? 
    (<><div className="search-container">
    <input type="search" value={filterText} onChange={(e)=>{setFilterText(e.target.value) }} />
    <button onClick={()=>{setFilteredRestaurantList(restaurantList.filter((res)=>res.info.name.toLowerCase().includes(filterText.toLowerCase())))}}>Search</button>
    </div><Shimmer/></>) : 
    (
        <>
            <div className="search-container">
                <input type="search" value={filterText} onChange={(e)=>{setFilterText(e.target.value); setFilteredRestaurantList(restaurantList.filter((res)=>res.info.name.toLowerCase().includes(filterText.toLowerCase())))}} />
                <button onClick={()=>{console.log(filterText);setFilteredRestaurantList(restaurantList.filter((res)=>res.info.name.toLowerCase().includes(filterText.toLowerCase())))}}>Search</button>
            </div>
            <button className="top-rated" onClick={topFilterToggle}><h2>{topRatedText}</h2></button>
            {topRatedText == "Top Rated Restaurants :" ? (<> </>) : <div className="restaurant-container top-rated-restaurants-container"> {restaurantTopList.map( (restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurantDetails={restaurant}/> )} </div> }
            <h2>All Restaurants:</h2>
            <div className="restaurant-container">
                { filteredRestaurantList.map( (restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurantDetails={restaurant}/> ) }
            </div>
        </>
    )
}

export default Body;
