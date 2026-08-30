/*
Author: Matthew Lang, T00749271
Date: July 23, 2026
Description: Updates existing users profile.
*/

app.controller("EditProfileController", function($scope, $http) {
    // variables
    $scope.user = {};
    $scope.skills = "";
    $scope.status = "";

    const username = localStorage.getItem("loggedInUser"); // get logged in user info

    if (!username) { // (safety)
        window.location.href = "login.html";
    }

    // gets user data and skills
    $http.get("/api/users/dashboard/" + username).then(function(response) {
        $scope.user = response.data.user;
        $scope.skills = $scope.user.skills.join(", ");
    });

    // splits skills list into array elements (update button)
    $scope.saveProfile = function() {
        $scope.user.skills = $scope.skills.split(",").map(skill => skill.trim()).filter(skill => skill.length > 0);

        // puts edit profile data to the update user route
        $http({
            method: "PUT",
            url: "/api/users/update/" + username,
            data: $scope.user
        }).then(function(response) { // success
            if (response.data.success) {
                window.location.href = "dashboard.html";
            }
            else {
                $scope.status = response.data.message;
            }
        }, function(error) { // error
            console.log(error);
            $scope.status = "Unable to update profile.";
        });
    };

    // cancel button
    $scope.cancel = function() {
        window.location.href = "dashboard.html";
    };
});