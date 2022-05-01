import { Fragment } from "react";
import ProductCard from "../ProductCard/ProductCard";
const ProductList = ({products, isMobile}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {/* <Cart /> */}
            {
                products.product.map((product, index) => {
                    return (
                        <Fragment key={index}>
                            <ProductCard 
                                product={product} 
                                isMobile={isMobile}
                            />
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
export default ProductList;