// server.js
// where your node app starts

// init project
require('dotenv').config();
let express = require('express');
let app = express();
let PORT = process.env.PORT || 5050

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
let cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", (req, res) => {
  res.json({ ipaddress: req.connection.remoteAddress, language: req.headers["accept-language"], software: req.headers["user-agent"] });
})
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});



// listen for requests :)
let listener = app.listen(PORT, function () {
  console.log('Your app is running on http://localhost:' + listener.address().port);

});
