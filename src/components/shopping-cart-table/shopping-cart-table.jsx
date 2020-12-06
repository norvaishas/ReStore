import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';

// 1. Создать презентационный компонент и продумать структуру данных которые он будет получать и использовать
const ShoppingCartTable = ({items, orderTotal, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (items) => {
        return items.map((item, idx) => {
            const {id, name, count, total} = item;
            return (
              <tr key={id}>
                  <td>{idx + 1}</td>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>${total}</td>
                  <td>
                      <button onClick={() => onDelete(id)}
                              className="btn btn-outline-danger btn-sm float-right">
                          <i className="fa fa-trash-o"/>
                      </button>
                      <button onClick={() => onIncrease(id)}
                              className="btn btn-outline-success btn-sm float-right">
                          <i className="fa fa-plus-circle"/>
                      </button>
                      <button onClick={() => onDecrease(id)}
                              className="btn btn-outline-warning btn-sm float-right">
                          <i className="fa fa-minus-circle"/>
                      </button>
                  </td>
              </tr>
            )
        })
    };

    return (
      <div className="shopping-cart-table">
          <h2>Your Order</h2>

          <table className="table">
              <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {renderRow(items)}
              </tbody>
          </table>

          <div className="total">Total: ${orderTotal}</div>
      </div>
    )
};

// 3. Реализовать функции для connect() и подключить компонент к Redux
const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        orderTotal: state.orderTotal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            console.log('+', id);
        },
        onDecrease: (id) => {
            console.log('-', id)
        },
        onDelete: (id) => {
            console.log('Delete', id)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
