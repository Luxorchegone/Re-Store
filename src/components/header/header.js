import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = ({numItems, total}) => { //Шапка приложения
    return (
        <header className="page-header">
            <Link className="page-header__logo text-dark" to="/">
                Re-Store
            </Link>
            <Link className="shopping-cart text-dark" to="/cart">
                <i className="shopping-cart__icon fa fa-shopping-cart"/>
                {numItems} items (${total})
            </Link>

        </header>
      
    );
}
export default Header;