import React, { useContext, useEffect, useState } from 'react'
import RestaurantCard, { withPromotedLabel } from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useInternetStatusHook from '../utils/useInternetStatusHook';
import UserContext from '../utils/UserContext';




function Body() {
    const [listOfRestraunts, setlistOfRestraunts] = useState([]);
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);
    const [searchText, setSearchText] = useState('');

    const { loggedInUser, setUserName } = useContext(UserContext)

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
    const RestraurentCardPromoted = withPromotedLabel(RestaurantCard)

    const internetStatus = useInternetStatusHook();
    if (internetStatus === false) return <h1>Oops, looks like you are offline. Please check your internet connection!</h1>



    return listOfRestraunts.length === 0 ? <Shimmer /> :
        (
            <div className='body container'>
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text" name="search" id="" className='searchBox border border-solid border-black' value={searchText}
                            onChange={(e) => { setSearchText(e.target.value) }} />
                        <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={() => {
                            // filter cards
                            // get data from the input box
                            let filteredData = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestraunt(filteredData)
                        }}>Search</button>
                    </div>

                    <div className="search m-4 p-4 flex items-center">
                        <button className='filter-btn px-4 py-2 bg-gray-100 m-4 rounded-lg'
                            onClick={() => {
                                let temp = listOfRestraunts.filter((res) => { return res.info.avgRating > 4 })
                                setlistOfRestraunts(temp)
                            }} >Top Rated Restaurants</button>

                    </div>
                    <div className="search m-4 p-4 flex items-center">
                        <label htmlFor="">UserName: </label>
                        <input type="text" className='border border-solid border-black'
                            value={loggedInUser}
                            onChange={(e) => { setUserName(e.target.value) }} />

                    </div>
                </div>
                <div className=" flex  flex-wrap justify-around">
                    {filteredRestraunt.map((restaurant) => {
                        return <Link key={restaurant.info.id} to={'restaurants/' + restaurant.info.id} >
                            {restaurant.info?.promoted ? <RestraurentCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                        </Link>
                    })
                    }
                </div>

            </div>
        )
}

export default Body