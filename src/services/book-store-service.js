// import ;

export default class BookStoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-ready Microservices',
                author: 'Suzan J. Fowler',
                price: 11.99,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'

            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 18.63,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
            },
            {
                id: 3,
                title: 'Grokking algorithms',
                author: 'Adilya Y. Bhargava',
                price: 34.32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51cV560hqBL._SX396_BO1,204,203,200_.jpg'
            }
        ];
    }
}
