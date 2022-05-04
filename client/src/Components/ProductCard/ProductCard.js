import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartProductQnt } from "../../store/action/cart";
import ProductCardCss from './css/ProductCard.module.css';
const ProductCard = ({product, isMobile}) => {
    const {name, imageURL, description, price} = product;
    const [showMoreDesc, setShowMoreDesc] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const buyNow = (product) => {
        let isCartAlreadyExisted = cart.cart.filter(p => p.id === product.id);
        if (isCartAlreadyExisted.length === 0) {
            dispatch(addToCart(product));
        } else {
            dispatch(updateCartProductQnt({id: product.id, type: 'INCREMENT'}));
        }
    }
    useEffect(() => {
        setShowMoreDesc(description.length < 120);
    }, [description.length]);
    return (
        <div className={ProductCardCss.product_card}>
            <header className={ProductCardCss.product_card_header}><h1>{name}</h1></header>
            <section className={ProductCardCss.product_card_body}>
                <img src={imageURL} alt={name} className={ProductCardCss.product_img} />
                <div className={ProductCardCss.content_group}>
                    <span className={ProductCardCss.product_description_span} style={showMoreDesc && !isMobile ? {height: 'auto'} : null}>
                        <p className={ProductCardCss.product_description}>{description.length > 120 && !showMoreDesc ? <>
                            {
                                description.substring(0, !isMobile ? 110 : 100)
                            }
                            {/* <p className={ProductCardCss.showMoreDesc} onClick={() => setShowMoreDesc(true)}> ...</p> */}
                        </> : <>
                            {description}
                            {/* <span className={ProductCardCss.showMoreDesc}>Show Less</span> */}
                        </>}
                        {/* {
                            description.length > 120 &&  <p className={ProductCardCss.showMoreDesc} onClick={() => setShowMoreDesc(!showMoreDesc)}> ...</p>
                        } */}
                        </p>
                    </span>
                    {
                        isMobile && (
                            <div className={ProductCardCss.buynow_btn_div}>
                                <button className={ProductCardCss.buynowbtn_mobile} onClick={() => buyNow(product)}>Buy Now @  Rs.{price}</button>
                            </div>
                        )
                    }
                </div>
            </section>
            {
                !isMobile && (
                    <footer className={ProductCardCss.product_card_footer}>
                        <p>MRP Rs.{price}</p>
                        <div className={ProductCardCss.buynow_btn_div}>
                            <button className={[ProductCardCss.buynowbtn, ProductCardCss.buynow_desktop].join(' ')} onClick={() => buyNow(product)}>Buy Now</button>
                            <button className={[ProductCardCss.buynowbtn, ProductCardCss.buynowbtn_mobile].join(' ')} onClick={() => buyNow(product)}>Buy Now @  Rs.{price}</button>
                        </div>
                    </footer>
                )
            }
            
        </div>
    )
}
export default ProductCard;