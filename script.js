// Function to fetch and display a random otter fact
function showRandomFact() {
    fetch('facts.json')
    .then(response => response.json())
    .then(data => {
        const facts = data.facts;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('fact').innerText = randomFact.fact;
        document.getElementById('source').innerText = randomFact.source ? `Source: ${randomFact.source}` : '';
    })
    .catch(error => {
        console.error('Error fetching the facts:', error);
        document.getElementById('fact').innerText = 'Failed to load fact.';
        document.getElementById('source').innerText = '';
    });
}

// Automatically load a random fact when the page loads
window.onload = function() {
    showRandomFact();
};
