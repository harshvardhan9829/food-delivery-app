import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';




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
    return listOfRestraunts.length === 0 ? <Shimmer /> :
        (
            <div className='body'>
                <div className="filter">
                    <div className="search">
                        <input type="text" name="search" id="" className='search-box' value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}} />
                        <button onClick={() => {
                            // filter cards
                            // get data from the input box
                            let filteredData = listOfRestraunts.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestraunt(filteredData)
                        }}>Search</button>
                    </div>
                    <button className='filter-btn'
                        onClick={() => {
                            let temp = listOfRestraunts.filter((res) => { return res.info.avgRating > 4 })
                            setlistOfRestraunts(temp)
                        }} >Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {filteredRestraunt.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    })
                    }
                </div>

            </div>
        )
}

export default Body