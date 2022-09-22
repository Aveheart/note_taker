const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
var notesDB = require("./db/db.json");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


