import React from 'react';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src="" alt="" style={{ width: '100%' }} />
        <div className="f-content">
          <span>BouphaphanSoukthavilayKoh@gmail.com</span>
          <div className="f-icons">
            <BsInstagram color="white" size={'3rem'} />
            <BsFacebook color="white" size={'3rem'} />
            <BsGithub color="white" size={'3rem'} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
