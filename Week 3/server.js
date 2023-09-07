// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!\n welcome to Back-end 2");
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Sever is running at http://localhost:${PORT}`);
// });

const http = require("http");
const validator = require("validator");

const urls = []; //Array to store originals urls

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (validator.isURL(body)) {
        urls.push(body);
        res.end(`Shortened URL Id: ${urls.length - 1}`);
      } else {
        res.end("Invalid URL provided");
      }
    });
  } else if (req.method === "GET") {
    const id = parseInt(req.url.slice(1));
    res.end(urls[id] || "URL not found");
  } else {
    res.end("Invalid Method");
  }
});

server.listen(3000, () => {
  console.log(`Sever is running at http://localhost:3000`);
});
