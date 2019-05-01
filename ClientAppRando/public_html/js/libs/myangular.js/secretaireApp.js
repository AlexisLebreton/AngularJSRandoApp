var randoApp = angular.module('randoApp');
        
randoApp.controller('secretaireCtrl', ['$scope',
    function ($scope) {
            $scope.testtest = function () {
                alert("allo");
            };
    }
]);

