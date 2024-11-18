const express = require("express");
const mysql = require("mysql");
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
  user: "root", // Replace with your MySQL username
  password: "root123", // Replace with your MySQL password
  database: "onlinedb", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Route to handle form submission
app.post("/submit-testimonial", (req, res) => {
  const { name, testimonial } = req.body;

  if (!name || !testimonial) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO test (name, testimonial) VALUES (?, ?)";
  db.query(query, [name, testimonial], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Failed to submit testimonial" });
    }
    res.status(200).json({ message: "Testimonial submitted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
