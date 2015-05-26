
var labsisApp = angular.module('labsisApp', ['restangular','ngRoute','ngDialog']);

labsisApp.config(['$routeProvider','RestangularProvider',
  function($routeProvider,RestangularProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'templates/users.html',
        controller: 'UsersCrtl'
      }).
      when('/labs', {
        templateUrl: 'templates/adminlaboratorios.html',
        controller: 'LaboratoriosController'
      })
    RestangularProvider.setBaseUrl('http://localhost:2700/');
  }]);

labsisApp.factory("UserService", function() {
  var users = [];
  return {
    all: function() {
      return users;
    }
  };
});

//USER CONTROLLER
labsisApp.controller('UsersCrtl',function($scope,$http,Restangular,ngDialog,UserService) {
  $scope.users = [];
  $scope.onLine = true;
  $scope.openAddUserModal = function() {
    var dialog = ngDialog.open({
      template:'templates/modal.html',
      className: 'ngdialog-theme-plain',
      controller: 'AddUserCtrl'
    })
  }
  UserService.users =   Restangular.all("users").getList().$object;
  $scope.users = UserService.users;
});

//ADD USER CONTROLLER
labsisApp.controller('AddUserCtrl', function($scope,$http,Restangular,UserService,ngDialog) {
  $scope.username = '';
  $scope.password = '';
  $scope.name = '';
  $scope.save = function () {
    var user = {
      name: $scope.name,
      username: $scope.username,
      password: $scope.password
    };
    Restangular.all('user').post(user).then(function (newUser) {
      UserService.users.push(newUser);
      ngDialog.close();
    });
  }
});

labsisApp.controller('LaboratoriosController', function($scope,$http) {


  $scope.message = 'This is Show orders screen jodete';
  /**
  $http.get('http://localhost:2700/users')
    .success(function(data){
      alert(data)
    })
    .error(function(data, status, headers, config) {
      alert(data)
    });
**/
});
