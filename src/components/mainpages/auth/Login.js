import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdLogin } from 'react-icons/md';
import { TiStarburst } from 'react-icons/ti';
import { BsFacebook } from 'react-icons/bs';
import Logo from '../../headers/icon/logo-white-1.svg';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post('/user/login', { ...user });
      
      localStorage.setItem('firstLogin', true);
      
      window.location.href = '/';
      // localStorage.removeItem()
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const style = {
    marginRight: '10px',
    color:{
      color: 'rgba(255,255,255)'
    }
  }

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
      <h2>Login</h2>
        <br />
        <br />
        <p className="text-email">
          E-mail
          <TiStarburst color="red" fontSize="7pt"/>
        </p>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          onChange={onChangeInput}
        />
        <p className="text-email">
          Password
          <TiStarburst color="red" fontSize="7pt"/>
        </p>
        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          value={user.password}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">
            Login
          </button>
          <Link to="/register">Register</Link>
        </div>
        <hr/>
        <img style={style} src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="ig" width="30" height="30" />
        <img style={style} src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png" alt="ig" width="30" height="30" />
        <img  style={style} src="https://cdn-icons-png.flaticon.com/512/888/888853.png" alt="ig" width="30" height="30" />
        <img style={style} src="https://cdn-icons-png.flaticon.com/512/2504/2504839.png" alt="ig" width="30" height="30" />
      </form>
    </div>
  );
}
//login
export default Login;
