/*http server*/
const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const requestedUrl = req.url.slice(1);
  console.log(requestedUrl);
  let file = "";
  const cssFile = fs.readFileSync("node-website/style.css", "utf8");
  switch (requestedUrl) {
    case "":
      file = fs.readFileSync("node-website/index.html", "utf8");
      res.end(file);
      break;
    case "about":
      file = fs.readFileSync("node-website/about.html", "utf8");
      res.end(file); 
      break;           
    case "contact":
      file = fs.readFileSync("node-website/contact-me.html", "utf8");
      res.end(file);
      break;
    default:
      file = fs.readFileSync("node-website/404.html", "utf8");
      res.end(file);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
