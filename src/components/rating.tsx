
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


interface Review {
  rating: number;
  comment: string;
}

const CustomSuccessToast = () => (
  <div className="flex items-center p-2 bg-white rounded shadow-lg">
    <span role="img" aria-label="flower" className="text-2xl mr-2">🌸</span>
    <span>Thank you for visiting my portfolio and rating it! 😊🎉</span>
  </div>
);

const Rating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Fetch existing reviews from the backend
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://my-portfoliobackend.onrender.com/api/reviews ',{ timeout: 70000,});
        setReviews(response.data);
        calculateAverageRating(response.data);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };

    fetchReviews();
  }, []);

  const calculateAverageRating = (reviews: Review[]) => {
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    setAverageRating(avgRating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://my-portfoliobackend.onrender.com/api/send-rating' , { rating, comment },{ timeout: 70000,} );
      toast.success(<CustomSuccessToast />, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      } ) ;

      // Reset form
      setRating(0);
      setComment('');

      // Fetch updated reviews
      const response = await axios.get('https://my-portfoliobackend.onrender.com/api/reviews',{ timeout: 70000,});
      setReviews(response.data);
      calculateAverageRating(response.data);
      
    } catch (error) {
      toast.error('Error submitting rating. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    
      <div className="w-full grid  max-w-full bg-gray-900 rounded-lg  text-white shadow-lg p-2 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-white  dark:text-yellow-400 ">Rate My Portfolio</h2>
        <div className="text-center mb-4 space-y-4">
          <p className="text-2xl font-bold ">Overall Rating: {averageRating.toFixed(1)} / 5</p>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < Math.round(averageRating) ? solidStar : regularStar}
                className="text-yellow-500 text-xl"
              />
            ))}
          </div>
          <p className="mt-2">Number of Reviews: {reviews.length}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className="focus:outline-none"
                  onClick={() => setRating(index + 1)}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <FontAwesomeIcon
                    icon={index + 1 <= (hover || rating) ? solidStar : regularStar}
                    className="text-yellow-500 text-2xl"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xl font-medium mb-2" htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black  bg-gray-200"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-400 dark:hover:bg-green-400">Submit</button>
        </form>
        <ToastContainer />
      </div>

  );
};

export default Rating;
