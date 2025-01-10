// Array of dad jokes
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm afraid for the calendar. Its days are numbered.",
    "What do you call fake spaghetti? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "How do you organize a space party? You planet.",
    "Why did the math book look sad? Because it had too many problems."
];

function showJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = jokes[randomIndex];
}
