import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';

class BookList extends Component {

    render() {
        const {books} = this.props;

        return (
          <ul>
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
        books: state.books
    };
};

export default connect(mapStateToProps)(BookList);
