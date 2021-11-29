const express = require("express");
const fs = require("fs");
const app = express();
const noteData = require('./db/db.json');
const path = require("path");
//const PORT = ;


// Get/notes - needs to return notes.html 
app.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "notes.html"));
    console.log("My Notes");

})

// Get - needs to return index.html
app.get("/", (request, response) => {
    // response.sendFile(path.join(__dirname, "..", "..", "index.html"));
    response.sendFile(path.join(__dirname, "index.html"));
    console.log("My index");
})


app.get("/api/notes", (request, response) => {
   
    // Read in file and loop through it
    fs.readFile(path.join(__dirname, "..", "..", "..", "db.json"), function (err, data) {
        console.log("API Notes");
    })
})


// Server listening confirmation
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});