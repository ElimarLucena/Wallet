import React, { useState, useEffect } from 'react';
import Context from './context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setdisableBtn] = useState(true);

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

  const contextValue = {
    email,
    password,
    disabledBtn,
    setEmail,
    setPassword,
  }
  return (
    <Context.Provider value={ contextValue } >
      { children }
    </Context.Provider>
  )
}

export default Provider;