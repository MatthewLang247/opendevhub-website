/*
Author: Matthew Lang
Date: July 18, 2026
Description: Creates and initializes OpenDevHub database with sample users and projects.
*/

const {MongoClient} = require("mongodb");
const users = require("./users");
const projects = require("./projects");

// MongoDB connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "OpenDevHub";

async function initializeDatabase() {
    const client = new MongoClient(url);

    try {
        // connect to MongoDV
        await client.connect();

        console.log("Connected to MongoDB.");

        const db = client.db(dbName);

        // Remove existing collections if they already exist
        try {
            await db.collection("Users").drop();
            console.log("Old Users collection removed.");
        }
        catch (err) {
            console.log("Users collection did not already exist.");
        }

        try {
            await db.collection("Projects").drop();
            console.log("Old Projects collection removed.");
        }
        catch (err) {
            console.log("Projects collection did not already exist.");
        }

        // Insert sample users
        await db.collection("Users").insertMany(users);
        console.log("Users inserted.");

        // Insert sample projects
        await db.collection("Projects").insertMany(projects);
        console.log("Projects inserted.");

        console.log("Database initialization complete.");
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

initializeDatabase();