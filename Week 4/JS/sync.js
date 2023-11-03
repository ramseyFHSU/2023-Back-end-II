// Import Fs module
const fs = require("fs");

// Read the content of the file
const content = fs.readFileSync("test/hello.txt", "utf-8");
console.log("Content of the hello.txt", content);

// Modify the content
const newContent = content.replace("sample", "modified");

// Write the modified content in a new file
fs.writeFileSync("test/modified.txt", newContent, "utf8");
console.log("File has been modified");

// read the updated content
const updatedContent = fs.readFileSync("test/modified.txt", "utf-8");
console.log("Content of the modified.txt", updatedContent);
