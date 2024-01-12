import React, { useEffect, useState } from "react";
import './index.css'
import ProductComponent from "../../components/product";
import ProductChart from "../../components/product-chart";
import ProductById from "../../components/product-by-id";
import { API_DATA } from "../../api";

export interface ProductInterface{
    name: string;
    price: number;
    img: string;
}

export default function Home(){ 

    const data = API_DATA

    const [products, setProducts] = useState(Array<ProductInterface>)
    const [selectedCategory, setSelectedCategory] = useState(data[0].category)

    const handleSelectedCategory = ()=>{
        // eslint-disable-next-line array-callback-return
        data.find(e => {
            if(e.category === selectedCategory){
                setProducts(e.products)
            }
        })

    }
    
 useEffect(()=>{
        handleSelectedCategory()
    },[handleSelectedCategory])
    
    const chart = [{name: 'Cocktail', price: 20.00, amount: 1}, {name: 'Cocktail', price: 20.00, amount: 1},{name: 'Cocktail', price: 20.00, amount: 1}]

    let total = chart.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);

    let leftMenu = document.getElementById('left-menu')
    let rightMenu = document.getElementById('right-menu')
    let centerMenu = document.getElementById('center-menu')
    let coverPage = document.getElementById('cover-page')

    const handleActivateLeftMenu = ()=>{
        leftMenu = document.getElementById('left-menu')
        coverPage = document.getElementById('cover-page')
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
        setSelectedCategory(category)
        handleSelectedCategory()
        handleDeactivateLeftMenu()
    }

    const handleDeactivateRightMenu = ()=>{
        if(rightMenu && coverPage){
            rightMenu.style.display = 'none'
            coverPage.style.display = 'none'
        }
    }

    const handleActivateRightMenu = ()=>{
        rightMenu = document.getElementById('right-menu')
        coverPage = document.getElementById('cover-page')
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

    const handleActivateCenterMenu = ()=>{
        console.log('dd')
        centerMenu = document.getElementById('center-menu')
        coverPage = document.getElementById('cover-page')
        if(centerMenu && coverPage){
            centerMenu.style.display = 'flex'
            coverPage.style.display = 'flex'
        }

    }

    const handleDeactivateCenterMenu = ()=>{
        if(centerMenu && coverPage){
            centerMenu.style.display = 'none'
            coverPage.style.display = 'none'
        }
    }

    return(
        <div className="main-home" id="main-home">
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
                            products.map((i)=>(
                                <ProductComponent name={i.name} price={i.price} img={i.img} handleActivateCenterMenu={handleActivateCenterMenu}/>
                            ))
                    }
                </div>
            </div>

            <div className="left-menu" id="left-menu">
                <img src={process.env.PUBLIC_URL + 'images/close.png'} alt="" className="close-left-menu" onClick={()=> handleDeactivateLeftMenu()}/>
                <img src={process.env.PUBLIC_URL + 'images/logo.webp'} alt="" className="logo" />
                <div className="menu-category-options">
                    {
                        data.map((e)=>(
                            <p onClick={()=> handleSelectCategory(e.category)}>{e.category}</p>
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

            <div className="center-menu" id="center-menu">
                <ProductById handleDeactivateCenterMenu={handleDeactivateCenterMenu}/>
            </div>
        </div>
    )
}