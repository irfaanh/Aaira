import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      no: 1,
      name: 'AFSAL',
      date: '02 June 2025',
      comment: 'Aaira Travels made my flight booking experience completely hassle-free. They found me the best deal within minutes and even followed up until I boarded. Truly professional and reliable!',
      rating: 5
    },
    {
      no: 2,
      name: 'AL WALIEDUL FARIS',
      date: '05 June 2025',
      comment: 'I was stressed about getting my visa approved in time, but Aaira Travels handled everything smoothly. Their team guided me through each step.',
      rating: 4
    },
    {
      no: 3,
      name: 'SHAJI',
      date: '08 June 2025',
      comment: 'Amazing service from Aaira Travels! They helped me book a last-minute flight. Everything was handled professionally. Highly recommended!',
      rating: 5
    },
    // {
    //   no: 4,
    //   name: 'RAHIL',
    //   date: '04 June 2025',
    //   comment: 'They made my UAE visa process super easy. I got my visa without any stress. Really appreciate their quick support!',
    //   rating: 4
    // }
  ];

  return (
    
    <div className="container-fluid google-review-container py-5">
      <h2 className="google-review-title">What Our Client Say</h2>
      <div className="google-review-grid">
        {reviews.map((item) => (
          <div key={item.no} className="google-review-card">
            <div className="google-review-header">
              <div className="google-review-avatar">{item.name.charAt(0)}</div>
              <div>
                <div className="google-review-name">{item.name}</div>
                <div className="google-review-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < item.rating ? '#fbbc04' : '#ddd'}
                      size={14}
                    />
                  ))}
                </div>
                <div className="google-review-date">{item.date}</div>
              </div>
            </div>
            <div className="google-review-comment">{item.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
