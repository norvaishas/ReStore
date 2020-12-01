import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  // Предоставляет доступ к Redux Store
  <Provider store={store}>
      {/* Обрабатывает ошибки ЖЦ во всех компонентах ниже */}
      <ErrorBoundary>
          {/* Передает сервис через ContextAPI */}
          <BookstoreServiceProvider value={bookstoreService}>
              <Router>
                  <App/>
              </Router>
          </BookstoreServiceProvider>
      </ErrorBoundary>
  </Provider>,
  document.getElementById('root'));
