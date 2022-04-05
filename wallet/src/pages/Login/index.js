import React, { useContext } from 'react';
import Context from '../../Provider/context';
import { useNavigate } from "react-router-dom";
import './style.css';

function Login() {
  const { setEmail, setPassword, disabledBtn } = useContext(Context);

  const navigate = useNavigate();
  
  return (
    <section className="container-login">
      <h1 className="title-login">Wallet</h1>
      <form className="form-login">
        <input
          name="email"
          type="email"
          className="input-email"
          placeholder="email"
          onChange={ ({target: { value }}) => setEmail(value) }
        />
        <input
          name="password"
          type="password"
          className="input-password"
          placeholder="password"
          onChange={ ({target: { value }}) => setPassword(value) }
        />
        <button
          type="button"
          className="button-login"
          disabled={ disabledBtn }
          onClick={ () =>  navigate('/wallet') }
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;