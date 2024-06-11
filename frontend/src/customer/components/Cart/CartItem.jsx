import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handleRemoveItemFromCart = () => {
        const data = { cartItemId: item?._id};
        dispatch(removeCartItem(data));
      };

    const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity+num}, cartItemId:item?._id}
        console.log("update data ",data)
        dispatch(updateCartItem(data))
      }
    return (
        <div className="p-5 shadow-lg border rounded-md">

            <div className="flex items-center">

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src={item?.product?.imageUrl} alt="" />
                </div>

                <div className="ml-5 space-y-1">
                    <p className="font-semibold">{item?.product?.title}</p>
                    <p className="opacity-70">Size: {item?.size}</p>
                    <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-5">
                        <p className="font-semibold">₹{((item?.product?.price || 0) - (item?.product?.discountedPrice || 0))}</p>
                        <p className="opacity-50 line-through">  ₹{item?.product?.price} </p>
                        <p className="text-green-600 font-semibold">{item?.product?.discountedPersent}% off</p>
                    </div>

                </div>

            </div>

            <div className="lg:flex items-center lg:space-x-10 pt-4">

                    <div className="flex items-center space-x-2">
                        <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}  >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
                            <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:"RGB(145 85 253)"}}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        
                    </div>

                    <div>
                        <Button onClick={handleRemoveItemFromCart}  sx={{color:"RGB(145 85 253)"}}>remove</Button>
                    </div>

                </div>




        </div>
    )
}

export default CartItem