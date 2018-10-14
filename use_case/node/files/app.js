var express = require("express");

var app = express();
var PORT = 8888;

app.use("/bus", require("./routes/bus"));

app.get("/", (req, res) => {
    res.sendFile("/home/node/map_pau.html");
});


app.get("/pau.js", (req, res) => {
    res.sendFile("/home/node/pau.js");
});


console.log("Connecté au port " + PORT);
app.listen(PORT);
