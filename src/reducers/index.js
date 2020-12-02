
const initialState = {
    books: [
      // Временное значение для проверки
        {
            id: '1',
            title: 'Book-1',
            author: 'Author-1'
        },

        {
            id: '3',
            title: 'Book-3',
            author: 'Author-3'
        }
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
