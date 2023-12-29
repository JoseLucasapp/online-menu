import React from "react";
import './index.css';

export default function ProductComponent(props: any){
    return(
        <div className="product-main">
            <img src={process.env.PUBLIC_URL + 'images/' + props.img} alt="" />
           <div className="text">
           <p>{props.name}</p>
            <p>{props.price}</p>
           </div>
        </div>
    )
}