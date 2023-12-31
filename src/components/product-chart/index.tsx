import React from "react";
import './index.css'

export interface ProductChartInterface{
    amount: number;
    price: number;
    name: string;
}

export default function ProductChart({amount, price, name}: ProductChartInterface){
    return(
        <div className="main-product-chart">
            <p>{amount}X {name}</p>
            <p>R$ {(Math.floor(price)).toFixed(2)}</p>
        </div>
    )
}