angular
    .module('app')
    .controller('userUpdateController', userUpdateController);

userUpdateController.$inject = ['$state', '$stateParams','User'];

function userUpdateController($state, $stateParams, User) {
    var vm = this;

    vm.update = update;

    activate();

    function activate() {
        User.getById($stateParams.id).then(function (response) {
            vm.user = response;
        });
    }

    function update(data) {
        User.update($stateParams.id, data).then(function (response) {
            vm.user= response;
            $state.go('users');
        });
    }
}