import React from "react";
import './card.css';
import Button from './button/Button';


function Card({ product, changeProduct, addToCart }) {
    const {image, name, id, price, bought} = product;
    return(
        <div className="card" key={id}>
            <div className="card-img">
                <img src={image} alt={name} width='200px' height='230px'/>
            </div>
            <h3>{name}</h3>
            <p>{price}</p>
            <Button bought={bought} id={id} changeProduct={changeProduct} addToCart={addToCart}/>
        </div>
    )
}

export default Card;