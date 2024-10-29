import React, { useState, useEffect } from 'react';
import './BlogPage.css'; // Ensure this path is correct

const Blog = () => {
  // State to manage selected topic and current review index
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Blog post data
  const blogPosts = {
    all: [
      { title: "New Openings", content: "We are excited to announce the opening of our new branch in downtown!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Special Offers", content: "Check out our special offers for this month!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Hair Straightening Offer", content: "Grab it now", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Hair Care Tips", content: "Top tips for maintaining healthy hair.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Styling Trends", content: "Latest trends in hair styling.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Product Reviews", content: "Our take on the best hair products.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    ],
    newOpenings: [
      { title: "New Salon in Downtown", content: "We are excited to announce the opening of our new downtown salon!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Special Offers", content: "Check out our special offers for this month!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Customer Testimonials", content: "Hear what our customers have to say about us!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Hair Care Tips", content: "Top tips for maintaining healthy hair.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Styling Trends", content: "Latest trends in hair styling.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Product Reviews", content: "Our take on the best hair products.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    ],
    specialOffers: [
      { title: "50% Off on First Visit", content: "Get 50% off on your first visit to our salon.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Special Offers", content: "Check out our special offers for this month!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Customer Testimonials", content: "Hear what our customers have to say about us!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Hair Care Tips", content: "Top tips for maintaining healthy hair.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Styling Trends", content: "Latest trends in hair styling.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Product Reviews", content: "Our take on the best hair products.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    ],
    testimonials: [
      { title: "Happy Customer", content: "I had a great experience at the salon!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Special Offers", content: "Check out our special offers for this month!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Customer Testimonials", content: "Hear what our customers have to say about us!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Hair Care Tips", content: "Top tips for maintaining healthy hair.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Styling Trends", content: "Latest trends in hair styling.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
      { title: "Product Reviews", content: "Our take on the best hair products.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    ],
  };

  // Customer reviews
  const customerReviews = [
    { name: "Alice", text: "Great service! Highly recommend.", stars: "★★★★★", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    { name: "Bob", text: "Best salon in town!", stars: "★★★★☆", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    { name: "Cathy", text: "Loved my haircut and the staff!", stars: "★★★★★", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
    { name: "David", text: "Amazing experience every time!", stars: "★★★★☆", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrBOH6GECCEiQMe9I_3rYa42quieesGShhHl39aJ8h86mYO8Q_WJaR6edBesX8WSy7-MZtXAdw82frK3wyC_qLYMjoaXf6VSgz_lRpg" },
  ];

  // Function to move to the next review
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
  };

  // Automatically move to the next review every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="blog-container">
      {/* Image Container */}
      <div className="image-container">
        <img src="" alt="Salon" />
      </div>

      {/* Topics Section */}
      <div className="topics">
        <h2>Our Latest Blogs</h2>
        <div className="topic-buttons">
          <button onClick={() => setSelectedTopic('newOpenings')}>New Openings</button>
          <button onClick={() => setSelectedTopic('specialOffers')}>Special Offers</button>
          <button onClick={() => setSelectedTopic('testimonials')}>Blogs from Bangalore</button>
          <button onClick={() => setSelectedTopic('all')}>Diwali offers</button>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="blog-posts">
        <div className="post-container">
          {blogPosts[selectedTopic].map((post, index) => (
            <div className="post" key={index}>
              <img src={post.image} alt={post.title} className="post-image" />
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer reviews with names and images */}
      <div className="reviews-container">
        <h2>Customer Reviews</h2>
        <div className="review">
          <div className="customer-image-container">
            <img src={customerReviews[currentReviewIndex].image} alt={customerReviews[currentReviewIndex].name} className="images/men.jpg" />
          </div>
          <div className="review-text">
            <p>{customerReviews[currentReviewIndex].text}</p>
            <div className="stars">{customerReviews[currentReviewIndex].stars}</div>
            <p className="customer-name">{customerReviews[currentReviewIndex].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
