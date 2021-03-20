import quotes from "../constants/quotes";

function getQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

export default getQuotes;