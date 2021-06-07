const updateBookList = (state, action) => {
    if (state == undefined) { //initialState
        return { //Данные полученные о сервера 
            books: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST': //Отправляем запрос на сервер 
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS': //Учпешно получаем ответ 
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE': //Получаем ошибку 
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default :
            return state.bookList;
    }
}
export default updateBookList;