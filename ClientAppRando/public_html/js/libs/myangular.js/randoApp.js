var app = angular.module("randoApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/membre", {
        templateUrl : "membre.html"
    })
    .when("/secretaire", {
        templateUrl : "secretaire.html"
    })
    .when("/teamleader", {
        templateUrl : "teamleader.html"
    })
    .when("/president", {
        templateUrl : "president.html"
    });
});

module.controller("navController", function navController($scope) {
    $scope.alerttest = function () {
        alert("iyoiy");
    };
});


