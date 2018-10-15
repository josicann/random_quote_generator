// FSJS - Random Quote Generator

// array of quote objects to be randomly displayed
quotes = [
  {
    quote: "The Secret of getting ahead is getting started",
    source: "Mark Twain"
  },
  {
    quote: "I must not fear, fear is the mindkiller",
    source: "Frank Herbert",
    citation: "Dune",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    source: "Napoleon Hill",
  },
  {
    quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    source: "Ernest Hemingway",
  },
  {
    quote: "That's one small step for [a] man, one giant leap for mankind",
    source: "Neil Armstrong",
    year: 1969,
  }
];

//randomNumber generates a psuedo random number from 0-max
function randomNumber(max) {
  return Math.floor( Math.random() * max )
}
// getRandomQuote - given an array, returns a random element
function getRandomQuote(array){
  return array[randomNumber(array.length)];
}


// printQuote function to displayed formatted html string given quote and properties
function printQuote() {
  randomQuote = getRandomQuote(quotes);
  //string to be formatted into html string and displayed on webpage
  var stringOfQuoteProperties = '';

  stringOfQuoteProperties += '<p class="quote">'  + randomQuote.quote + '</p>';
  stringOfQuoteProperties += '<p class="source">'  + randomQuote.source;
  // if citation or year are included in the current quote object format and add to html string
  if ('citation' in randomQuote) {
    stringOfQuoteProperties += '<span class="citation">' + randomQuote.citation + '</span> ';
  };

  if ('year' in randomQuote) {
    stringOfQuoteProperties += '<span class="year">' + randomQuote.year + '</span> ';
  };

  stringOfQuoteProperties += '</p>';
  document.body.style.backgroundColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255)  + ',' + randomNumber(255)  + ')';

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}
setInterval( printQuote,20000 );

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
