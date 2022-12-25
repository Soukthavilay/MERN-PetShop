import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

function UserInfo() {
  return (
    <>
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
            <p>
              <Link to="/profile">Personal Profile</Link>
            </p>
          </div>
        </div>
        <div className="detail-user-box">
          <div className="user-box">
            <p>
              <Link to="/history">Recent Orders</Link>
            </p>
          </div>
        </div>
        <div className="detail-user-box">
          <div className="user-box">
            <p>
              <Link to="/cart">Cart</Link>
            </p>
          </div>
        </div>
        <div className="detail-user-box">
          <div className="user-box">
            <p>Your Feedback</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
