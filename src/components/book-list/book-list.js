import React, {Component} from 'react';
import BookListItem from '../book-list-item/';
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import {fetchBooks} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

class BookList extends Component { //Список книг
    componentDidMount() {
      this.props.fetchBooks();
    }
    
    render () {
        const {books, loading, error} = this.props

        if (loading) {
            return <Spinner />
        }
 
        if (error) {
            return <ErrorIndicator />
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => { //Формируем спиок книг
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )    
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books, loading, error}) => { //Достаем данные из сторы
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => { //Достаем экшены для дальнейшей передачи в редюсер
    const {bookStoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(dispatch, bookStoreService)  
    }
}

export default compose(  
    withBookStoreService(), //передаем сервисы в компоненты
    connect(mapStateToProps, mapDispatchToProps) //передаем аргументы в коннектор
)(BookList);