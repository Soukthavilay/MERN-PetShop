import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Feedback = (feedback) => {
  const feedbacks = feedback.feedback;
  //console.log(feedbacks)
  return (
    <>
    <div className="padding-feedback">
      <span className="heading-feedback">User Rating</span>
      <span>{feedbacks.rating}</span>
      <p>4.1 average based on {feedbacks.length} reviews.</p>
      <hr style={{border:"3px solid #f1f1f1"}} />
      </div>
      <div className="row-feedback padding-feedback">
        <div className="side-feedback">
          <div>5 star</div>
        </div>
        <div className="middle-feedback">
          <div className="bar-container-feedback">
            <div className="bar-5"></div>
          </div>
        </div>
        <div className="side-feedback right-feedback">
          <div>150</div>
        </div>
        <div className="side-feedback">
          <div>4 star</div>
        </div>
        <div className="middle-feedback">
          <div className="bar-container-feedback">
            <div className="bar-4"></div>
          </div>
        </div>
        <div className="side-feedback right-feedback">
          <div>63</div>
        </div>
        <div className="side-feedback">
          <div>3 star</div>
        </div>
        <div className="middle-feedback">
          <div className="bar-container-feedback">
            <div className="bar-3"></div>
          </div>
        </div>
        <div className="side-feedback right-feedback">
          <div>15</div>
        </div>
        <div className="side-feedback">
          <div>2 star</div>
        </div>
        <div className="middle-feedback">
          <div className="bar-container-feedback">
            <div className="bar-2"></div>
          </div>
        </div>
        <div className="side-feedback right-feedback">
          <div>6</div>
        </div>
        <div className="side-feedback">
          <div>1 star</div>
        </div>
        <div className="middle-feedback">
          <div className="bar-container-feedback">
            <div className="bar-1"></div>
          </div>
        </div>
        <div className="side-feedback right-feedback">
          <div>20</div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
