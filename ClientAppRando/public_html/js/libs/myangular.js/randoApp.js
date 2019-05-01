var randoApp = angular.module("randoApp", ["ngRoute"]);

randoApp.config(function($routeProvider) {
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





