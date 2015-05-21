/**
 * Created by Andrea on 20/05/2015.
 */

angular.module('usuariosApp',[])
.controller('UsuariosController',function(){
  var usuariosCtrl = this;
    usuariosCtrl.usuario = '';
    usuariosCtrl.password = '';
    usuariosCtrl.guardarUsuario = function() {
      //Enviar datos al servicio REST insertando usuario
      usuariosCtrl.usuario = "Guardo";
      usuariosCtrl.password = "Guardo";
    };
  })
