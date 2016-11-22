angular
    .module('app')
    .factory('User', user);

user.$inject = ['$q'];

function user($q) {
    return {
        getAll: function() {

            var deferred = $q.defer();

            if(localStorage.getItem("users") === null) {
                deferred.resolve([]);

            } else {
                deferred.resolve(JSON.parse(localStorage.getItem("users")));
            }

            return deferred.promise;
        },

        getById: function (id) {
            var deferred = $q.defer();

            var users = JSON.parse(localStorage.getItem('users'));
            for (i=0; i<users.length; i++) {
                if (users[i].id == id) {
                    deferred.resolve(users[i]);
                    break;
                }
            }

            return deferred.promise;
        },

        create: function(data) {

            var deferred = $q.defer();

            var users = [];
            if(localStorage.getItem("users") === null) {
                users.push(data);

            } else {
                users = JSON.parse(localStorage.getItem('users'));
                users.push(data)
            }

            var length = users.length;
            data.id = length++;

            localStorage.setItem('users', JSON.stringify(users));

            deferred.resolve(JSON.parse(localStorage.getItem("users")));

            return deferred.promise;

        },


        update: function(id, data) {
            var deferred = $q.defer();

            var users = JSON.parse(localStorage.getItem('users'));
            for (i=0; i<users.length; i++) {
                if (users[i].id == id) {
                    users[i].firstName = data.firstName;
                    users[i].lastName = data.lastName;
                    users[i].email  = data.email;
                    users[i].gitHubId = data.gitHubId;
                }
            }

            localStorage.setItem('users', JSON.stringify(users));

            deferred.resolve(JSON.parse(localStorage.getItem("users")));

            return deferred.promise;
        },

        delete: function(id) {

            var deferred = $q.defer();

            var users = JSON.parse(localStorage.getItem('users'));
            for (i=0; i<users.length; i++) {
                if (users[i].id == id) {
                    users.splice(i,1);
                }
            }

            localStorage.setItem('users', JSON.stringify(users));

            deferred.resolve(JSON.parse(localStorage.getItem("users")));

            return deferred.promise;
        }
    };
}