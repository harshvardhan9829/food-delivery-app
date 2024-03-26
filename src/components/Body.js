import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useInternetStatusHook from '../utils/useInternetStatusHook';




function Body() {
    const [listOfRestraunts, setlistOfRestraunts] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2599845&lng=72.9693624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        let restrauntData = json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setlistOfRestraunts(restrauntData);
        setFilteredRestraunt(restrauntData)
    }


    const internetStatus = useInternetStatusHook();
    if(internetStatus=== false) return <h1>Oops, looks like you are offline. Please check your internet connection!</h1>



    return listOfRestraunts.length === 0 ? <Shimmer /> :
        (
            <div className='body container'>
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text" name="search" id="" className='search-box' value={searchText}
                            onChange={(e) => { setSearchText(e.target.value) }} />
                        <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={() => {
                            // filter cards
                            // get data from the input box
                            let filteredData = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestraunt(filteredData)
                        }}>Search</button>
                    </div>
                    <button className='filter-btn'
                        onClick={() => {
                            let temp = listOfRestraunts.filter((res) => { return res.info.avgRating > 4 })
                            setlistOfRestraunts(temp)
                        }} >Top Rated Restaurants</button>
                </div>
                <div className=" flex  flex-wrap justify-around">
                    {filteredRestraunt.map((restaurant) => {
                        return <Link key={restaurant.info.id} to={'restaurants/' + restaurant.info.id} ><RestaurantCard  resData={restaurant} /></Link>
                    })
                    }
                </div>

            </div>
        )
}

export default Body