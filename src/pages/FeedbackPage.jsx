
import { useState } from "react";
import { Star } from "lucide-react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!rating) {
      alert("Please provide a rating");
      return;
    }
    alert(`Feedback submitted! Rating: ${rating}, Comment: ${feedback}`);
    setRating(0);
    setFeedback("");
  };

  return (
    <div>
      <MainNavbar></MainNavbar>
    <div className="feedback-container">
      <div className="feedback-card">
        <h2 className="feedback-title">Rate Your Experience</h2>
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`star ${rating >= star ? "selected" : ""}`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <textarea
          placeholder="Leave your feedback here..."
          className="feedback-textarea"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button className="feedback-button" onClick={handleSubmit}>
          Submit Feedback
        </button>
      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
}
