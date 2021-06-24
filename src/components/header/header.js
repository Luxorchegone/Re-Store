import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.css';

const Header = ({orderTotal, itemCount}) => { //Шапка приложения
    return (
        <header className="page-header">
            <Link className="page-header__logo text-dark" to="/">
                Re-Store
            </Link>
            <Link className="shopping-cart text-dark" to="/cart">
                <i className="shopping-cart__icon fa fa-shopping-cart"/>
                {itemCount} items (${orderTotal})
            </Link>

        </header>
      
    );
}
const mapStateToProps = ({shoppingCart: {orderTotal, itemCount}}) => {
    return {
        orderTotal,
        itemCount
    }
}
export default connect(mapStateToProps)(Header);