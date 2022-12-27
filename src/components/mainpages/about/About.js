import React from 'react';

export const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row no-row">
        <div className="column">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkiofoako/image/upload/v1667832822/test/oukwf7tlsetql50nphbn.jpg"
              alt="Jane"
              style={{ width: 100 + '%' }}
            />
            <div className="container">
              <h2>Bouphaphan Soukthavilay</h2>
              <p className="title">UX/UI - Web Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>vivopakselaocom@gmail.com</p>
              <p>
                <button href="https://www.facebook.com/sko.bouphapanh/" className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkiofoako/image/upload/v1669131980/PetShop/Thong_pzueaa.png"
              alt="Jane"
              style={{ width: 100 + '%' }}
            />
            <div className="container">
              <h2>Trần Đức Thông</h2>
              <p className="title">App Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>tranducthong@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkiofoako/image/upload/v1669131980/PetShop/Duyen_y2uvrs.jpg"
              alt="Jane"
              style={{ width: 100 + '%' }}
            />
            <div className="container">
              <h2>Trần Mỹ Duyên</h2>
              <p className="title">Backend Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>tmy@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkiofoako/image/upload/v1669131980/PetShop/Tan_lbzcbp.jpg"
              alt="Mike"
              style={{ width: 100 + '%' }}
            />
            <div className="container">
              <h2>Hoàng Nhật Tân</h2>
              <p className="title">Frontend Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>hoangnhattan@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://res.cloudinary.com/dkiofoako/image/upload/v1669131979/PetShop/Quan_jo7ubk.png"
              alt="John"
              style={{ width: 100 + '%' }}
            />
            <div className="container">
              <h2>Lâm Gia Quân</h2>
              <p className="title">App Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>lamgiaquan@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
