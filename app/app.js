var app = angular.module("learn-angular", []);

app.controller("myController", function ($scope) {
    $scope.test = "Hello World";
})

app.directive("elementDirective", function ($log) {
    return {
        restrict: "E",
        template: "<p>A template</p>",
        link: function (scope, element, attrs) {
            $log.log(element.html());
        }
    };
})