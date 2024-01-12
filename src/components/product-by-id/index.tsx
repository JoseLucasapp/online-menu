import React from "react";
import './index.css'
import Swal from "sweetalert2";

export interface ProductByIdInterface{
    //name: string;
    //img: string;
    //price: number;
    //description: string;
    handleDeactivateCenterMenu: ()=> void
}

const productAddedToCart = (productName: string, close: ()=>void)=>{
    const amount = (document.getElementById('productAmount') as HTMLInputElement).value
    Swal.fire({
        title: "Product added to cart",
        text: `${amount} ${productName}`,
        icon: "success"
      });
    (document.getElementById('productAmount') as HTMLInputElement).value = '1'
    close()
}

export default function ProductById({handleDeactivateCenterMenu}: ProductByIdInterface){
    return(
        <div className="product-by-id">
            <img src={process.env.PUBLIC_URL + 'images/close.png'} alt="" onClick={()=> handleDeactivateCenterMenu()}/>
            <p>Soft Drink</p>
            <img src={process.env.PUBLIC_URL + `images/soft-drink.png`} alt="" />
            <p>R$ 20.00</p>
            <p>klndklnakldnkldnklsnkcndsm,cnsdcnksdncksdnckjcdsc</p>
            <div className="buttons-product">
                <input type="number" name="productAmount" id="productAmount" min={1} defaultValue={1} />
                <button onClick={()=> productAddedToCart('Soft drink', handleDeactivateCenterMenu)}>Confirmar</button>
            </div>
        </div>
    )
}