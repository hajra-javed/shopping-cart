import style from './Nav.module.css'
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

function Nav(props) {

    const tab = props.className === 'home' ? style.home : style.shop;
    const cartVisibility = props.cartVisibility === '' ? '' : style.invisible;

    const ctx = useContext(CartContext);

    return (
        <nav className={tab}>
            <ul>
                <li className={`${style.navItem}`}><Link to='shopping-cart' >HOME</Link></li>
                <li className={`${style.navItem}`}><Link to='shopping-cart/shop' >SHOP</Link></li>
                <li className={`${style.navItem} ${style.cart} ${cartVisibility}`} >
                    <Link to='shopping-cart/shop/cart'>
                        <span className="material-symbols-outlined">shopping_basket</span>
                        {<div className={style.badge}>{ctx.totalCount}</div>}
                    </Link>
                </li>
            </ul>
        </nav >
    )
};

export default Nav;