import React from 'react';
import { AiFillStar } from 'react-icons/ai';
function FeedbackItem(feedbacks) {
  const feedback = feedbacks.feedbacks;
  const rating = feedback.rating;
  return (
    <div className="feedback-item">
      <p>{rating}</p>
      <p>by {feedback.username}</p>
      <p>{feedback.content}</p>
      <img src={feedback.image_url} alt={feedback.img} />
    </div>
  );
}

export default FeedbackItem;
