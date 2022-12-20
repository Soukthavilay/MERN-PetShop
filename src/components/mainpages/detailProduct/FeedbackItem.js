import React from 'react';
import {FaStar} from 'react-icons/fa'
import Rating from 'react-rating';
function FeedbackItem(feedbacks) {
  const feedback = feedbacks.feedbacks;
  const rating = feedback.rating;
  const colors = {
    orange: '#FFA500',
    grey: '#808080',
  };
  return (
    <div className="feedback-item">
      <Rating
        initialRating={rating}
        emptySymbol={
          <FaStar color={colors.grey} className="icon" />
        }
        fullSymbol={<FaStar color={colors.orange} className="icon" />}
        readonly
      />
      <p>by {feedback.username}</p>
      <p>{feedback.content}</p>
      <img src={feedback.image_url} alt={feedback.img} />
      <hr style={{ border: '3px solid #f1f1f1' }} />
    </div>
  );
}

export default FeedbackItem;
