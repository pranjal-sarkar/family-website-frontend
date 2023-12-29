import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-components">
        <h1>LOGIN</h1>
        <div className="form-tag">
          <form>
            <div className="birth-date-input">
              <input type="text" placeholder='Enter your Birth Date' />
            </div>

            <div className="birth-month-input">
              <input type="text" placeholder='Enter your Birth Month' />
            </div>

            <div className="login-submit-button">
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login