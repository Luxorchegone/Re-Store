import React from 'react';
import {BookStoreServiceConsumer} from '../book-store-service-context/';

const withBookStoreService = () => (Wrapped) => { //Оболочка джля передачи сервисов в компонент
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {   
                    (bookStoreService) => {
                        return (
                            <Wrapped {...props}
                             bookStoreService={bookStoreService} />
                        );
                    }
                }
            </BookStoreServiceConsumer>
        );
    }
}
export default withBookStoreService;