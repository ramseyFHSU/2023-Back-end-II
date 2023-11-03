// Import Fs module
const { readFile, writeFile } = require("fs");

// Read the content of the file
readFile("test/hello.txt", "utf-8", (err, content) => {
  if (err) throw err;
  console.log("Content of the hello.txt", content);

  // Modify the content
  const newContent = content.replace("sample", "modified");

  // Write the modified content in a new file
  writeFile("test/modified.txt", newContent, "utf8", (err) => {
    if (err) throw err;
    console.log("File has been modified");
  });
  // read the updated content
  readFile("test/modified.txt", "utf-8", (err, updatedContent) => {
    if (err) throw err;
    console.log("Content of the modified.txt", updatedContent);
  });
});
