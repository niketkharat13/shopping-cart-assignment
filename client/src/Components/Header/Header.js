import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderCSS from './css/Header.module.css';
const Header = (props) => {
    const cart = useSelector(state => state.cart);
    return (
        <header className="main-header">
            <section className="container">
                <section>
                    <img src="/static/images/logo.png" alt="logo" className={HeaderCSS.brandimg} />
                </section>
                <section className={HeaderCSS.headercontent}>
                    <nav className={HeaderCSS.nav_link}>
                        <ul className={HeaderCSS.links}>
                            <li>
                                <Link to={`home`}>Home</Link>
                            </li>
                            <li>
                                <Link to={`product-list-page`}>Products</Link>
                            </li>
                        </ul>
                        <div>
                            <ul className={HeaderCSS.sublink}>
                                <li>
                                    <Link to='/log-in'>SignIn</Link>
                                </li>
                                <li>
                                    <Link to='/sign-up'>Register</Link>
                                </li>
                            </ul>
                            <button className={HeaderCSS.cartbutton} onClick={() => props.toggleCart()} disabled={props.isCartDisable}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                                    <img src="/static/images/cart.svg" alt="cart" className={HeaderCSS.cartlogo} />
                                    <span style={{display: 'flex', alignItems: 'center', fontSize: '15px'}}>{cart.cart.length} item(s)</span>
                                </div>
                            </button>
                        </div>
                    </nav>
                </section>
            </section>
        </header>
    )
}
export default Header;