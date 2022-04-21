import React, { useContext } from 'react';
import Context from '../../Provider/context';

function Table() {
  const { expenses, setDeleteList, setEditList } = useContext(Context);
  return (
    <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Category</th>
        <th>Method</th>
        <th>Value</th>
        <th>Currency</th>
        <th>Used Exchange</th>
        <th>Converted Value</th>
        <th>Conversion Currency</th>
        <th>Edit/Delete</th>
      </tr>
    </thead>
    {
      expenses.map((item) => (
        <tbody key={ item.id }>
          <tr>
            <td>{ item.description }</td>
            <td>{item.category}</td>
            <td>{item.method}</td>
            <td>{parseFloat(item.value).toFixed(2)}</td>
            <td>{(item.exchangeRates[item.currency].name.split('/')[0]) }</td>
            <td>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
            <td>
              {
                parseFloat(item.value * (item.exchangeRates[item.currency].ask))
                  .toFixed(2)
              }
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                onClick={ () => setEditList(item)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={ () => setDeleteList(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      ))
    }
  </table>
  )
}

export default Table;