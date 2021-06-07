import React, {Component} from 'react';
import BookListItem from '../book-list-item/';
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

class BookListContainer extends Component { //Компонент контейнер с логикой
    componentDidMount() {
      this.props.fetchBooks();
    }
    
    render () {
        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Spinner />
        }
 
        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const BookList = ({books, onAddedToCart}) => { //Наш компонент-рендер
    return (
        <ul className="book-list">
            {
                books.map((book) => { //Формируем спиок книг
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )    
                })
            }
        </ul>
    );
}

const mapStateToProps = ({books, loading, error}) => { //Достаем данные из сторы
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => { //Достаем экшены для дальнейшей передачи в редюсер
    const {bookStoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(dispatch, bookStoreService),
        onAddedToCart: (bookId) => dispatch(bookAddedToCart(bookId))
    }  
}

export default compose(  
    withBookStoreService(), //передаем сервисы в компоненты
    connect(mapStateToProps, mapDispatchToProps) //передаем аргументы в коннектор
)(BookListContainer);