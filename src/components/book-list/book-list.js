import React, {Component} from 'react';
import BookListItem from '../book-list-item/';
import {connect} from 'react-redux';
import {withBookStoreService} from '../hoc';
import './book-list.css';
import {booksLoaded} from '../../actions';
import compose from '../../utils';

class BookList extends Component {
   
    componentDidMount() {
        const {bookStoreService} = this.props;
        const data = bookStoreService.getBooks();
        this.props.booksLoaded(data);
    }
    
    
    render () {
        const {books} = this.props
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )    
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {
        books: books
    }
}

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);