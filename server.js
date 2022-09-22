const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000 ; 

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());