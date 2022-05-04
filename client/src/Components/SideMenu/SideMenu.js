import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SideMenuCSS from './css/SideMenu.module.css';
import { categoryAction } from "../../store/slice/category";
const SideMenu = ({category, isMobile, selectedCategory}) => {
    const [categoryVal, setCategoryVal] = useState('-1')
    const dispatch = useDispatch();
    const categoryOnChange = (val) => {
        setCategoryVal(categoryVal === val ? '-1' : val);
    }
    useEffect(() => {
        let categoryIndex = category.findIndex(c => c.id === categoryVal);
        dispatch(categoryAction.setCategory(categoryVal === '-1' ? null : category[categoryIndex]));
    }, [categoryVal, category, dispatch]);
    return(
        <>
            {
                !isMobile ? 
                    <aside className={SideMenuCSS.side_nav}>
                        <nav>
                            <ul>
                                {
                                    category.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <button role="link" style={selectedCategory !== null && category.id === selectedCategory.id ? {color: '#bf2957'} : null} onClick={() => categoryOnChange(category.id)}>{category.name}</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </aside> : 
                    <>
                        <select className={SideMenuCSS.category_dropdown} onChange={(e) => categoryOnChange(e.target.value)} value={categoryVal}>
                            <option value='-1'>Please select Category</option>
                            {
                                 category.map((category, index) => {
                                     return <option key={index} value={category.id}>{category.name}</option>
                                 })
                            }
                        </select>
                    </>
            }
        </>
    )
}
export default SideMenu;