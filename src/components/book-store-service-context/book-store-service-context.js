import React from 'react';

const { //Переименовываем провайдер и консъюмер для дальнейшего удобства
    Provider: BookStoreServiceProvider,
    Consumer: BookStoreServiceConsumer
} = React.createContext();

export {
    BookStoreServiceProvider,
    BookStoreServiceConsumer
}