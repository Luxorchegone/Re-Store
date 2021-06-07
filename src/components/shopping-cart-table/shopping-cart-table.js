import React from 'react';
import {connect} from 'react-redux'; 
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart } from '../../actions/';
import './shopping-cart-table.css'

const ShoppingCartTable = ({items, orderTotal, onIncrease, onDecrease, onDelete}) => { //Таблица с заказом
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button className="shopping-cart__button btn btn-outline-danger btn-sm float-right"
                            onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="shopping-cart__button btn btn-outline-success btn-sm float-right"
                            onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button> 
                    <button className="shopping-cart__button btn btn-outline-warning btn-sm float-right"
                            onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>     
                </td> 
            </tr> 
        );
    }

    return (
        <div className="shopping-cart">
            <h2>Your order</h2>
            <table className="shopping-cart__table table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) } 
                </tbody>
            </table>
            <div className="shopping-cart__total-price">
                ${orderTotal}
            </div>
        </div>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        orderTotal: orderTotal,
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);