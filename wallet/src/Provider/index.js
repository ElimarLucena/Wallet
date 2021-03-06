import React, { useState, useEffect } from 'react';
import Context from './context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setdisableBtn] = useState(true);

  // state wallet
  const [expenses, setExpenses] = useState([]);
  const [deleteList, setDeleteList] = useState(null);
  const [editList, setEditList] = useState({});
  const [editedList, setEditedList] = useState({});

  // Login
  const checkUserInformation = () => {
    const passwordLength = 6;
    const verificationPassword = password.length >= passwordLength;
    const verificationEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    if (verificationEmail && verificationPassword) {
      setdisableBtn(false);
    } else {
      setdisableBtn(true);
    }
  }

  useEffect(() => {
    checkUserInformation();
  }, [email, password])

  // Wallet
  useEffect(() => {
      setExpenses(
        expenses.filter(({ id }) => id !== deleteList)
      )
  }, [deleteList])

  useEffect(() => {
    if (Object.keys(editedList).length > 0) {
      const newExpenses = [...expenses];
      newExpenses.splice(editList.id, 1, editedList);
      setExpenses(
        newExpenses,
      )
      setEditList({});
    }
  }, [editedList])

  const contextValue = {
    email,
    password,
    disabledBtn,
    expenses,
    editList,
    setExpenses,
    setEmail,
    setPassword,
    setDeleteList,
    setEditList,
    setEditedList,
  }
  return (
    <Context.Provider value={ contextValue } >
      { children }
    </Context.Provider>
  )
}

export default Provider;