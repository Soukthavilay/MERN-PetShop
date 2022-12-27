import React,{useContext} from 'react';
import { GlobalState } from '../../../GlobalState';

const Profile = () => {
  const state = useContext(GlobalState);
  const token = state.token;
  console.log(token);
  const [user] = state.userAPI.detail;
  console.log(user);
  return (
    <>
      <div className="body-information">
        <form>
          <div className="name-information">
            <div className="firstname-information">
              <label className="label-information">First name*</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder={user.name}
              />
            </div>
            <div className="lastname-information">
              <label className="label-information">Last name*</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder={user.name}
              />
            </div>
          </div>
          <label className="label-information">Phone*</label>
          <input
            type="text"
            id="phone"
            name="phonenumber"
            placeholder={user.phone}
          />
          <label className="label-information">Address*</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder={user.address}
          />
          <label className="label-information">Email address*</label>
          <input type="text" id="email" name="email" placeholder={user.email} />
          <div>
            {/* <fieldset className="password-change">
              <legend>Password change</legend>
              <label className="label-information">Current password</label>
              <input
                type="text"
                id="current-password"
                name="current-password"
              />
              <label className="label-information">New password</label>
              <input type="text" id="new-password" name="new-password" />
              <label className="label-information">Confirm new password</label>
              <input
                type="text"
                id="confirm-new-password"
                name="confirm-new-password"
              />
            </fieldset> */}
          </div>
          <button
            type="submit"
            className="btn-submit"
            name="save_account_details"
            value="Save changes"
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
