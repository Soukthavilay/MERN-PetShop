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

  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Đăng Ký</h2>
        <br />
        <br />
        <p className="text-email">
          Tên
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
          Mật Khẩu
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
          <button type="submit"><MdLogin/> Đăng Ký</button>
          <Link to="/login">Đăng Nhập</Link>
        </div>
      </form>
    </div>
  );
}
// register
export default Register;
