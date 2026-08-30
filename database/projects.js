/*
Author: Matthew Lang
Date: July 18, 2026
Description: Initial sample projects for the OpenDevHub database.
*/

const projects = [
{
    owner: "mattlang",
    title: "OpenDevHub",
    description: "Website connecting developers looking for collaborators.",
    visibility: "Public",
    status: "Open",
    technologies: [
        "AngularJS",
        "Node.js",
        "MongoDB",
        "html",
        "css",
        "JavaScript"
    ]
},
{
    owner: "elang",
    title: "Unnamed Video Game",
    description: "Super secret video game project",
    visibility: "Private",
    status: "Open",
    technologies: [
        "Unity",
        "C#"
    ]
},
{
    owner: "mattlang",
    title: "Space Telescrope Software",
    description: "Software to help run a new research space telescope.",
    visibility: "Public",
    status: "Closed",
    technologies: [
        "C",
        "Python",
    ]
},
{
    owner: "eyeremy",
    title: "Machine Learning Fluid Dynamics",
    description: "Research related to new machine learning techniques for fluid dynamics.",
    visibility: "Public",
    status: "Open",
    technologies: [
        "C",
        "Machine learning",
        "Python"
    ]
},
{
    owner: "nbaker",
    title: "Personal Project",
    description: "Project of personal nature",
    visibility: "Public",
    status: "Closed",
    technologies: [
        "Python"
    ]
},
];

module.exports = projects;