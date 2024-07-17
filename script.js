document.getElementById('quoteButton').addEventListener('click', function() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.quote;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });
});
