import React, {useState} from "react";
import Card from './card/Card';
import './content.css';


function Content({ products, changeProduct, addToCart}){
    const product = products.map((item) => {
        return <Card product={item} key={item.id} changeProduct={changeProduct} addToCart={addToCart}/>;
    })
    return(
        <section className="content">
            {product}
        </section>
    )
}


export default Content;