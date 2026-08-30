/*
Author: Matthew Lang, T00749271
Date: July 21, 2026
Description: Controls the OpenDevHub homepage.
*/

app.controller("IndexController", function($scope, $http) {
    // variables
    $scope.stats = {};
    $scope.projects = [];

    // gets statistics
    $http.get("/api/projects/stats").then(function(response) {
        $scope.stats = response.data;
    });

    // gets public projects
    $http.get("/api/projects/public").then(function(response) {
        $scope.projects = response.data;
    });
});