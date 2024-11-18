const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // To allow requests from your React frontend

const app = express();
const port = 3004;

// Enable CORS to allow cross-origin requests from your frontend
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host if not local
  user: 'root', // Replace with your MySQL username
  password: 'root123', // Replace with your MySQL password
  database: 'onlinedb', // The name of your database
});

// Check if the MySQL connection is successful
db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Route to handle form submission
// Updated POST endpoint
app.post('/submit-contact', (req, res) => {
    console.log('Incoming Request Body:', req.body);

    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
        console.error('Validation failed: Missing required fields.');
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Insert into database
    const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error('Database error:', err.sqlMessage);
            return res.status(500).json({ success: false, message: 'Database operation failed.' });
        }

        console.log('Data inserted successfully:', result);
        res.status(200).json({ success: true, message: 'Contact form submitted successfully.' });
    });
});
