angular.module('starter.controllers', [])
  .controller('STController', function($scope,MapManager,$ionicModal) {
    $scope.infoModal = { }

    MapManager.showMap();
    $scope.mapSize = {
      width:innerWidth+'px',
      height:innerHeight+'px'
    };
    $ionicModal.fromTemplateUrl('templates/updateMessage.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.updateMessage = function () {
      $scope.modal.show();
    };
    $scope.back = function () {
      $scope.modal.hide();
    };
    $scope.toUpdate = function () {
      console.log($scope.infoModal);
    }
  })

  .controller('FriendsController', function($scope) {})

  .controller('RankController', function($scope){})

  .controller('UserController', function($scope){})

;
