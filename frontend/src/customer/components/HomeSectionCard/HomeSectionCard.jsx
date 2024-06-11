import { Tooltip } from "@mui/material";
import React from "react";

const HomeSectionCard = ({ product }) => {

    return (
        <Tooltip title={product.brand} arrow>
        <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[13rem] mx-5 border'>
            <div className='h-[13rem] w-[13rem]'>
                <img className='object-contain object-top w-full h-full' src={product.imageUrl} alt=""></img>
            </div>

            <div className='p-4'>
                <h3 className="text-lg font-medium text-gray-900">
                    {product.brand}
                </h3>
                <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
        </Tooltip>

    )
}

export default HomeSectionCard