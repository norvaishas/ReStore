import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import './book-list.css';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

// Презентационный компонент - его задача просто отрендерить полученные данные
const BookList = ({books}) => {
    return (
      <ul className='book-list'>
          {
              books.map(elem => {
                  const {id, ...book} = elem;
                  return <BookListItem key={id} book={book}/>
              })
          }
      </ul>
    );
};

// Компонент контейнер - работает с Redux, реализует loading, error и другую логику
class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    };

    render() {
        const {books, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error !== null) {
            return <ErrorIndicator/>
        }

        return (
          <BookList books={books}/>
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

// Теперь компонент вместо 3 функций получит только fetchBooks
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            ownProps.bookstoreService.getBooks()
              .then(books => dispatch(booksLoaded(books)))
              .catch(error => dispatch(booksError(error)))
        }
    };
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
