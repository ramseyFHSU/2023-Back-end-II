const quotesList = require("./quotesList");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesList.length);
  //   return quotesList[randomIndex];
  console.log(quotesList[randomIndex]);
}

getRandomQuote();

// module.exports = getRandomQuote;

// const getRandomQuote = require("./JS/quotes");
require("./JS/quotes");

// console.log(`"${getRandomQuote().quote}" - ${getRandomQuote().author}`);
