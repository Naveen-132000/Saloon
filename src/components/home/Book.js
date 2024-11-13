import React, { useState } from "react";

export default function Book() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the booking details to the server
    console.log("Booking Details:", { service, date, time });
  };

  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <form onSubmit={handleSubmit}>
              <div className="row g-2 justify-content-center">
                {/* Service Selection */}
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Facial">Facial</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                  </select>
                </div>
                
                {/* Date Selection */}
                <div className="col-md-3">
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                
                {/* Time Selection */}
                <div className="col-md-3">
                  <input
                    type="time"
                    className="form-control"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <div className="col-md-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
