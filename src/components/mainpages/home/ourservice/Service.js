import React from "react";
import './service.css';
import {BsPlusCircle} from 'react-icons/bs';

export const Service = () => {
    return (
        <>
            <div className="our-service-wrapper">
                <div className="our-service-label-container">
                    <div className="our-service-image">
                        <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/07/h1-foot.png" alt="" />
                    </div>
                    <div className="our-service-label">
                        <p>Our Services</p>
                    </div>
                    <div className="our-service-paragraph">
                        <p>Grooming & Supply provides grooming services for all dog and cat breeds. We are fully committed to the health.</p>
                    </div>
                </div>
                <div className="our-service-grid-container">
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service1.svg" alt="" />
                        </div>
                        <div className="our-service-container-label">
                            <p>Vaccination</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>With lots of unique blocks you can easily create a page without coding with Appmax easily.​</p>
                        </div>
                    </div>
                    <div className="our-service-container-purple">
                        <div className="our-service-container-image">
                            <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service2.svg" alt="" />
                        </div>
                        <div className="our-service-container-label" style={{ backgroundcolor: '#524EB7' }}>
                            <p>Pet Grooming</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>With lots of unique blocks you can easily create a page without coding with Appmax easily.​</p>
                        </div>
                    </div>
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service3.svg" alt="" />
                        </div>
                        <div className="our-service-container-label">
                            <p>Veterinary</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>With lots of unique blocks you can easily create a page without coding with Appmax easily.​</p>
                        </div>
                    </div>
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service4.svg" alt="" />
                        </div>
                        <div className="our-service-container-label">
                            <p>Teeth Cleaning​</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>With lots of unique blocks you can easily create a page without coding with Appmax easily.​</p>
                        </div>
                    </div>
                </div>
                <div className="our-service-btn">
                    <button>
                        Learn More <BsPlusCircle />
                    </button>
                </div>
            </div>
        </>
    );
}