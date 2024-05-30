import React, {useState} from "react";
import './button.css';


function Button({changeProduct, id, bought, addToCart}){
    return(
        <button className="btn-card"  onClick={() => {changeProduct(id); addToCart(id)}} disabled={bought}>{bought ? 'Добавлено в корзину': 'Добавить в корзину'}</button>
    )
}

export default Button;
