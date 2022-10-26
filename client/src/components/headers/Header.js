import React, { useContext, useState } from 'react';
import { GlobalState } from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import Cart from './icon/cart.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiUser,BiSearchAlt } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import Logo from './icon/logo-white-1.svg';

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get('/user/logout');

    localStorage.removeItem('firstLogin');

    window.location.href = '/';
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Tạo Sản Phẩm</Link>
        </li>
        <li>
          <Link to="/category">Loại</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">Lịch Sự Mua hàng</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            <HiOutlineLogout/>
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : '-100%',
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">
            {isAdmin ? <img src={Logo} alt="PetPuzzy"/> : <img src={Logo} alt="PetPuzzy" />}
          </Link>
        </h1>
      </div>

      <ul style={styleMenu}>
        <li>
          <Link to="/">{isAdmin ? 'Sản Phẩm' : 'Mua Đồ'}</Link>
        </li>

        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">
              <BiUser />
            </Link>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      {isAdmin ? (
        ''
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            {/* <img src={Cart} alt="" width="30" /> */}
            <BsCart3/>
          </Link>
        </div>
      )}
    </header>
  );
}
// comments

export default Header;
