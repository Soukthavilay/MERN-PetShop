import React from 'react';
import { GoPlay } from 'react-icons/go';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { VscCircleLargeFilled } from 'react-icons/vsc';

export const Banner = () => {
  return (
    <>
      <div className="banner-content">
        <div className="banner-left-split">
          <div className='banner-left'>
            <div className='banner-large-label'>
              <span className='big-label'>Pet Care</span>
              <span className='big-label'>For Today's</span>
              <span className='big-label'>Pet Parents</span>
            </div>
            <p className='banner-paragraph'>
              Grooming and Supply provides grooming service for all dog and cat
              breeds. We are fully committed to the health.
            </p>
          </div>
          <div className="banner-btn">
            <button>
              Create Schedule <HiOutlinePlusCircle />
            </button>
            <h3 className='banner-play-video'>
              <GoPlay style={{ color: '#F76631' }} />
              Play Video
            </h3>
          </div>
          <div className='banner-number-container'>
            <div className='banner-number'>
              <div className='banner-icon-circle'>
                <VscCircleLargeFilled style={{ color: '#F76631' }} size='25px' />
              </div>
              <div className='banner-number-element'>
                <p className='large-text'>28K</p>
                <p className='small-text'>Veterinarian</p>
              </div>
            </div>
            <div className='banner-number'>
              <div className='banner-icon-circle'>
                <VscCircleLargeFilled style={{ color: '#524eb7' }} size='25px' />
              </div>
              <div className='banner-number-element'>
                <p className='large-text'>13K</p>
                <p className='small-text'>Helped Pet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-right split">
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
        </div>
      </div>
    </>
  );
};
