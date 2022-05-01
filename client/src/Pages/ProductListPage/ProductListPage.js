import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../Components/SideMenu/SideMenu";
import ProductList from "../../Components/ProductList/ProductList";
import { useEffect } from "react";
import { getProducts } from "../../store/action/product";
import { getCategories } from "../../store/action/category";
import PLPCSS from './css/PLP.module.css';
const ProductListPage = ({isCartOpen}) => {
    const category = useSelector(state => state.category);
    const products = useSelector(state => state.product);
    const [isMobile, setIsMobile] = useState(false);
    const [isCartFullScreen, setIsCartFullScreen] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        if (category.category.length === 0) {
            dispatch(getCategories())
        }
        setIsMobile(window.screen.width < 500);
        setIsCartFullScreen(window.screen.width < 769)
    }, [dispatch, category.category.length])
    return (
        !isCartOpen || !isCartFullScreen ? 
            <main style={{display: 'flex'}}>
                <section className={[PLPCSS.plp_container, "container"].join(' ')}>
                    <SideMenu category={category.category} isMobile={isMobile} />
                    <ProductList products={products} isMobile={isMobile}/>
                </section>
            </main> 
        : null        
    )
}
export default ProductListPage;