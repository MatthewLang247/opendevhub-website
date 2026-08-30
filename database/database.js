/*
Author: Matthew Lang
Date: July 18, 2026
Description: Creates and exports a reusable MongoDB connection.
*/

const {MongoClient} = require("mongodb");

// MongoDB connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "OpenDevHub";

// Create the MongoDB client
const client = new MongoClient(url);

let database;

// following function is called when the server starts
async function connectDatabase() {
    await client.connect();

    console.log("Connected to MongoDB.");

    database = client.db(dbName);
}

// returns the connected database
function getDatabase() {
    return database;
}

module.exports = {
    connectDatabase,
    getDatabase
};