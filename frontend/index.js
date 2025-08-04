const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit-feedback" method="POST">
            <input name="name" placeholder="Your Name" required />
            <input name="feedback" placeholder="Your Feedback" required />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit-feedback', express.urlencoded({ extended: true }), async (req, res) => {
    const feedbackData = {
        name: req.body.name,
        feedback: req.body.feedback
    };

    try {
        await axios.post('http://localhost:5000/feedback', feedbackData);
        res.send('Feedback Recieved successfully! <a href="/">Go Back</a>');
    } catch (error) {
        res.send('Failed to send feedback.');
    }
});

app.listen(3000, () => {
    console.log('Frontend running on http://localhost:3000');
});