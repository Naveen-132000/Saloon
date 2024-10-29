// src/components/Testimonials.js
import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Deeksha sagar",
    review: "Amazing service and friendly staff! Highly recommend.",
    rating: 5,
    photo: ${process.env.PUBLIC_URL}/images/men.png
  },
  {
    name: "Likith",
    review: "The best salon experience I've ever had.Highly recommend.",
    rating: 4,
    photo: ${process.env.PUBLIC_URL}/images/men.png
  },
  {
    name: "Naveen",
    review: "Professional staff and great ambiance.Highly recommend.",
    rating: 5,
    photo: ${process.env.PUBLIC_URL}/images/men.png
  },
  {
    name: "Sachin",
    review: "Love my new look! Will come back again.Highly recommend.",
    rating: 4,
    photo: ${process.env.PUBLIC_URL}/images/men.png
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="testimonial-container">
       <h2 className="testimonial-heading">Testimonials</h2> {/* Added heading */}
      <div className="testimonial-card">
        <img src={testimonialsData[current].photo} alt={testimonialsData[current].name} className="testimonial-photo" />
        <h3 className="testimonial-name">{testimonialsData[current].name}</h3>
        <p className="testimonial-review">{testimonialsData[current].review}</p>
        <div className="testimonial-rating">
          {"★".repeat(testimonialsData[current].rating)}{"☆".repeat(5 - testimonialsData[current].rating)}
        </div>
      </div>
      <div className="dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={dot ${index === current ? "active" : ""}}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;