// Fetch a dad joke from the API
async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
    });
    const data = await response.json();
    document.getElementById("joke").textContent = data.joke;
}

// Load a joke when the page loads
document.addEventListener("DOMContentLoaded", fetchJoke);

// Load a new joke when the button is clicked
document.getElementById("jokeButton").addEventListener("click", fetchJoke);
