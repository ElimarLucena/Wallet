import React, { useContext } from 'react';
import Context from '../../Provider/context';
import { useHistory } from "react-router-dom";
import './style.css';

function Login() {
  const { setEmail, setPassword, disabledBtn } = useContext(Context);

  const history = useHistory();
  
  return (
    <section className="container">
      <h1 className="title-login">Wallet</h1>
      <form className="form-login">
        <input
          name="email"
          type="email"
          className="input-login"
          placeholder="email"
          onChange={ ({target: { value }}) => setEmail(value) }
        />
        <input
          name="password"
          type="password"
          className="input-senha"
          placeholder="password"
          onChange={ ({target: { value }}) => setPassword(value) }
        />
        <button
          type="button"
          className="button-login"
          disabled={ disabledBtn }
          onClick={ () =>  history.push('/wallet') }
        >
          Login
        </button>
      </form>
    </section>
  );
}



export default Login;