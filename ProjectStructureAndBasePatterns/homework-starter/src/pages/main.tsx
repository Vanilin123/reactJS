import {  useState } from "react";
import {  useRestaurantsList } from "../hooks/getRestaurans";
import { updateRestaurantRating } from "../api/api";
import { Restaurant } from "./types";
import { RestaurantsCheck } from "./RestaurantsCheck";
import './main.css'
import { Search } from "../ui/Search/Search";


export const ReservationPage = () => {

   const { data, isLoading } = useRestaurantsList();
   const [FilteredRestaurants, setFilteredRestaurants] = useState(data)
   

   const updateRaiting = async(idCard:Restaurant['id'], raiting:Restaurant['raiting']) => {
   const responseData = await updateRestaurantRating({id:idCard,raiting})
   setFilteredRestaurants(data =>{
     return data?.map(FilteredRestaurants => {
      if(FilteredRestaurants.id === responseData.id) {
       return {...FilteredRestaurants, raiting:responseData.raiting}
      }
      return FilteredRestaurants
     })
   })
   }  

   
   const filterItems = (searchTerm) => { 
   const filteredItems = data.filter((dataName) =>
     dataName.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
   setFilteredRestaurants(filteredItems);
   }
   
  
    return (

        <div className='card-wrapper'>
            <Search onChangeCallback={filterItems}/>
            { isLoading && <p>Loading...</p>}
            {!isLoading && <RestaurantsCheck onChooseRest={updateRaiting} restaurants={FilteredRestaurants}/>}  
                </div>
            ) 
}
