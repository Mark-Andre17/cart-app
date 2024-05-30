import React from "react";
import cartSvg from '../../../assets/logo/shopping-cart-solid.svg';
import './checkout.css';

function Checkout({cart}){
    return(
        <div className="header-check">
            <div id="openModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Корзина</h3>
                            <a href="#close" title="Close" className="close">×</a>
                        </div>
                        <div className="modal-body">    
                            <ol>
                                {cart.map((item) => (   
                                    <li key={item.id}>
                                        <div className="modal-img">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-cart">
                <a href='#openModal'><img src={cartSvg} alt="корзина" /></a>
                <span>{cart.length}</span>
            </div>
            <button>выход</button>
        </div>
    )
}

export default Checkout;