import React, {Component} from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';



// Ф-я, которая возвращает ф-ю, которая принимает компонент который надо обернуть в консюмер
const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
          <BookstoreServiceConsumer>
              {
                  (bookstoreService) => {
                      return (<Wrapped
                        daata={...props}
                        bookstoreService={bookstoreService}/>)
                  }
              }
          </BookstoreServiceConsumer>
        )
    }
};

export default withBookstoreService;
