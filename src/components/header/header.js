import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = ({numItems, total}) => {
    return (
        <header className="page-header">
            <a className="page-header__logo text-dark" href="#">
                Re-Store
            </a>
            <a className="shopping-cart text-dark" href="#">
                <i className="shopping-cart__icon fa fa-shopping-cart"/>
                {numItems} items (${total})
            </a>

        </header>
      
    );
}
export default Header;