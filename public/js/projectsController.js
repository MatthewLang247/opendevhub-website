/*
Author: Matthew Lang
Date: July 22 2026
Description: Controls the public projects page of OpenDevHub.
*/

app.controller("ProjectsController", function($scope, $http) {
    $scope.projects = [];

    // public projects list from route
    $http.get("/api/projects/public").then(function(response) {
        $scope.projects = response.data;
    });
});