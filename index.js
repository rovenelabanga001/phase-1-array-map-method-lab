const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const specialWords = {
  oo: "OO",
  api: "API",
  nan: "NaN",
  jsonp: "JSONP", // Ensure this key is lowercase to match input
  stoppropagation: "StopPropagation", // Ensure this key is lowercase
  preventdefault: "PreventDefault", // Ensure this key is lowercase
  constructor: "Constructor",
};

function titleCased() {
  return tutorials.map((tutorial) => {
    const words = tutorial.toLowerCase().split(" ");

    // Process special words
    for (let index in specialWords) {
      // Check for the special word and its version with a question mark
      words.forEach((word, i) => {
        if (word === index || word === `${index}?`) {
          words[i] = word.endsWith('?') ? `${specialWords[index]}?` : specialWords[index];
        }
      });
    }

    // Convert all words to title case (except for special words)
    const titleCasedWords = words.map((word) => {
      // If it's a special word, leave it as is
      if (Object.values(specialWords).some((specialWord) => word.includes(specialWord))) {
        return word;
      }
      // Otherwise, capitalize the first letter and lowercase the rest
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return titleCasedWords.join(" ");
  });
}

console.log(titleCased());
