import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/Redux store/cartSlice"


const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1>Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg "
                onClick={handleClearCart}
            >Clear Cart</button>
            <div className="text-2xl">
                {cartItem.length ===0 && <h1> Cart is empty. Add items to the cart</h1>}
                <ItemList items={cartItem} />
            </div>
        </div>
    )
}
export default Cart