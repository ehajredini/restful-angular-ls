angular
    .module('app', [
        'ui.router',
        'ui.bootstrap'
    ])

    .config(function($stateProvider, $urlRouterProvider) {
        var users = {
            name: 'users',
            url: '/users',
            controller: 'userController',
            controllerAs: 'userCtrl',
            templateUrl: 'user/users.html'
        };

        var usersAdd = {
            name: 'add',
            url: '/add',
            controller: 'userAddController',
            controllerAs: 'userAddCtrl',
            templateUrl: 'user/users.add.html'
        };

        var usersDetails = {
            name: 'details',
            url: '/details/:id',
            controller: 'userDetailsController',
            controllerAs: 'userDetailsCtrl',
            templateUrl: 'user/users.details.html'
        };

        var usersUpdate = {
            name: 'update',
            url: '/update/:id',
            controller: 'userUpdateController',
            controllerAs: 'userUpdateCtrl',
            templateUrl: 'user/users.update.html'
        };

        $stateProvider.state(users);
        $stateProvider.state(usersAdd);
        $stateProvider.state(usersDetails);
        $stateProvider.state(usersUpdate);
        $urlRouterProvider.otherwise('/users');
    });