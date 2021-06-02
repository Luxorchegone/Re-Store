export default class BookStoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-ready Microservices',
                author: 'Suzan J. Fowler'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard'
            },
            {
                id: 3,
                title: 'Grokking algorithms',
                author: 'Adilya Y. Bhargava'
            }
        ];
    }
}
