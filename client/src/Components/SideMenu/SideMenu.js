import { useDispatch } from "react-redux";
import SideMenuCSS from './css/SideMenu.module.css';
import { categoryAction } from "../../store/slice/category";
const SideMenu = ({category, isMobile}) => {
    const dispatch = useDispatch();
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
                                            // style={{height: '35px', listStyle: 'none', borderBottom: '1px solid black', paddingLeft: '10px', marginTop: '8px'}}
                                            <li key={index}>
                                                <button onClick={() => dispatch(categoryAction.setCategory(category))}>{category.name}</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </aside> : 
                    <>
                        <select className={SideMenuCSS.category_dropdown}>
                            {
                                 category.map((category, index) => {
                                     return <option onClick={() => dispatch(categoryAction.setCategory(category))} key={index}>{category.name}</option>
                                 })
                            }
                        </select>
                    </>
            }
        </>
    )
}
export default SideMenu;