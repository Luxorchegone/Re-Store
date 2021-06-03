import React, {Component} from 'react';
import BookListItem from '../book-list-item/';
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import './book-list.css';
import {booksLoaded} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';

class BookList extends Component { //Список книг
    componentDidMount() {
        const {bookStoreService, booksLoaded} = this.props;
        bookStoreService.getBooks() //получаем данные с "сервера"
            .then((data) => booksLoaded(data)); //Диспатчим данные в стору
    }
    
    render () {
        const {books,loading} = this.props

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => { //Формируем спиок книг
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )    
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books, loading}) => { //Достаем книги из сторы
    return {
        books: books,
        loading: loading
    }
}

const mapDispatchToProps = { //Достаем экшен для дальнейшей передачи в редюсер
    booksLoaded
}

export default compose(  
    withBookStoreService(), //передаем сервисы в компоненты
    connect(mapStateToProps, mapDispatchToProps) //передаем аргументы в коннектор
)(BookList);