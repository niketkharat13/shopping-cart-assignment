import Counter from "../Counter/Counter";
import CartItemCss from './CartItem.module.css'; 
import { Icon } from '@iconify/react';
const CartItem = ({product}) => {
    const {name, imageURL, price, quantity, stock, id, totalPrice} = product;
    return(
        <div className={CartItemCss.cartitem}>
            <div className={CartItemCss.productimg}>
                <img src={imageURL} alt={name} />
            </div>
            <div className={CartItemCss.productdesc}>
                <h2>{name}</h2>
                <div className={CartItemCss.counterdiv}>
                    <div className={CartItemCss.countercontrol}>
                        <Counter 
                            currentValue={quantity}
                            maxValue={stock}
                            pId={id}
                        />
                        <span><Icon icon="akar-icons:cross" /> {price}</span>
                    </div>
                    <div>
                        Rs.{totalPrice}
                    </div>    
                </div>
                
            </div>
        </div>
    )
}
export default CartItem