/*
Author: Matthew Lang, T00749271
Date: July 21, 2026
Description: Loads the logged in user's information
*/

app.controller("DashboardController", function($scope, $http) {
    // variables
    $scope.user = {};
    $scope.projects = [];
    $scope.summary = {};

    // get stored username after login
    const username = localStorage.getItem("loggedInUser");

    // If noone logged in
    if (!username) {
        window.location.href = "login.html";
        return;
    }

    // gets user info from Node.js
    $http.get("/api/users/dashboard/" + username).then(function(response) {
        if(response.data.success){ // success
            $scope.user = response.data.user;
            $scope.projects = response.data.projects;
            $scope.summary = response.data.summary;
        }
        else {
            $scope.user = {};
        }
    }, function(error) { // error
        console.log(error);
    });

    // Button functions

    // Edit profile
    $scope.editProfile = function() {
        window.location.href = "editProfile.html";
    };

    // Create project
    $scope.createProject = function() {
        window.location.href = "createProject.html";
    };

    // Logout
    $scope.logout = function() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    };
});