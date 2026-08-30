/*
Author: Matthew Lang
Date: July 18, 2026
Description: Initial sample users for the OpenDevHub database.
*/
const users = [
{
    username: "mattlang",
    password: "password123",
    name: "Matthew Lang",
    email: "matt@example.com",
    title: "Computer Science Student",
    skills: [
        "Python", 
        "Java", 
        "C", 
        "C++", 
        "MySQL", 
        "html", 
        "Javascript", 
        "PHP",
        "MongoDB", 
        "Node.js"
    ],
    bio: "Interested on software engineering, machine learning, game development, and quantum computing."
}, 
{
    username: "jdoe",
    password: "example123",
    name: "John Doe",
    email: "john@example.com",
    title: "Software Developer",
    skills: [
        "Python",
        "Java",
        "C",
        "Node.js",
        "html",
        "css",
        "JavaScript"
    ],
    bio: "Interested in web applications."
},
{
    username: "elang",
    password: "examplepassword123",
    name: "Emily Lang",
    email: "elang@example.com",
    title: "Game developer",
    skills: [
        "Unity", 
        "C#",
        "Blender"
    ],
    bio: "Passionate about indie game development."
}, 
{
    username: "eyeremy",
    password: "examplepass123",
    name: "Evan Yeremy",
    email: "eyeremy@example.com",
    title: "Machine Learning Specialist",
    skills: [
        "Python",
        "Machine Learning"
    ],
    bio: "Interested in finding and deploying machine learning solutions"
}, 
{
    username: "nbaker",
    password: "mypassword123",
    name: "Noah Baker",
    email: "nbaker@example.com",
    title: "Quantum Technology Researcher",
    skills: [
        "Python",
        "Quantum computing algorithms and languages"
    ],
    bio: "Quantum Technology Student"
}
];

module.exports = users;