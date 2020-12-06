
const initialState = {
    books: [],
    loading: true,
    error: null,
    // 2. Добавить в стейт новыые поля, для начала можно заполнить их тестовыми значениями
    cartItems: [
        {
            id: 1,
            name: 'Book-1',
            count: 3,
            total: 100
        },

        {
            id: 2,
            name: 'Book-2',
            count: 1,
            total: 35
        }
    ],
    orderTotal: 135
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
};

export default reducer;
