
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
// console.log(resData);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
            <img
                className="res-logo w-[250px] h-[150px] rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <hr />
            <em>{cuisines.join(', ')}</em>
            <h4 className="avg-rating flex items-center">
                <span className="icons">
                    <AiOutlineStar />
                </span>
                <span>{avgRating} stars</span>
            </h4>
            <h4 className="item-price">{costForTwo} FOR TWO
            </h4>
            <h4 className="time"> {deliveryTime} minutes </h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label >Promoted</label>
                    <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
