angular
    .module('app')
    .controller('userDetailsController', userDetailsController);

userDetailsController.$inject = ['$stateParams', 'User', 'GitHub'];

function userDetailsController($stateParams, User, GitHub) {
    var vm = this;

    activate();

    function activate() {
        User.getById($stateParams.id).then(function (response) {
            vm.user = response;

            GitHub.getPublicRepos(vm.user.gitHubId).then(function (response) {
                console.log(response);
                vm.github = response;
            });
        });
    }
}