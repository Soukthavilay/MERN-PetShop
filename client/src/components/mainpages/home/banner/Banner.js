import React from 'react';
import {GoPlay} from 'react-icons/go'
import {HiOutlinePlusCircle} from 'react-icons/hi'

export const Banner = () => {
  return (
    <>
      <div className="banner-content">
        <div className="banner-left split">
          <p><h1>Pet Care</h1><h1>For Today's</h1><h1>Pet Parents</h1></p>
          <p>
            <p>Grooming and Supply provides grooming</p><p>service for all dog and cat
            breeds. We are</p><p>fully committed to the health.</p>
          </p>
          <div className="banner-btn">
            <button>Create Schedule   <HiOutlinePlusCircle/></button>
            <h3><GoPlay/>Play Video</h3>
          </div>
        </div>
        {/* <div className="banner-right split">
          <img
            src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/h1_slide-image.png"
            alt="banner-right"
            width="600px"
            height="700px"
          />
          <div className="widget">
            <p>Trusted Vet</p>
          </div>
          <div className="motion-effect">
            <img
              src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/testimonial-4.jpg"
              alt="img-motion-effect"
            />
            <p>Dr. Koh Bouphaphan</p>
            <h3>OK very good</h3>
          </div>
        </div> */}
      </div>
    </>
  );
};
