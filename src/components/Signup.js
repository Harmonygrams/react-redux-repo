import React from 'react'
import "./Auth.css";
const Signup = () => {
  const [loginForm, setLoginForm] = useState({
    id : '', 
    password : '', 
    fullName : '',
  })
  return (
    <div className="container">
      <h1>Sign up</h1>
      <form>
        <label htmlFor="id">Id</label>
        <input 
          type="text" 
          value = {loginForm.fullName}
          name="fullName" 
          id="name" 
          onChange = {updateLoginForm}
          placeholder = 'Full Name'
        />
        <input 
          type="text" 
          value = {loginForm.id}
          name="id" 
          id="id" 
          onChange = {updateLoginForm}
          placeholder = "email"
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          value={loginForm.password}
          name="password" 
          id="password" 
          onChange={updateLoginForm}
          placeholder = "password"
        />
        <button className="login-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
