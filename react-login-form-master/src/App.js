// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import BlogPage from "./BlogPage";
import Services from "./Services";
import Contact from "./Contact"; // Import Contact component
import Footer from "./footer";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
