import React, { useContext } from 'react';
import Context from '../../Provider/context';

function Header() {
  const { email, expenses } = useContext(Context);

  const expensesSum = () => {
    return expenses.reduce(
      (acc, curr) => acc + (curr.value * curr.exchangeRates[curr.currency].ask), 0,
    );
  }

  return (
    <section className="conteiner-header">
        <h1 className="email-header">{ email }</h1>
        <p className="cost">
          Total Expense:
          <span>
            {' '}
            { expensesSum().toFixed(2) }
          </span>
          <span>
            {' '}
            BRL
          </span>
        </p>
      </section>
  )
}

export default Header;