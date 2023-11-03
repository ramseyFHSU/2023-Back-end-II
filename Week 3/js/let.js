// Using 'let' to declare a festival name
let festivalName = "RockWave Fest";

function buyTickets() {
  console.log(`Welcome to ${festivalName} ticket counter!`);

  // 'let' is block-scoped
  if (true) {
    let ticketPrice = 50; // This variable is only accessible within this block due to 'let'
    console.log(`Standard ticket price: $${ticketPrice}`);
  }

  // Uncommenting the next line would cause an error
  // console.log(ticketPrice);  // Error: ticketPrice is not defined outside the block

  // Temporal Dead Zone (TDZ) behavior of 'let'
  // Uncommenting the next line would cause an error
  // console.log(bandName);  // Error: Cannot access 'bandName' before initialization
  let bandName = "The Rolling Stones";
  console.log(`Featured band: ${bandName}`);
}

buyTickets();

// 'let' variables declared inside a function aren't accessible outside of it
// Uncommenting the next line would cause an error
// console.log(bandName);  // Error: bandName is not defined
