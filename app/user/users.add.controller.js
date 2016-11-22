angular
    .module('app')
    .controller('userAddController', userAddController);

userAddController.$inject = ['$state', 'User'];

function userAddController($state, User) {
    var vm = this;

    vm.create = create;

    function create(data) {
        User.create(data).then(function (response) {
            $state.go('users');
        });
    }
}