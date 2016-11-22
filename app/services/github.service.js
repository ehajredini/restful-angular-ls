angular
    .module('app')
    .factory('GitHub', github);

github.$inject = ['$http'];

function github($http) {
    return {
        getPublicRepos: getPublicRepos
    };

    function getPublicRepos(username) {
        return $http.get('https://api.github.com/users/' + username + '/repos')
            .then(getPublicReposComplete)
            .catch(getPublicReposFailed);

        function getPublicReposComplete(response) {
            return response.data;
        }

        function getPublicReposFailed(error) {
            console.log('XHR Failed for getPublicRepos.' + error.data);
        }
    }
}