import React from 'react';
import { Banner } from './banner/Banner';
import { Pup } from './pup/Pup';
import { useLocation } from 'react-router-dom';
import Header from '../../headers/Header';


export const Home = ({hideHeaderPaths = []}) => {
  const { pathname } = useLocation();
  return (
    <>
    {/* {!hideHeaderPaths.includes(pathname) && <Header />} */}
      <div className="home-container">
        <Banner />
        <Pup />
      </div>
    </>
  );
};

