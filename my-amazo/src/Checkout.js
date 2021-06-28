import React from 'react';
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left"> 
                <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />

                <div>
                    <h2 className="checkout__title">
                        Seu carrinho de compras
                    </h2>
                    {/* item do carrinho */}
                </div>
            </div>

            <div className="checkout__right">
                <div>
                    <h2 className="checkout__right">
                        O total da sua compra fica aqui 
                    </h2>
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout
