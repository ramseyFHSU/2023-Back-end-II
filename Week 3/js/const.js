// Using 'const' to declare the gallery's name
const galleryName = "Modern Art Haven";

function displayArtwork() {
  console.log(`Welcome to the ${galleryName}!`);

  // 'const' is block-scoped and its value cannot be reassigned
  const featuredArtist = "Vincent van Gogh";
  console.log(`Today's featured artist is: ${featuredArtist}`);

  // Uncommenting the next line would cause an error
  // featuredArtist = "Pablo Picasso";  // Error: Assignment to constant variable.

  if (true) {
    const artworkName = "Starry Night"; // This variable is only accessible within this block due to 'const'
    console.log(`Featured artwork: ${artworkName}`);
  }

  // Uncommenting the next line would cause an error
  // console.log(artworkName);  // Error: artworkName is not defined outside the block

  // 'const' requires initialization at declaration
  // Uncommenting the next line would cause an error
  // const exhibitionDate;  // Error: Missing initializer in const declaration
}

displayArtwork();

// 'const' variables declared inside a function aren't accessible outside of it
// Uncommenting the next line would cause an error
// console.log(featuredArtist);  // Error: featuredArtist is not defined
