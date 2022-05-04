import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../Components/SideMenu/SideMenu";
import ProductList from "../../Components/ProductList/ProductList";
import { useEffect } from "react";
import { getProducts } from "../../store/action/product";
import { getCategories } from "../../store/action/category";
import PLPCSS from './css/PLP.module.css';
// import { categoryAction } from "../../store/slice/category";
const ProductListPage = ({isCartOpen}) => {
    const category = useSelector(state => state.category);
    const products = useSelector(state => state.product);
    const [isMobile, setIsMobile] = useState(false);
    const [isCartFullScreen, setIsCartFullScreen] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        async function loadCategory() {
            try {
                if (category.category.length === 0) {
                    await dispatch(getCategories());
                }
                /* if (category.category.length > 0 && category.selectedCategory === null) {
                    dispatch(categoryAction.setCategory(category.category[0]))
                } */
            } catch (error) {
                console.log(error);
            }
        }
        loadCategory();
        setIsMobile(window.screen.width < 500);
        setIsCartFullScreen(window.screen.width < 769)
    }, [dispatch, category.category, category.selectedCategory])

    useEffect(() => {
        dispatch(getProducts(category.selectedCategory != null ? category.selectedCategory.id : false ));
    }, [dispatch,category.selectedCategory])
    
    return (
        !isCartOpen || !isCartFullScreen ? 
            <main style={{display: 'flex'}}>
                <section className={[PLPCSS.plp_container, "container"].join(' ')}>
                    <SideMenu category={category.category} selectedCategory={category.selectedCategory} isMobile={isMobile} />
                    <ProductList products={products} isMobile={isMobile}/>
                </section>
            </main> 
        : null        
    )
}
export default ProductListPage;