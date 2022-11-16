import React from 'react';

function UserInfo() {
  return (
    <>
      <div class="wrapper">
        <div class="left">
          <img src="https://res.cloudinary.com/dkiofoako/image/upload/v1667832770/test/mvwad9rm7b9qbbxd3o7r.jpg" alt="user" width="100" />
          <h6>Koh Bouphaphan</h6>
          <p>Customer</p>
        </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>ko@gmail.com</p>
              </div>
              <div class="data">
                <h4>Phone</h4>
                <p>0889436318</p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
              <div class="data">
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
