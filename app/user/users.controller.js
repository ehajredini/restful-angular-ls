angular
    .module('app')
    .controller('userController', userController);

userController.$inject = ['User'];

function userController(User) {
    var vm = this;

    vm.remove = remove;


    activate();

    function activate() {
        User.getAll().then(function (response) {
            vm.users = response;
        });
    }

    function remove(id) {
        User.delete(id).then(function (response) {
            vm.users = response;
        });
    }
}