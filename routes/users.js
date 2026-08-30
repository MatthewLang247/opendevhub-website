/*
Author: Matthew Lang, T00749271
Date: July 18, 2026
Description: Routes for retrieving user information for authentication and profile display
*/

const express = require("express");

const router = express.Router();

const {getDatabase} = require("../database/database");

// login
router.post("/login", async (req, res) => {
    const db = getDatabase();

    const username = req.body.username;
    const password = req.body.password;

    // search MongoDB
    const user = await db.collection("Users").findOne({
        username: username
    });

    // user does not exist
    if (!user) {
        return res.json({
            success: false,
            message: "User not found."
        });
    }

    // wrong password
    if (user.password !== password) {
        return res.json({
            success: false,
            message: "Incorrect password."
        });
    }

    // successful login
    res.json({
        success: true,
        user: user
    });
});

// registering a new user
router.post("/register", async (req, res) => {
    const db = getDatabase();

    const {
        username, password, name, email
    } = req.body;

    // checks if existing user
    const existingUser = await db.collection("Users").findOne({
        username: username
    });

    // user exists already
    if (existingUser) {
        return res.json({
            success: false,
            message: "Username already exists."
        });
    }

    // creates new user
    const newUser = {username, password, name, email, title: "New Developer", skills: [], bio: ""};

    await db.collection("Users").insertOne(newUser);

    res.json({
        success: true,
        message: "Account created."
    });
});

// searches for existing user and their data
router.get("/dashboard/:username", async (req, res) => {
    const db = getDatabase();

    const username = req.params.username;

    // finding the user
    const user = await db.collection("Users").findOne({
        username: username
    });

    // no matching user
    if (!user) {
        return res.json({
            success: false,
            message: "User not found."
        });
    }

    // find projects owned by this user
    const projects = await db.collection("Projects").find({
        owner: username
    }).toArray();

    // count user's public projects
    const publicProjects = projects.filter(project => project.visibility === "Public");

    res.json({
        success: true,
        user: user,
        projects: projects,
        summary: {
            totalProjects: projects.length,
            publicProjects: publicProjects.length,
        }
    });
});

// Updates an existing user's profile
router.put("/update/:username", async (req, res) => {
    const db = getDatabase();

    // updated user data
    const username = req.params.username;
    const updatedUser = {
        name: req.body.name,
        email: req.body.email,
        title: req.body.title,
        bio: req.body.bio,
        skills: req.body.skills
    };

    // updates user info in database
    await db.collection("Users").updateOne({username: username}, {$set: updatedUser});

    res.json({
        success: true,
        message: "Profile updated."
    });
});

module.exports = router;