import {React, useState } from "react";
import { useDispatch } from 'react-redux'
import { actions as authActions } from '../store/auth'
import "./Auth.css";
const Auth = () => {
  const [loginForm, setLoginForm] = useState({
    id : '', 
    password : ''
  })
  const dispatch = useDispatch()
  const login = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  const updateLoginForm = (e) =>{
    setLoginForm(prevFormData =>({...prevFormData,[e.target.name] : e.target.value}))
  }
  console.log(loginForm);
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Id</label>
        <input 
          type="text" 
          value = {loginForm.id}
          name="id" 
          id="id" 
          onChange = {updateLoginForm}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          value={loginForm.password}
          name="password" 
          id="password" 
          onChange={updateLoginForm}
        />
        <button className="login-btn" type="submit" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
