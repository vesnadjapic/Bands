angular.module('httpData', [])
    .factory('db', function($http) {
        var obj = {};
        obj.data = "";

        $http({
                method: "get",
                url: 'https://danilovesovic.github.io/bands/bands.json'
            })
            .then(function(response) {
                obj.data = response.data;
            })
        return obj;
    })