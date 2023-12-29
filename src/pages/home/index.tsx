import React from "react";
import './index.css'
import ProductComponent from "../../components/product";

export default function Home(){
    const products = [
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'shopping-cart64.png'
        },
    ]
    return(
        <div className="main-home">
            <div className="top-bar">
                <div className="menu-name">
                    <img src={process.env.PUBLIC_URL + 'images/menu64.png'} alt="" />
                    <p>Restaurant Name</p>
                </div>
                
                <img src={process.env.PUBLIC_URL + 'images/shopping-cart64.png'} alt="" />
            </div>
            <div className="body-home">
                <div className="selected-category">
                    <p>Selected Category</p>
                </div>
                <div className="items">
                    {
                        products.map((e)=>(
                            <ProductComponent name={e.name} price={e.price} img={e.img} />
                        ))
                    }
                </div>
            </div>
            <div className="page-options">
                    <img src={process.env.PUBLIC_URL + 'images/left-arrow.png'} alt="" />
                    <img src={process.env.PUBLIC_URL + 'images/right-arrow.png'} alt="" />
                </div>
        </div>
    )
}