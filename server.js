import { readFile } from "fs";
import { createServer } from "http"; //create a server object:

readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }    
createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // http header
    res.write(html); //write a response
    res.end(); //end the response
  })
  .listen( 5555,()=> {
    console.log("server start at port http://localhost:5555"); //the server object listens on port 3000
  })});
