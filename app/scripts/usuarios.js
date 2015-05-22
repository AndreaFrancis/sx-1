/**
 * Created by Andrea on 20/05/2015.
 */

var usuariosapp = angular.module('usuariosApp',[]);

usuariosapp.controller('UsuariosController',function($http){

  //Configurando---------

  //---------------------

  var usuariosCtrl = this;
    usuariosCtrl.usuario = '';
    usuariosCtrl.password = '';
    usuariosCtrl.nombre = '';
    usuariosCtrl.guardarUsuario = function() {
      var user = {
        name: usuariosCtrl.nombre,
        username: usuariosCtrl.usuario,
        password: usuariosCtrl.password
      };
      $http.post('http://localhost:2700/user', user).
        success(function(data, status, headers, config) {
          alert('El usuario se regitro');
        }).
        error(function(data, status, headers, config) {
          alert('Error ');
        });

    };

  $http.get('http://localhost:2700/users').success(function(data){
    usuariosCtrl.usuarios = data;
  });
  });

