import React from 'react';
import { AiFillStar } from 'react-icons/ai';


const Feedback = () => {
  return (
    <>
      <div className="product-info-tabs">
        <div className="header-feedback">
          <h3>Review (0)</h3>
          <div className="underline2"></div>
        </div>
        <h2>REVIEWS</h2>
        <p>There are no reviews yet.</p>
        <br />
        <p>Your rating</p>
        <p>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
        <p>Your message</p>

        <textarea
          type="text"
          name="content"
          placeholder="comment your feedback"
        />
        <div className="detail-input">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="email" id="email" placeholder="Your Email" />
        </div>
        <br />
        <button type="button" className="btn-review">
          SUBMIT REVIEW
        </button>
      </div>
    </>
  );
};

export default Feedback;
