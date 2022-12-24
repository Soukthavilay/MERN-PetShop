import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Feedback = (feedback) => {
  const feedbacks = feedback.feedback;
  const colors = {
    orange: '#FFA500',
    grey: '#808080',
  };
  //console.log(feedbacks)
  const [result, setResult] = useState();
  useEffect(() => {
    if (feedbacks) {
      var total = 0;
      feedbacks.map((item) => {
        total += item.rating;
      });
      setResult(total / feedbacks.length);
    }
  }, [feedbacks]);
  return (
    <>
      <div className="padding-feedback">
        <span className="heading-feedback">User Rating</span>
        <span>{feedbacks.rating}</span>
        <p>
          <Rating
            initialRating={result}
            emptySymbol={<FaStar color={colors.grey} className="icon" />}
            fullSymbol={<FaStar color={colors.orange} className="icon" />}
            readonly
          />
           average based on {feedbacks.length} reviews.
        </p>
        {/* commnet */}
        <hr style={{ border: '3px solid #f1f1f1' }} />
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
