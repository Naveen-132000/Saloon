import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"; // Ensure this imports the updated styles

const Homepage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLoginClick = () => {
        navigate("/login"); // Navigate to the login page
    };

    return (
        <div className="homepage-container">
            <nav className="navbar">
                <h1 className="navbar-logo">Saloon App</h1>
                <button className="login-button" onClick={handleLoginClick}>Login</button>
            </nav>

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

            <div className="recommendation-section">
                <h2>Recommended Salons</h2>
                <div className="recommendation-cards">
                    <div className="card">
                        <img src="https://c4.wallpaperflare.com/wallpaper/800/831/598/digital-art-neon-mountains-lake-wallpaper-preview.jpg" alt="Salon 1" />
                        <h3>Salon One</h3>
                        <p>Rating: ⭐⭐⭐⭐</p>
                    </div>
                    <div className="card">
                        <img src="https://c4.wallpaperflare.com/wallpaper/800/831/598/digital-art-neon-mountains-lake-wallpaper-preview.jpg" alt="Salon 2" />
                        <h3>Salon Two</h3>
                        <p>Rating: ⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="card">
                        <img src="https://c4.wallpaperflare.com/wallpaper/800/831/598/digital-art-neon-mountains-lake-wallpaper-preview.jpg" alt="Salon 3" />
                        <h3>Salon Three</h3>
                        <p>Rating: ⭐⭐⭐</p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 Saloon App. All rights reserved.</p>
            </footer>
        </div>
    );
};
export default Homepage;