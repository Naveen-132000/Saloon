import React, { useState } from "react";

export default function Header() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showLocationOptions, setShowLocationOptions] = useState(false);

  const serviceOptions = ["Haircut", "Facial", "Massage"];
  const locationOptions = ["New York", "Los Angeles", "Chicago"];

  const handleServiceSelect = (option) => {
    setService(option);
    setShowServiceOptions(false);
  };

  const handleLocationSelect = (option) => {
    setLocation(option);
    setShowLocationOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", { service, location, date, time });
  };

  return (
    <div
      className="header"
      style={{
        // background: "linear-gradient(to right, #f8e2ff, #d0e4f7)" like fresha,
        background: "linear-gradient(to right, #f8e2ff, #d0e4f7)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        overflow: "hidden",
      }}
    >
      <div className="search-container" style={{ width: "90%", maxWidth: "1000px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#333" }}>
          Book local beauty and wellness services
        </h1>
        <form onSubmit={handleSubmit} className="search-form">
          <div
            className="search-bar"
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "30px",
              border: "1px solid #ddd",
              padding: "10px 20px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              justifyContent: "space-between",
            }}
          >
            <div style={{ position: "relative", flex: "1" }}>
              <input
                type="text"
                placeholder="All treatments and venues"
                value={service}
                onFocus={() => setShowServiceOptions(true)}
                onBlur={() => setTimeout(() => setShowServiceOptions(false), 200)}
                onChange={(e) => setService(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px 20px",
                  fontSize: "1.2rem",
                  outline: "none",
                }}
              />
              {showServiceOptions && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    zIndex: 10,
                  }}
                >
                  {serviceOptions.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleServiceSelect(option)}
                      style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "40px", backgroundColor: "#ddd", margin: "0 15px" }} />

            <div style={{ position: "relative", flex: "1" }}>
              <input
                type="text"
                placeholder="Current location"
                value={location}
                onFocus={() => setShowLocationOptions(true)}
                onBlur={() => setTimeout(() => setShowLocationOptions(false), 200)}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px 20px",
                  fontSize: "1.2rem",
                  outline: "none",
                }}
              />
              {showLocationOptions && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    zIndex: 10,
                  }}
                >
                  {locationOptions.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleLocationSelect(option)}
                      style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "40px", backgroundColor: "#ddd", margin: "0 15px" }} />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Select date"
              style={{
                flex: "1",
                border: "none",
                padding: "12px 20px",
                fontSize: "1.2rem",
                outline: "none",
              }}
            />

            {/* Divider */}
            <div style={{ width: "1px", height: "40px", backgroundColor: "#ddd", margin: "0 15px" }} />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Select time"
              style={{
                flex: "1",
                border: "none",
                padding: "12px 20px",
                fontSize: "1.2rem",
                outline: "none",
              }}
            />

            <button
              type="submit"
              style={{
                borderRadius: "30px",
                padding: "10px 20px",
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.2rem",
                outline: "none",
                width: "auto",
                marginLeft: "15px",
              }}
            >
              Search
            </button>
          </div>
        </form>
        <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#555" }}>
          513,525 appointments booked today
        </p>
      </div>
    </div>
  );
}
