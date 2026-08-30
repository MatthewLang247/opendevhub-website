/*
Author: Matthew Lang, T00749271
Date: July 18, 2026
Description: Routes for retrieving project information
*/

const express = require("express");

const router = express.Router();

const {getDatabase} = require("../database/database");

console.log("Projects route loaded!"); // testing line

// returns every project.
router.get("/", async (req, res) => {
    console.log("GET /api/projects called!"); // testing line

    const db = getDatabase();
    
    const projects = await db.collection("Projects").find({}).toArray();

    res.json(projects);
});

// returns website statistics
router.get("/stats", async (req, res) => {
    const db = getDatabase();

    // gets number of users
    const totalUsers = await db.collection("Users").countDocuments();

    // gets number of public projects
    const totalProjects = await db.collection("Projects").countDocuments({
        visibility: "Public"
    });

    res.json({
        users: totalUsers,
        projects: totalProjects
    });
});

// returns all public projects
router.get("/public", async (req, res) => {
    const db = getDatabase();

    const projects = await db.collection("Projects").find({
        visibility: "Public"
    }).toArray();

    res.json(projects);
});

// creates a new project
router.post("/create", async (req, res) => {
    const db = getDatabase();

    const project = req.body;

    // validation
    if (!project.title || !project.owner) {
        return res.json({
            success: false,
            message: "Missing required information"
        });
    }
    
    // adds new project to database
    await db.collection("Projects").insertOne(project);

    res.json({
        success: true,
        message: "Project created."
    });
});

module.exports = router;