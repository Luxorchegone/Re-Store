const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 115,
}

const updateCartItems = (cartItems, item, idx) => { //Формируем cartItems с новой позицией заказа
    if (item.count == 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx == -1) { //Если нет позиции в заказе, то добавляем ее
        return [
            ...cartItems,
            item
        ];
    } else { //Если позиция уже есть но изменилось только количесвто, то обновляем ее
        return [ 
            ...cartItems.slice(0, idx),
            item, 
            ...cartItems.slice(idx + 1)
        ]
    }
}

const updateCartItem = (book, item = {}, quantity) => { //Формируем позицию заказа
    const {
        id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0 } = item;
    
    return {
        id,
        title,
        count: count + quantity,
        total: +(total + quantity*book.price).toFixed(2) //Привет IEE754
    }
}

const updateOrder = (state, bookId, quantity) => {
    const {books, cartItems} = state;
    const book = books.find(({id}) => id == bookId);
    const itemIndex = cartItems.findIndex(({id}) => id == bookId);
    const item = cartItems[itemIndex];
    
    const newItem = updateCartItem(book, item, quantity);
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const reducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) { 
        case 'FETCH_BOOKS_REQUEST': //Отправляем запрос на сервер 
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS': //Учпешно получаем ответ 
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE': //Получаем ошибку 
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOK_ADDED_TO_CART': //Увеличиваем количество выбранной книги в заказе на 1
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART': //Уменьшаем количество выбранной книги в заказе на 1
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART': //Удаляем ввсю позицию с книгой из заказа
            const item = state.cartItems.find(({id}) => id == action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state;
    }
}
export default reducer;