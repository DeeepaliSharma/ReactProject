import { CDN_URL } from "../utils.js/constants";
const  RestaurantCard =(props) =>
    {
        const {resData}= props;
        const {name, cuisines ,cloudinaryImageId,avgRating,costForTwo,id} =resData?.info;
        

        return(
            <div className="res-card" style={{backgroundColor : "lightgray"}}>
                <img className="res-logo" alt="res-logo"
                src={ CDN_URL+cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h3>{id}</h3>
            
            
            
            
            </div>

          

        );
    };

    export default RestaurantCard;