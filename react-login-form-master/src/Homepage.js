import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleViewMoreClick = () => {
        navigate("/blogs");
    };

    return (
        <div className="homepage-container">
            <nav className="navbar">
                <h1 className="navbar-logo">Saloon App</h1>
                <button className="login-button" onClick={handleLoginClick}>Login</button>
            </nav>

            {/* Centered Search Bar */}
            <div className="search-bar">
                <form>
                    <div className="search-component">
                        <select>
                            <option value="" disabled>Select Category</option>
                            <option value="hair-saloon">Hair Saloon</option>
                            <option value="hair-spa">Hair Spa</option>
                            <option value="facial-spa">Facial Spa</option>
                        </select>

                        <select>
                            <option value="" disabled>Select Location</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="miami">Miami</option>
                        </select>

                        <input type="date" />
                        <input type="time" />
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>

            {/* Scrollable Content */}
            <div className="scrollable-content">
                {/* Recommendation Section */}
                <div className="recommendation-section">
                    <h2>Recommended Salons</h2>
                    <div className="recommendation-cards">
                        <div className="card">
                            <h3>Salon One</h3>
                            <p>Rating: ⭐⭐⭐⭐</p>
                        </div>
                        <div className="card">
                            <h3>Salon Two</h3>
                            <p>Rating: ⭐⭐⭐⭐⭐</p>
                        </div>
                        <div className="card">
                            <h3>Salon Three</h3>
                            <p>Rating: ⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="testimonial-section">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonial-cards">
                        <div className="card">
                            <p>"Amazing service!"</p>
                            <h3>Client One</h3>
                        </div>
                        <div className="card">
                            <p>"Best experience ever!"</p>
                            <h3>Client Two</h3>
                        </div>
                        <div className="card">
                            <p>"Highly recommend this saloon!"</p>
                            <h3>Client Three</h3>
                        </div>
                    </div>
                </div>

                {/* Blogs Section */}
                <div className="blog-section">
                    <h2>Our Latest Blogs</h2>
                    <div className="blog-cards">
                        <div className="card">
                            <h3>How to Take Care of Your Hair</h3>
                        </div>
                        <div className="card">
                            <h3>Top Trends in Hair Styling</h3>
                        </div>
                        <div className="card">
                            <h3>Benefits of a Spa Treatment</h3>
                        </div>
                    </div>
                    <button className="view-more-button" onClick={handleViewMoreClick}>
                        View More
                    </button>
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 Saloon App. All rights reserved.</p>
            </footer>
        </div>
    );
};


export default Homepage;
