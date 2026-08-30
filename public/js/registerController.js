/*
Author: Matthew Lang, T00749271
Date: July 22, 2026
Description: Controls the register page
*/

app.controller("RegisterController", function($scope, $http) {
    // new user variable
    $scope.user = {
        name: "",
        email: "",
        username: "",
        password: ""
    };

    $scope.status = "";

    // registering new user
    $scope.register = function() {
        // validation
        if (!$scope.user.name || !$scope.user.email || !$scope.user.username || !$scope.user.password) {
            $scope.status = "Please complete every field.";
            return;
        }

        // posts new user data to register route
        $http({
            method: "POST",
            url: "/api/users/register",
            data: $scope.user
        }).then(function(response) { // success
            if (response.data.success) {
                $scope.status = "Account created successfully.";

                setTimeout(function() {
                    window.location.href="login.html";
                }, 1000);
            }
            else { // error
                $scope.status = response.data.message;
            }
        });
    };

    // login button
    $scope.goToLogin = function() {
        window.location.href = "login.html";
    };
});