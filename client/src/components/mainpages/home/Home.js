import React from 'react';
import { Banner } from './banner/Banner';
import { Pup } from './pup/Pup';
import { Service } from './ourservice/Service';


import { About } from '../about/About';


export const Home = ({ hideHeaderPaths = [] }) => {
  return (
    <>
      {/* {!hideHeaderPaths.includes(pathname) && <Header />} */}
      <div className="home-container">
        <Banner />
        <Service />
        <About />
        <Pup />
      </div>
    </>
  );
};

