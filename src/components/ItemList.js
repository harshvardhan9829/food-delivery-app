import { CDN_URL } from "../utils/constants";
import Veg from '../utils/images/veg-icon.png';
import NonVeg from '../utils/images/non-veg-icon.png'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Redux store/cartSlice";

const ItemList = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem('dummyPizza'))
    }
    return (

        <div className="lg:w-6/12 sm:w-10/12 mx-auto my-4 ">
            {
                props.items.map((item => {
                    const { name, price, description, imageId, isVeg,defaultPrice } = item.card.info;
                    return (
                        <div key={item.card.info.id}
                            className=" mx-auto flex justify-between border-b p-4 border-grey mb-5">
                            <div className="w-9/12" >
                                <div className="flex flex-col text-left text-sm">
                                    <span className="veg-nonveg icon "><img src={isVeg ? Veg : NonVeg} className='w-3 mb-2 ' alt="" /></span>
                                    <div className="flex items-center">
                                        <span> {name}</span>
                                    </div>
                                    <span> Rs {price? (price/100) : defaultPrice/100}</span>

                                </div>
                                <p className=" text-xs  text-gray-500 text-left">{description}</p>

                            </div>
                            <div className="w-3/12 p-4">
                                <div className="absolute">
                                    <button
                                        className="p-2 ml-[10px] mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
                                        onClick={handleAddItem}
                                    >
                                        Add +
                                    </button>
                                </div>
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    alt={item.card.info.name}
                                    className="w-20 rounded-md"
                                />
                            </div>


                        </div>
                    )
                }))
            }
        </div>
    )
}
export default ItemList;