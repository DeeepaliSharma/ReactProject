import RestaurantCard from "./RestaurantCard";
//import resList from "../utils.js/mockdatafile";
import { useState  ,useEffect} from "react";
import Shimmer from "./Shimmer";
  

 const Body = () =>
    {

        const [ressList , setressList] = useState([]);

        useEffect (()=> {
            fetchData();
        },[]);

        const fetchData =async () =>{
            const data =  await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
       // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setressList (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
       if (ressList.length === 0)
        {
            return <Shimmer/>;
        }
       
        return(
            <div className="body">         
            <div className="search">Search</div>     
            <div className="filter">
                <button className="filter-btn" onClick= {() => 
                    {const filteredlist  = ressList.filter(
                        (res) => res.info.avgRating > 4);
                       setressList(filteredlist);
                        } }> 
                  Top rated Restaurants  </button>   
           </div>
            <div className="res-container">
            {
                    ressList.map((restaurant) =>(
                        <RestaurantCard key ={restaurant.info.id} resData={restaurant} />
                    ))
                   }
            </div>
            </div>

        );
    };

    export default Body;
