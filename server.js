/* 
COMP 4621 Final Project
Author: Matthew Lang, T00749271
Date: July 18, 2026
Main server file for OpenDevHub website.
*/

const express = require("express");

const {connectDatabase} = require("./database/database")

const projectRoutes = require("./routes/projects");
const userRoutes = require("./routes/users");

const path = require("path");

const app = express(); // creates web server
const PORT = 3000;
console.log("THIS IS MY SERVER.JS");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// project routes
app.use("/api/projects", projectRoutes);
app.use("/api/users", userRoutes);

console.log("Project routes registered.");

app.get("/", (req, res) => {
    console.log("Homepage route hit");
    res.send("Homepage works!");
});

// starts server after connecting to MongoDB
async function startServer() {
    await connectDatabase(); // waits till MongoDB is connected

    app.listen(PORT, () => {
        console.log('Server running on http://localhost:3000');
    });
}

startServer();