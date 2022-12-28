import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import { gsap } from 'gsap';
import axios from 'axios';

function UserInfo() {
  const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin;

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      repeatDelay: 1,
      yoyo: true,
      scale: 1.3,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const logoutUser = async () => {
    await axios.get('/user/logout');
    localStorage.removeItem('firstLogin');
    window.location.href = '/';
  };
  return (
    <>
      {isAdmin ? (
        <div className="container-information">
          <div className="header-information">
            <p className="header-label">Admin</p>
            <div className="header-direction">
              <Link to="/">Home /</Link>
              <Link to="/infor">Manager</Link>
            </div>
          </div>

          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/profile">Personal Profile</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/history">All Order</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/create_product">Create Product</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/category">Create Category</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/" onClick={logoutUser}>
                  Logout
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-information">
          <div className="header-information">
            <p className="header-label">Account details</p>
            <div className="header-direction">
              <Link to="/">Home /</Link>
              <Link to="/infor">My account</Link>
            </div>
          </div>

          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/profile">Personal Profile</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/history">Recent Orders</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/cart">Cart</Link>
              </p>
            </div>
          </div>
          <div className="detail-user-box">
            <div className="user-box">
              <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <Link to="/" onClick={logoutUser}>
                  Logout
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserInfo;
