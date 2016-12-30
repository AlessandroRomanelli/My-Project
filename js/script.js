// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// declaring the array of objects containing the quotes along with sources and year
var quotes = [
    {quote: "War is a series of disasters which result in a winner.",
    source: "Georges Clemenceau",
    year: 1921,
    tag: "war"},

    {quote: "Stay out of the road, if you want to grow old.",
    source: "Pink Floyd",
    citation: "Sheep",
    year: 1977,
    tag: "music"},

    {quote: "It's not that I'm afraid to die, I just don't want to be there when it happens.",
    source: "Woody Allen",
    citation: "Without Feathers",
    year: 1975,
    tag: "death"},

    {quote: "Once the game is over, the king and the pawn go back in the same box.",
    source: "Popular Italian proverb",
    tag: "proverb"},

    {quote: "Mankind must put an end to war, or war will put an end to mankind.",
    source: "John Fitzgerald Kennedy",
    citation: "Address before the United Nations",
    year: 1961,
    tag: "war"},

    {quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    source: "Colin Powell",
    tag: "work"}

    {quote: "War does not determine who is right — only who is left.",
    source: "Anonymous",
    citation: "first appeared in The Montreal Star",
    year: 1932,
    tag: "war"},

    {quote: "One good thing about music, when it hits you, you feel no pain.",
    source: "Bob Marley",
    tag: "music"},

    {quote: "Sometime they'll give a war and nobody will come.",
    source: "Carl Sandburg",
    citation: "The People",
    year: 1936,
    tag: "war"},

    {quote: "Coming together is a beginning; keeping together is progress; working together is success.",
    source: "Henry Ford",
    tag: "work"},

    {quote: "I believe in the old and sound rule that an ounce of sweat will save a gallon of blood.",
    source: "George S. Patton",
    citation: "Speech to the Third Army",
    year: 1944,
    tag: "war"},

    {quote: "There is only one happiness in this life, to love and be loved.",
    source: "George Sand",
    tag: "love"},

    {quote: "The quickest way to end a war is to lose it.",
    source: "George Orwell",
    tag: "war"},

    {quote: "The consciousness of loving and being loved brings warmth and richness to life that nothing else can bring.",
    source: "Alvin Redman",
    citation: "The Epigrams of Oscar Wilde",
    year: 1952,
    tag: "love"}

    {quote: "I hate war as only a soldier who has lived it can, only as one who has seen its brutality, its stupidity.",
    source: "Dwight D. Eisenhower",
    citation: "Speech in Ottawa",
    year: 1946,
    tag: "war"},
];


// declaring a function that generates a random number and returns a random object from within the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

// declaring the printQuote function that triggers every time the button is clicked
function printQuote () {
  // assigning the object generated from the previous function to a variable
  var randomQuote = getRandomQuote();
  // setting up the variable of the html string to an empty one (reset) so that the old quote gets deleted
  var html = "";
  // adding the quote and the source to the html string according to the given html template
  html += "<p class='quote'>" + randomQuote.quote + "</p>";
  html += "<p class='source'>" + randomQuote.source;
  // conditional statement to check if the given object has a valid citation property,
  // if condition is true the value is passed to the html string, otherwise it's skipped.
  if (randomQuote.citation !== undefined) {
    html += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  // same as before but with the year property
  if (randomQuote.year !== undefined) {
    html += "<span class='year'>" + randomQuote.year + "</span></p>";
  }
  // the resulting html string is printed in the 'quote-box' div inside the index.html.
  var quoteboxDiv = document.getElementById('quote-box');
  quoteboxDiv.innerHTML = html;
}
