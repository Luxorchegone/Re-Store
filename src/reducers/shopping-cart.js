const updateCartItems = (cartItems, item, idx) => { //Формируем cartItems с новой позицией заказа
    if (item.count == 0) { //
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
    const {bookList: {books}, shoppingCart: {cartItems}} = state;
    const book = books.find(({id}) => id == bookId);
    const itemIndex = cartItems.findIndex(({id}) => id == bookId); //
    const item = cartItems[itemIndex]; //книга с которой производим действие
    
    const newItem = updateCartItem(book, item, quantity); //формируем новую позицию заказа
    const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
    let newTotalOrder = newCartItems.reduce((acc, item) => acc + item.total, 0); // считаем общую сумму заказа
    newTotalOrder = newTotalOrder.toFixed(2);
    const itemCount = newCartItems.reduce((acc, item) => acc + item.count, 0); //считаем общее количество книг в заказе

    return {
        itemCount: itemCount,
        orderTotal: newTotalOrder,
        cartItems: newCartItems
    }
}

const updateShoppingCart = (state, action) => {
    if (state == undefined) { //initialState
        return { //"Корзина" 
            itemCount: 0,
            cartItems: [],
            orderTotal: 0,
        }   
    }

    switch (action.type) { 
        case 'BOOK_ADDED_TO_CART': //Увеличиваем количество выбранной книги в заказе на 1
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART': //Уменьшаем количество выбранной книги в заказе на 1
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART': //Удаляем ввсю позицию с книгой из заказа
            const item = state.shoppingCart.cartItems.find(({id}) => id == action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state.shoppingCart;
    }
}
export default updateShoppingCart;