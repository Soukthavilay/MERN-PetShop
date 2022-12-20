import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TiStarburst } from 'react-icons/ti';
import { MdLogin } from 'react-icons/md';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/register', { ...user });

      localStorage.setItem('firstLogin', true);

      window.location.href = '/';
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
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <br />
        <br />
        <p className="text-email">
          First name & Last name
          <TiStarburst color="red" fontSize="7pt" />
        </p>
        <input
          type="text"
          name="name"
          required
          value={user.name}
          onChange={onChangeInput}
        />
        <br/>
        <p className="text-email">
          E-mail
          <TiStarburst color="red" fontSize="7pt" />
        </p>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          onChange={onChangeInput}
        />
        <br/>
        <p className="text-email">
          Password
          <TiStarburst color="red" fontSize="7pt" />
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
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
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
// register
export default Register;
