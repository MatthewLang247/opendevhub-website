/*
Author: Matthew Lang, T00749271
Date: July 22, 2026
Description: Creates a new project.
*/

app.controller("CreateProjectController", function($scope, $http) {
    $scope.project = {};
    $scope.technologies = "";
    $scope.status = "";

    // cancel button on create project page
    $scope.cancel = function() {
        window.location.href = "dashboard.html";
    };

    $scope.createProject = function() {
        const username = localStorage.getItem("loggedInUser");

        // returns to login if user is not logged in (safety)
        if (!username) {
            window.location.href = "login.html";
            return;
        }

        // sets current username as project owner
        $scope.project.owner = username;
        // splits technology list into array elements
        $scope.project.technologies = $scope.technologies.split(",").map(item=>item.trim()).filter(item=>item.length > 0);

        // input validation
        if (!$scope.project.title || !$scope.project.description || !$scope.project.status || !$scope.project.visibility) {
            $scope.status = "Please complete all required fields."
            return;
        }

        // posts data to project creation route
        $http({
            method: "POST",
            url: "/api/projects/create",
            data: $scope.project
        }).then(function(response) { // success
            if (response.data.success) {
                window.location.href = "dashboard.html";
            }
            else {
                $scope.status = response.data.message;
            }
        }, function(error) { // error
            console.log(error);
            $scope.status = "Unable to connect to the server.";
        });
    };
});