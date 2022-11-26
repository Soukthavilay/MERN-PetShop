import React from 'react';
import { GoPlay } from 'react-icons/go';
import { HiOutlinePlusCircle } from 'react-icons/hi';

export const Banner = () => {
  return (
    <>
      <div className="banner-content">
        <div className="banner-left split">
          <p>
            <h1>Pet CareFor</h1>
            <h1>Today'sPet</h1>
            <h1>Parents</h1>
          </p>
          <p>
            Grooming and Supply provides grooming service for all dog and cat
            breeds. We are fully committed to the health.
          </p>
          <div className="banner-btn">
            <button>
              Create Schedule <HiOutlinePlusCircle />
            </button>
            <h3>
              <GoPlay />
              Play Video
            </h3>
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
