const booksRequested = () => { //ставим флаг начала загрузки
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksLoaded = (newBooks) => { //Записываем полученные книги
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = (error) => { //Пишем ошибку
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (bookId) => { //Увеличиваем количество выбранной книги в заказе на 1
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemovedFromCart = (bookId) => { //Уменьшаем количество выбранной книги в заказе на 1
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

const allBooksRemovedFromCart = (bookId) => { //Удаляем всю позицию данной книгу из заказа
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

const fetchBooks = (dispatch, bookStoreService) => () => { 
    dispatch(booksRequested()); //Ставим флаг зарузки
    bookStoreService.getBooks() //получаем данные с "сервера"
        .then((data) => dispatch(booksLoaded(data))) //Диспатчим данные в стору
        .catch((error) => dispatch(booksError(error))); //Или диспатчим ошибку в стору
}

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart 
}