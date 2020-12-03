
export default class BookstoreService {

    data = [
        {
            id: '1',
            title: 'Learning React: Functional Web Development with React and Redux',
            author: 'Alex Banks and Eve Porcello',
            price: 50,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/7169mYAhsmL.jpg'
        },

        {
            id: '2',
            title: 'Learning React: A Hands-On Guide to Building Web Applications Using React and Redux',
            author: 'Kirupa Chinnathambi',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51bBG0BOZwL.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 900)
        })
          /*.then( result => result.json())
          .then(res => console.log(res))*/
    };
};
