import React from 'react';
// import axios from 'axios';
// import { GlobalState } from '../../../GlobalState';

function UserInfo() {
  return (
    <>
      <div class="container">
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
            </select>
            {/* <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 170 + 'px' }}
            ></textarea> */}
            <input type="submit" value="Update" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
