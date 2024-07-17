const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample GET route
app.get('/quote', (req, res) => {
    res.send({ quote: "This is a sample quote from the backend." });
});

// Sample POST route
app.post('/quote', (req, res) => {
    const newQuote = req.body.quote;
    res.send({ quote: newQuote });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
