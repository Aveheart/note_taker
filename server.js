const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
var notesDB = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// GET ROUTES FOR HTML
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "./public/notes.html")));

// GET ROUTE FOR API
app.get("/api/notes", (req,res) => { res.json(notesDB)});

// GET ROUTE FOR FRONTPAGE
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./public/index.html")));


// POST ROUTE
app.post("/api/notes", (req, res) => {
  req.body.id = uuidv4();
  const newNote = req.body;

  notesDB.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notesDB));
  res.json(notesDB);
})

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));