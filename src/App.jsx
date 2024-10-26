import { useState } from "react";

function App() {
  const quotes = [
    { author: "Franklin D. Roosevelt", quote: "The only limit to our realization of tomorrow is our doubts of today." },
    { author: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
    { author: "Steve Jobs", quote: "Your time is limited, so don’t waste it living someone else’s life." },
    { author: "Eleanor Roosevelt", quote: "If life were predictable it would cease to be life, and be without flavor." },
    { author: "Dalai Lama", quote: "The purpose of our lives is to be happy." },
    { author: "John Lennon", quote: "Life is what happens when you're busy making other plans." },
    { author: "Stephen King", quote: "Get busy living or get busy dying." },
    { author: "Brian Tracy", quote: "You have within you right now, everything you need to deal with whatever the world can throw at you." },
    { author: "Theodore Roosevelt", quote: "Believe you can and you're halfway there." },
    { author: "George Eliot", quote: "It is never too late to be what you might have been." },
    { author: "Tony Robbins", quote: "The only impossible journey is the one you never begin." },
    { author: "John Wooden", quote: "Do not let making a living prevent you from making a life." },
    { author: "Henry David Thoreau", quote: "Go confidently in the direction of your dreams! Live the life you’ve imagined." },
    { author: "Dalai Lama", quote: "Happiness is not something ready made. It comes from your own actions." },
    { author: "Marilyn Monroe", quote: "Keep smiling, because life is a beautiful thing and there’s so much to smile about." },
    { author: "Albert Einstein", quote: "If you want to live a happy life, tie it to a goal, not to people or things." },
    { author: "Abraham Lincoln", quote: "In the end, it's not the years in your life that count. It's the life in your years." },
    { author: "Helen Keller", quote: "Life is either a daring adventure or nothing at all." },
    { author: "Mae West", quote: "You only live once, but if you do it right, once is enough." },
    { author: "William James", quote: "Act as if what you do makes a difference. It does." },
    { author: "Henry David Thoreau", quote: "Success usually comes to those who are too busy to be looking for it." },
    { author: "Sam Levenson", quote: "Don't watch the clock; do what it does. Keep going." },
    { author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
    { author: "Ralph Waldo Emerson", quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
    { author: "Alan Kay", quote: "The best way to predict the future is to invent it." },
    { author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { author: "Confucius", quote: "Life is really simple, but we insist on making it complicated." },
    { author: "Robert Frost", quote: "In three words I can sum up everything I've learned about life: it goes on." },
    { author: "George Addair", quote: "Everything you've ever wanted is on the other side of fear." }
  ];

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  
  return (
    <>
      <main id="quote-box" className="position-absolute top-50 start-50 translate-middle border border-5 p-5 rounded-3 shadow">
        <p id="text">{quote.quote}</p>
        <p id="author">- {quote.author}</p>

        <div className="d-flex justify-content-between">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top">Tweet Quote</a>
        <button id="new-quote" onClick={() => {setQuote(quotes[Math.floor(Math.random() * quotes.length)])}}>New Quote</button>
        </div>
      </main>
    </>
  )
}

export default App
