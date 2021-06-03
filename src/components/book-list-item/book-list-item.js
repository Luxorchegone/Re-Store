import React from 'react';
import './book-list-item.css';

const BookListItem = ({book}) => {//Элемент списка книг
    const {title, author, price, coverImage} = book;
    return (
        <div className="book-list-item">
            <div className="book-list-item__image-wrapper">
                <img alt="book cover" src={coverImage} />
            </div>
            <div className="book-list-item__details">
                <span href="#" className="book-list-item__title">
                    {title}
                </span>
                <span className="book-list-item__author">
                    {author}
                </span>
                <span className="book-list-item__price">
                    ${price}
                </span>
                <button className="btn btn-info add-to-cart">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
export default BookListItem;