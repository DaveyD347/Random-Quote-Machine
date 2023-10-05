// Sample basketball quotes
const quotes = [
    { text: "Talent wins games, but teamwork and intelligence wins championships.", author: "- Michael Jordan" },
    { text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", author: "- Michael Jordan" },
    { text: "I can accept failure, everyone fails at something. But I can't accept not trying.", author: "- Michael Jordan" },
    { text: "When you miss a shot, never think of what you did wrong. Take the next shot thinking of what you must do right.", author: "- Tony Wroten" },
    // Add more quotes as needed
];

document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('text').textContent = selectedQuote.text;
    document.getElementById('author').textContent = selectedQuote.author;

    // Update the tweet link
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedQuote.text + ' ' + selectedQuote.author)}`;
    document.getElementById('tweet-quote').setAttribute('href', tweetURL);
});
