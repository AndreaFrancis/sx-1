/**
 * Created by Andrea on 20/05/2015.
 */

var labsapp = angular.module('labsApp',[]);

labsapp.controller('LabsCtrl',function(){

  var labsCtrl = this;
  labsCtrl.name = '';
  labsCtrl.saveLab = function() {
    var lab = {
      name: labsCtrl.name
    };
    $http.post('http://localhost:2700/laboratory', lab).
      success(function(data, status, headers, config) {
        alert('El laboratorio se regitro');
      }).
      error(function(data, status, headers, config) {
        alert('Error ');
      });

  };
});

