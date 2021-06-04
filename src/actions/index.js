const booksRequested = () => { //ставим флаг начала загрузки
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksLoaded = (newBooks) => { //Записываем новую книгу
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

const fetchBooks = (dispatch, bookStoreService) => () => { 
    dispatch(booksRequested()); //Ставим флаг зарузки
    bookStoreService.getBooks() //получаем данные с "сервера"
        .then((data) => dispatch(booksLoaded(data))) //Диспатчим данные в стору
        .catch((error) => dispatch(booksError(error))); //Или диспатчим ошибку в стору
}

export {
    fetchBooks
}