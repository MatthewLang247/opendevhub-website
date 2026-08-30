/*
Author: Matthew Lang, T00749271
Date: July 20, 2026
Description: Controls the login page
*/

app.controller("LoginController", function($scope, $http) {
    // variables for ng-model
    $scope.username = "";
    $scope.password = "";
    $scope.status = "";

    // login function
    $scope.login = function() {
        // if login username matches "new" go to register page
        if ($scope.username.toLowerCase() == "new") {
            window.location.href = "register.html";
            return;
        }
        
        // posts login credentials to login route
        $http({
            method: "POST", url: "/api/users/login", data: {
                username: $scope.username, password: $scope.password
            }
        }).then(function success(response) { // success
            if (response.data.success) {
                console.log(response.data.user);

                // stores successful user login
                localStorage.setItem("loggedInUser", response.data.user.username);

                $scope.status = "Login successful.";

                window.location.href = "dashboard.html"; // go to user's dashboard
            }
            else {
                $scope.status = response.data.message;
            }
        }, function error(response) { // error
            console.log(response);

            $scope.status = "Unable to connect to the server.";
        });
    };

    // create account button
    $scope.register = function() {
        window.location.href = "register.html";
    };
});