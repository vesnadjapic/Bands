angular.module('myApp', ['httpData'])

    .controller('FirstCtrl', function($scope, db) {

        $scope.data = db;
        console.log(db);
        $scope.selected = 0;

        $scope.clickModal = function(index) {
            console.log($scope.selected);
            $scope.selected = index;
        }
    })
    .filter('limitTocustom', function() {
        return function(input, limit) {
            if (input) {
                if (limit > input.length) {
                    return input.slice(0, limit);
                } else {
                    return input.slice(0, limit) + '...';
                }
            }
        };
    });
