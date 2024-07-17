document.getElementById('quoteButton').addEventListener('click', function() {
    fetch('http://localhost:3000/quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.quote;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });
});

// Example of how to send a POST request
function sendQuote(quote) {
    fetch('http://localhost:3000/quote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quote: quote })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
