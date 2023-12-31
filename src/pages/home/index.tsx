import React from "react";
import './index.css'
import ProductComponent from "../../components/product";
import ProductChart from "../../components/product-chart";

export default function Home(){
    const products = [

        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
        {
            name: 'Café',
            price: 20.00,
            img: 'soft-drink.png'
        },
    ]

    const categories = ['Drinks', 'Seafood', 'Vegan']
    const chart = [{name: 'Cocktail', price: 20.00, amount: 1}, {name: 'Cocktail', price: 20.00, amount: 1},{name: 'Cocktail', price: 20.00, amount: 1}]

    let total = chart.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);

    const leftMenu = document.getElementById('left-menu')
    const rightMenu = document.getElementById('right-menu')
    const coverPage = document.getElementById('cover-page')

    const handleActivateLeftMenu = ()=>{
        if(leftMenu && coverPage){
            leftMenu.style.display = 'flex'
            coverPage.style.display = 'flex'
        }
        
    }
    const handleDeactivateLeftMenu = ()=>{
        if(leftMenu && coverPage){
            leftMenu.style.display = 'none'
            coverPage.style.display = 'none'
        }
    }

    const handleSelectCategory = (category: string)=>{
        handleDeactivateLeftMenu()
    }

    const handleDeactivateRightMenu = ()=>{
        if(rightMenu && coverPage){
            rightMenu.style.display = 'none'
            coverPage.style.display = 'none'
        }
    }

    const handleActivateRightMenu = ()=>{
        if(rightMenu && coverPage){
            rightMenu.style.display = 'flex'
            coverPage.style.display = 'flex'
        }
    }

    const handleDeactivateAllMenu = ()=>{
        if(rightMenu && coverPage ){
            handleDeactivateRightMenu()
        }

        if(leftMenu && coverPage){
            handleDeactivateLeftMenu()
        }
    }

    return(
        <div className="main-home">
            <div className="top-bar">
                <div className="menu-name">
                    <img src={process.env.PUBLIC_URL + 'images/menu64.png'} alt="" onClick={()=>handleActivateLeftMenu()} />
                    <p>Restaurant Name</p>
                </div>
                
                <img src={process.env.PUBLIC_URL + 'images/shopping-cart64.png'} alt="" onClick={()=>handleActivateRightMenu()} />
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

            <div className="left-menu" id="left-menu">
                <img src={process.env.PUBLIC_URL + 'images/close.png'} alt="" className="close-left-menu" onClick={()=> handleDeactivateLeftMenu()}/>
                <img src={process.env.PUBLIC_URL + 'images/logo.webp'} alt="" className="logo" />
                <div className="menu-category-options">
                    {
                        categories.map((e)=>(
                            <p onClick={()=> handleSelectCategory(e)}>{e}</p>
                        ))
                    }
                </div>
            </div>
            <div className="cover-page" id="cover-page" onClick={()=>handleDeactivateAllMenu()}></div>

            <div className="right-menu" id="right-menu" onClick={()=>handleDeactivateRightMenu()}>
                <img src={process.env.PUBLIC_URL + 'images/close.png'} alt="" onClick={()=> handleDeactivateRightMenu()}/>
                <p className="total-value">Total: R$ {(total).toFixed(2)}</p>
                <div className="billet">
                    {
                        chart.map((e)=>(
                            <ProductChart name={e.name} price={e.price} amount={e.amount} />
                        ))
                    }
                </div>
                <div className="cart-buttons">
                    <button>Confirmar</button>
                    <img src={process.env.PUBLIC_URL + 'images/delete.png'} alt="" />
                </div>
            </div>
        </div>
    )
}