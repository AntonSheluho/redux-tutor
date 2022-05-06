import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash) ;
  const customer = useSelector(state => state.customerReducer.customer);
  function addCustomer() {
    const customer = {
      name: prompt('type your name'),
      id: Date.now(),
    }
    dispatch({type: 'ADD_CUSTOMER', payload: customer})
  }
  function removeCustomer(customer) {
    dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id})
  }

  return (
    <div className="App">
      <div style={{fontSize: '2rem'}} >{cash}</div>
      <div style={{display:'flex'}} >

        <button onClick={() => {
          let sum = +prompt('enter sum')
          dispatch({type: 'ADD_CASH', payload: sum});
        }} >Add cash</button>

        <button onClick={() => {
          let sum = +prompt('enter sum')
          dispatch({type: 'GET_CASH', payload: sum});
        }} >Get cash</button>
        <button onClick={addCustomer} >Add customer</button>
        <button  >Remove customer</button>

      </div>
      {customer.length > 0 
        ? <div>{customer.map(cus => 
            <div onClick={() => removeCustomer(cus)} >{cus.name}</div>
          )}</div>
        : <div>There aren't any customers</div>
      }
      

    </div>
  );
}

export default App;
