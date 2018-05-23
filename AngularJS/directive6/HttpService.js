docs.factory('HttpService', HttpService);

HttpService.$inject = ['$q'];

function HttpService($q) {

    var users = ['aaa', 'bbb', 'ccc'];
    return {
        get: function(url) {
            var deferred = $q.defer(),
                res = {};
            var user = url.split('/').reverse()[0];
            if (users.indexOf(user) != -1) {
                res.isExist = true;
            } else {
                res.isExist = false;
            }
            deferred.resolve(res);
            return deferred.promise;
        }
    }
    // $http({
    //     method: 'GET',
    //     url: './data.json'
    // }).then(function(resp) {
    //     return resp.data;
    // }, function(err) {
    //     console.log(err);
    // })
};