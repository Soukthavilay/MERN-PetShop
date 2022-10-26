import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdLogin } from 'react-icons/md';
import { TiStarburst } from 'react-icons/ti';

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
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
        <h2>Đăng Nhập</h2>
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
          Mật Khẩu
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
            <MdLogin /> Đăng Nhập
          </button>
          <p className="text-desc">Nếu chưa có tài khoản</p>
          <Link to="/register">Đăng Ký</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
