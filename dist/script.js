const quotesArray = [
  {quote: "Be the change that you wish to see in the world.",
  author: "Mahatma Gandhi"},
  {quote: "No one can make you feel inferior without your consent.",
  author: "Eleanor Roosevelt, This is My Story"},
  {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  author: "Mahatma Gandhi"},
  {quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
  author: "Marilyn Monroe"},
  {quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  author: "Albert Einstein"},
  {quote: "To the well-organized mind, death is but the next great adventure.",
  author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone"},
  {quote: "A friend is someone who knows all about you and still loves you.",
  author: "Elbert Hubbard"},
  {quote: "Happiness is a warm puppy.",
  author: "Charles M. Schulz"},
  {quote: "You can't be happy unless you're unhappy sometimes.",
  author: "Lauren Oliver, Delirium"},
  {quote: "Turn your wounds into wisdom.",
  author: "Oprah Winfrey"},
  {quote: "I have seen many storms in my life. Most storms have caught me by surprise, so I had to learn very quickly to look further and understand that I am not capable of controlling the weather, to exercise the art of patience and to respect the fury of nature",
  author: "Paulo Coelho"}
  ];


const quoteGenerator = () => {
let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];  
  return randomQuote;
}

let newQuote = document.getElementById("quote");
let newAuthor = document.getElementById("author");

const changeQuote = () => {
  let quoteObject = quoteGenerator();
  
  newQuote.innerText = quoteObject.quote;
  newAuthor.innerText = quoteObject.author;
}

// INICIAL SET OF RANDOM QUOTE AND AUTHOR

changeQuote();