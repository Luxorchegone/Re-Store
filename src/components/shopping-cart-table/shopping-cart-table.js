import React from 'react';
import './shopping-cart-table.css'

const ShoppingCartTable = () => { //Таблица с заказом
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
                    <tr>
                        <td>1</td>
                        <td>Site Reliability</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className="shopping-cart__button btn btn-outline-danger btn-sm">
                                <i className="fa fa-trash-o"/>
                            </button>
                            <button className="shopping-cart__button btn btn-outline-success btn-sm">
                                <i className="fa fa-plus-circle"/>
                            </button> 
                            <button className="shopping-cart__button btn btn-outline-warning btn-sm">
                                <i className="fa fa-minus-circle"/>
                            </button>     
                        </td> 
                    </tr>  
                </tbody>
            </table>
            <div className="shopping-cart__total-price">
                Total: $201
            </div>
        </div>
    )
}
export default ShoppingCartTable;