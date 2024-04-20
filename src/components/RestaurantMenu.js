import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import ShimmerMenu from './ShimmerMenu';
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook';
import RestraurentCategory from './RestaurentCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenuHook(resId);

  if (resInfo === null) return <ShimmerMenu />;
  console.log(resInfo);
  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;


  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  return (
    <div className='text-center'>
      <div className="font-bold my-6 text-2xl">{name}</div>
      <p className="font-bold text-lg">
        {cuisines.join(',') - costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        // console.log(category)
        return (

          <RestraurentCategory
            key={category?.card?.card.id}
            data={category.card.card}
            showItem={index === showIndex ? true : false}
            index={index} 
            activeAccordian = {showIndex}
            setShowIndex={(index) => { setShowIndex(index) }}
          />
        )
      })}
    </div>
  );
};

export default RestaurantMenu;
