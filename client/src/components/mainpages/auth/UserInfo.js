import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { GlobalState } from '../../../GlobalState';

function UserInfo() {
  return (
    <>
      {/* <div class="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Customer Information</h2>
          <p></p>
        </div>
        <div class="row">
          <div class="column">
            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" style={{ width: 100 + '%' }} alt="" />
          </div>
          <div class="column">
            <label for="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="lolo"
            />
            <label for="lname">Email</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="lo@gmail.com"
            />
            <label for="fname">Phone</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="08896556445"
            />
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Laos</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select> */}
      {/* <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 170 + 'px' }}
            ></textarea> */}
      {/* <input type="submit" value="Update" />
          </div>
        </div>
      </div> */}
      <div className='container-information'>
        <div className='header-information'>
          <p className='header-label'>Account details</p>
          <div className='header-direction'>
            <Link to="/">Home /</Link>
            <Link to="/infor">My account</Link>
          </div>
        </div>
        <div className='body-information'>
          <form>
            <div className='name-information'>
              <div className='firstname-information'>
                <label className='label-information'>First name*</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your first name"
                />
              </div>
              <div className='lastname-information'>
                <label className='label-information'>Last name*</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <label className='label-information'>Phone*</label>
            <input
              type="text"
              id="phone"
              name="phonenumber"
              placeholder="Your phone number"
            />
            <label className='label-information'>Address*</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your address"
            />
            <label className='label-information'>Email address*</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
            />
            <div >
              <fieldset className='password-change'>
                <legend>Password change</legend>
                <label className='label-information'>Current password</label>
                <input
                  type="text"
                  id="current-password"
                  name="current-password"
                />
                <label className='label-information'>New password</label>
                <input
                  type="text"
                  id="new-password"
                  name="new-password"
                />
                <label className='label-information'>Confirm new password</label>
                <input
                  type="text"
                  id="confirm-new-password"
                  name="confirm-new-password"
                />
              </fieldset>
            </div>
            <button
              type="submit"
              className='btn-submit'
              name="save_account_details"
              value="Save changes">
              Save changes</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
