// // src/components/AboutSection.js
// import React, { useEffect, useRef, useState } from 'react';
// import './AboutSection.css';

// function AboutSection() {
//   const aboutRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const top = aboutRef.current.getBoundingClientRect().top;
//       const isVisible = top < window.innerHeight;
//       if (isVisible) {
//         setIsScrolled(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       ref={aboutRef}
//       className={about-container ${isScrolled ? 'scrolled' : ''}}
//     >
//       <div className="about-image">
//         <img src="/images/Happy.webp" alt="Salon" />
//       </div>
//       <div className="about-description">
//         <h1>About us</h1>
//         <p>At  Our Saloon, we believe that beauty is an art, and we are here to help you express your unique style and personality. Our team of professional stylists and beauty experts is dedicated to offering you a luxurious, personalized experience. From cutting-edge haircuts and styling to rejuvenating skincare treatments, we use only the highest quality products to ensure that you leave feeling refreshed and confident.Hair Services: From trendy cuts and vibrant color treatments to luxurious styling and hair treatments, our skilled stylists stay up-to-date with the latest trends and techniques to ensure you leave looking and feeling fabulous.

// Skincare Treatments: Our facial treatments and skin therapies are designed to nourish and rejuvenate your skin. We use premium products tailored to your skin type, ensuring a personalized experience that brings out your natural glow.

// Nail Care: Treat yourself to a pampering session with our manicure and pedicure services. Whether you prefer classic elegance or bold nail art, our nail technicians will help you achieve the perfect look.

// Makeup Services: Special occasion? Our professional makeup artists are here to enhance your beauty for weddings, events, or just a night out. We use high-quality products to ensure a flawless finish that lasts.</p>
//       </div>
//     </div>
//   );
// }

// export default AboutSection;