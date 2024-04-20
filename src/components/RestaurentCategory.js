import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import ItemList from "./ItemList"
import { useState } from "react"


const RestraurentCategory = (props) => {  
    const {setShowIndex,activeAccordian,index } = props;
    const onClickAccordianhandler = ()=>{
        if(activeAccordian == index ){
            setShowIndex(null)
        } else{
            setShowIndex(index)
        }
    }
    // console.log(props)
    return (
        <div>
            {/* header */}
            <div
                className="lg:w-6/12 sm:w-10/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 flex justify-between items-center font-bold  cursor-pointer"
                onClick={onClickAccordianhandler}
                >
                <span>{props.data.title} ({props.data.itemCards.length ? props.data.itemCards.length : 0})</span>
                <span>{props.showItem ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {/* acordian body */}
            {props.showItem && <ItemList items={props.data.itemCards} />}
        </div>
    )
}
export default RestraurentCategory