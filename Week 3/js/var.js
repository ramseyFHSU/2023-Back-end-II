// Using 'var' to declare a library name
var libraryName = "Central Library";

function checkBookAvailability() {
  console.log("Welcome to the", libraryName);

  // 'var' is function-scoped
  if (true) {
    var bookTitle = "Moby Dick"; // This variable is accessible throughout the function due to 'var'
  }

  console.log("Checking availability of:", bookTitle); // Outputs: Checking availability of: Moby Dick

  // Hoisting behavior of 'var'
  console.log("Author:", author); // Outputs: Author: undefined
  var author = "Herman Melville";
  console.log("Author:", author); // Outputs: Author: Herman Melville
}

checkBookAvailability();

// 'var' variables declared inside a function aren't accessible outside of it
// Uncommenting the next line would cause an error
// console.log(bookTitle);  // Error: bookTitle is not defined
