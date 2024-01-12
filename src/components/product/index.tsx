import React from "react";
import './index.css';

export interface ProductInterface{
    name: string;
    price: number;
    img: string;
    handleActivateCenterMenu:()=> void;
}

export default function ProductComponent({img, price, name, handleActivateCenterMenu}: ProductInterface){

    return(
        <div className="product-main" onClick={()=> handleActivateCenterMenu()}>
            <img src={process.env.PUBLIC_URL + 'images/' + img} alt="" />
           <div className="text">
           <p>{name}</p>
            <p>R$ {(Math.floor(price)).toFixed(2)}</p>
           </div>
        </div>
    )
}