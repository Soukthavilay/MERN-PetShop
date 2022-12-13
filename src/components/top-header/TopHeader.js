import React from "react";
import { FaDove } from 'react-icons/fa';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import './topheader.css';

export const TopHeader = () => {
    return (
        <>
            <div className='header-container-top'>
                <div className="header-welcome-element">
                    <p>Welcome to our online store!</p>
                </div>
                <div className='header-element'>
                    <p>Track Your Order</p>
                    <p>Customer care</p>
                    <p>FAQ</p>
                    <div className='header-icon'>
                        <BsFacebook className="header-icon-element" style={{margin:'0px 10px'}} />
                        <FaDove className="header-icon-element" style={{margin:'0px 10px'}} />
                        <BsYoutube className="header-icon-element" style={{margin:'0px 10px'}} />
                    </div>
                </div>
            </div>
        </>
    )
}