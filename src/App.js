import { React } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './asyncAction/customers';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    const addCash = (cash) => {
        dispatch({ type: 'ADD_CASH', payload: cash });
    };
    const getCash = (cash) => {
        dispatch({ type: 'GET_CASH', payload: cash });
    };
    const addCustomer = (name) => {
        dispatch({
            type: 'ADD_CUSTOMER',
            customer: { id: Date.now(), name },
        });
    };
    const removeCustomer = (name) => {
        dispatch({ type: 'REMOVE_CUSTOMER', customer: name });
    };
    const removeCustomerClick = (customer) => {
        dispatch({ type: 'REMOVE_CUSTOMER_CLICK', customer: customer.id });
    };

    return (
        <div className="App">
            <div>{cash}</div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => addCash(Number(+prompt()))}>
                    Add cash
                </button>
                <button onClick={() => getCash(Number(+prompt()))}>
                    Get cash
                </button>
                <button onClick={() => addCustomer(prompt())}>
                    Add customer
                </button>
                <button onClick={() => removeCustomer(prompt())}>
                    Remove customer
                </button>
                <button onClick={() => dispatch(fetchCustomers())}>
                    Get customers from base
                </button>
            </div>
            {customers.length > 0 ? (
                customers.map((cus) => <div onClick={() => removeCustomerClick(cus)} key={cus.id}>{cus.name}</div>)
            ) : (
                <div>There aren't any customers</div>
            )}
        </div>
    );
}

export default App;
