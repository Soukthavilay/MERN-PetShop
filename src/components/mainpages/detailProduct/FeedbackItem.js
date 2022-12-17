import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Star from './Star';
function FeedbackItem(feedbacks) {
  const feedback = feedbacks.feedbacks;
  const rating = feedback.rating;
  return (
    <div className="feedback-item">
      <p>{rating}</p>
      <Star rating={rating}/>
      <p>by {feedback.username}</p>
      <p>{feedback.content}</p>
      <img src={feedback.image_url} alt={feedback.img} />
      <hr style={{border:"3px solid #f1f1f1"}} />
      
    </div>
  );
}

export default FeedbackItem;
