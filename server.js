const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",           // Your MySQL username
  password: "root123",    // Your MySQL password
  database: "saloon",     // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Route to handle form submission for bookings
app.post("/submit", (req, res) => {
  const { service, location, date, time } = req.body;

  if (!service || !location || !date || !time) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = "INSERT INTO listbooking (service, location, date, time) VALUES (?, ?, ?, ?)";
  db.query(query, [service, location, date, time], (err, result) => {
    if (err) {
      console.error("Error inserting booking:", err);
      return res.status(500).json({ message: "Failed to save booking" });
    }
    console.log("Booking saved:", result);
    res.status(200).json({ message: "Booking successfully saved" });
  });
});

// Route to handle form submission for contact messages
app.post("/submit-contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("Error inserting contact message:", err);
      return res.status(500).json({ message: "Failed to submit message" });
    }
    console.log("Contact message saved:", result);
    res.status(200).json({ message: "Message submitted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
