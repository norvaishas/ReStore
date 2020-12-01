import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks()); // [массив книг]
    return (
      <h1>ReStore</h1>
    );
};

// Обернул компонент в HOC для получения сервиса
export default withBookstoreService()(App);
