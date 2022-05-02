import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SliderCarousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import { getBanner } from "../../store/action/banner";
import { getCategories } from "../../store/action/category";
import { categoryAction } from "../../store/slice/category";
import HomeCSS from './css/Home.module.css';
// import 
const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bannerState = useSelector(state => state.banner);
    const categoryState = useSelector(state => state.category);
    useEffect(() => {
        function loadData() {
            dispatch(getBanner())
            dispatch(getCategories())
        }
        loadData();
    }, [dispatch]);
    const navigateToPLP = (category) => {
        dispatch(categoryAction.setCategory(category));
        navigate('/product-list-page');
    }
    return (
        <>
            <section className={[HomeCSS.container, 'container'].join(' ')}>
                <div className={''}>
                    <SliderCarousel
                        banners={bannerState.banners} 
                    />
                </div>
                <div className={HomeCSS.categorydiv}>
                    {
                        categoryState.category.map((category, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Category
                                        navigateToPLP={navigateToPLP}
                                        category={category}
                                        index={index+1}
                                    />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Home;