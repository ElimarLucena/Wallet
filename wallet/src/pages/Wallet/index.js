import React, { useState, useEffect, useContext } from 'react';
import getQuotesApi from '../../services';
import Context from '../../Provider/context';
import Header from '../../Components/Header';
import Table from '../../Components/Table';

function Wallet() {
  const [currencyName, setCurrencyName] = useState([]);

  const [id, setId] = useState(0);
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [description, setDescription] = useState('');
  const [method, setMethod] = useState('Money');
  const [category, setCategory] = useState('Food');
  const [exchangeRates, setExchangeRates] = useState({})

  const {expenses, setExpenses, editList} = useContext(Context);

  const states = {
    id,
    value,
    currency,
    description,
    method,
    category,
    exchangeRates,
  }

  useEffect(() => {
    (
      async () => {
        const response = await getQuotesApi();
        setCurrencyName(Object.keys(response)); 
        setExchangeRates(response);
      }
    )();
  }, [])

  useEffect(() => {
    setValue(0);
    setDescription('');
  }, [expenses])

  useEffect(() => {
    if (Object.keys(editList).length > 0) {
      setId(editList.id);
      setValue(editList.value);
      setCurrency(editList.currency);
      setDescription(editList.description);
      setMethod(editList.method);
      setCategory(editList.category);
      setExchangeRates(editList.exchangeRates);
    }
  }, [editList])

  return (
    <div>
      <Header />
      <form>
        <label htmlFor="value">
          Value:
          <input
            type="number"
            name="value"
            value={ value }
            onChange={ ({ target: { value } }) => setValue(value) }
          />
        </label>
        <label htmlFor="currency">
          Currency:
          <select
            name="currency"
            onChange={ ({ target: { value } }) => setCurrency(value) }
          >
            {
              currencyName.filter((item) => item !== 'USDT').map((item) => (
                <option
                  key={ item }
                  value={ item }
                  data-testid={ item }
                >
                  { item }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="description">
        Description:
          <input
            name="description"
            type="text"
            value={ description }
            onChange={ ({ target: { value } }) => setDescription(value) }
          />
        </label>
        <label htmlFor="method">
          Method:
          <select
            name="method"
            onChange={ ({ target: { value } }) => setMethod(value) }
          >
            <option>Money</option>
            <option>Credit card</option>
            <option>Debit card</option>
          </select>
        </label>
        <label htmlFor="category">
          Category:
          <select
            name="category"
            onChange={ ({ target: { value } }) => setCategory(value) }
          >
            <option>Food</option>
            <option>Leisure</option>
            <option>Work</option>
            <option>Transport</option>
            <option>Health</option>
          </select>
        </label>
        {
          Object.keys(editList).length > 0 ? (
            <button>
              Edit Expenses
            </button>
          ) : (
            <button
              type="button"
              onClick={ () => {
                setExpenses([...expenses, states]);
                setId(id + 1);
              } }
            >
              Add Expenses
            </button>
          )
        }
      </form>
      <Table />
    </div>
  )
}

export default Wallet;