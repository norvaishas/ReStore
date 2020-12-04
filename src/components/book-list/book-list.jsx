import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import './book-list.css';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

class BookList extends Component {

    componentDidMount() {
        // 1. получить данные
        const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested(); // меняет loading на true
        bookstoreService.getBooks()
        // 2. отправить действие в редюсер:
          // 2.2 теперь данные отправляются при успешном выполнении промиса
          .then(books => booksLoaded(books))
          .catch(error => {
              console.log(error);
              return booksError(error);
          });
    }

    render() {
        const {books, loading, error} = this.props;
        console.log(error);

        if (loading) {
            return <Spinner/>
        }

        if (error !== null) {
            return <ErrorIndicator/>
        }

        return (
          <ul className='book-list'>
              {
                  books.map(elem => {
                      const {id, ...book} = elem;
                      return <BookListItem key={id} book={book}/>
                  })
              }
          </ul>
        )
    };
}

// эта функция определяет какие именно данные из redux будут переданны в компонент
const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};

// 2.1 эта ф-я определяет какие функции вернутся в компонент в виде пропсов:
// возвращает объект, где ключ - имя нового пропа доступного компоненту, а значение - ф-я которую нужно вызывать в п. 2.2

// То же самое, но чуть лаконичней
const mapDispatchToProps = (dispatch) => {
    return {
      booksLoaded: (newBooks) => {
          dispatch(booksLoaded(newBooks));
      },
      booksRequested: () => dispatch(booksRequested()), // экшн-крийэтер нужно вызывать сразу, а не передавать как колбэк
      booksError: () => dispatch(booksError())
    };
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
