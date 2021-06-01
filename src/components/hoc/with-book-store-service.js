import React from 'react';
import {
    BookStoreServiceProvider,
    BookStoreServiceConsumer
} from '../book-store-service-context/';

const withBookStoreService = (Wrapped) => {
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