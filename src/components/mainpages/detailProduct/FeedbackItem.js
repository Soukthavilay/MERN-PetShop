import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import gsap from 'gsap';
function FeedbackItem(feedbacks) {
  const feedback = feedbacks.feedbacks;
  const rating = feedback.rating;
  const colors = {
    orange: '#FFA500',
    grey: '#808080',
  };
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      repeatDelay: 1,
      yoyo: true,
      scale: 2.5,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <div className="feedback-item">
      <Rating
        initialRating={rating}
        emptySymbol={<FaStar color={colors.grey} className="icon" />}
        fullSymbol={<FaStar color={colors.orange} className="icon" />}
        readonly
      />
      <p>by {feedback.username}</p>
      <p>{feedback.content}</p>
      <img
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        src={feedback.image_url}
        alt={feedback.img}
      />
      <hr style={{ border: '3px solid #f1f1f1' }} />
    </div>
  );
}

export default FeedbackItem;
