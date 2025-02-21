const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Example user details
const userId = "Rajneesh299"; // Example user ID
const email = "rajneeshv525@gmail.com"; // Example email
const rollNumber = "23BCS80093"; // Example roll number

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    // Validate input
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a > b ? a : b)] : [];

    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
