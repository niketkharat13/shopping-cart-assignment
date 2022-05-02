import React from "react";
import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { Icon } from '@iconify/react';
import CartCss from './css/Cart.module.css';
const  CartLayout = ({cart, toggleCart}) => {
    let card_body_cls = [CartCss.cartdiv];
    if (cart.cart.length === 0) {
        card_body_cls.push(CartCss.no_item_cart_body);
    }
    return (
        <section className={card_body_cls.join(' ')}>
            <header>
                <h2>My cart <span>{cart.cart.length > 0 && `(${cart.cart.length} item)`}</span></h2>
                <button className={CartCss.cartCloseBtn} onClick={toggleCart}><Icon icon="bytesize:close" /></button>
            </header>
            <main className={CartCss.cartbody}>
                {
                    cart.cart.length > 0 ? <>
                        {
                            cart.cart.map((cartItem, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <CartItem 
                                            product={cartItem}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                        <section className={CartCss.cheapestpricesection}>
                            <img src='/static/images/lowest-price.png' alt="lowest price"/>
                            <p>You won't find it cheaper anywhere</p>
                        </section>
                    </> : 
                    <>
                        <div className={CartCss.emptycartbody}>
                            <h2>No items in your cart</h2>
                            <p>Your favourite items are just a click away</p>
                        </div>
                    </>
                }
                
                
            </main>
            <footer className={CartCss.cartfooter}>
                {
                    cart.cart.length === 0 ? 
                    <button className={[CartCss.proceedbtn,CartCss.center_text].join(' ')} onClick={toggleCart}>
                        <span>
                            Start Shopping
                        </span>
                    </button> : 
                    <>
                        <p>promo code can be applied on payment page</p>
                        <button className={CartCss.proceedbtn} onClick={toggleCart}>
                            <span>Proceed to checkout</span> 
                            <span>Rs. {cart.totalPrice}
                                <Icon icon="bxs:right-arrow" />
                            </span>
                        </button>
                    </>
                }
                
            </footer>
        </section>
    )
}
const BackDrop = ({toggleCart}) => {
    return (
        <div className={CartCss.dropdown_backdrop} onClick={toggleCart}></div>
    )
}
const Cart = ({toggleCart, isCartFullScreen}) => {
    const cart = useSelector(state => state.cart);
    return (
        <>
            {ReactDOM.createPortal(<CartLayout cart={cart} toggleCart={toggleCart} />  , document.getElementById('cartRoot'), 'cart')}
            {!isCartFullScreen && ReactDOM.createPortal(<BackDrop toggleCart={toggleCart}/>, document.getElementById('backdropdiv'), 'backdrop')}
        </>
    )
}
export default Cart;