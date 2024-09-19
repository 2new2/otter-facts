// Function to fetch and display a random otter fact
function showRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').innerText = randomFact;
}

// Automatically load a random fact when the page loads
window.onload = function() {
    showRandomFact();
};