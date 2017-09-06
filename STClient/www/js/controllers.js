angular.module('starter.controllers', [])

.controller('STController', function($scope,MapManager,$ionicModal,HTTPManager,Show,userInfo,$state,$rootScope) {

  function loadNews() {
    HTTPManager.get(HOST+SEARCH_All_NEWS).then(function (result) {
      console.log(result);

      if (result.data.data.length){
        result.data.data.forEach(function (info) {
          MapManager.addMarker(info,true,function () {
            $rootScope.$apply(function (scope) {
              scope.isHide = true;
            });
          });
        });
      }

    }).catch(function (error) {
      console.log(error);
    });
  }

  loadNews();

  //$state 可以切换路由的位置 go
  var types = ["跑腿","家政","代练","洗车","宠物"];

  $scope.infoModel = {};

  MapManager.showMap();
  $scope.mapSize = {
    width:innerWidth+"px",
    height:innerHeight+"px"
  };

  $ionicModal.fromTemplateUrl('templates/updateMessage.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.updateMessage = function () {
    //  如果 用户登录了
    //  查询用户是不是 验证过的
    //true:"0" "null" "undefinded" "NAN" 非0 {} []
    //false: 0 "" null undefinded NAN
    userInfo.getInfo("userid")&&userInfo.getInfo("isValidity")==="true"?$scope.modal.show():$state.go("tab.user");
  };

  $scope.back = function () {
    $scope.modal.hide();
  };

  $scope.toUpdate = function () {

    if ($scope.infoModel.time){
      $scope.infoModel.endTime = $scope.infoModel.time.getTime();
    }
    if ($scope.infoModel.typeStr){
      //将字符串 转成 对应的数据类型
      $scope.infoModel.type = types.indexOf($scope.infoModel.typeStr);
    }
    console.log($scope.infoModel.endTime);
    $scope.infoModel.startTime = new Date().getTime();
    $scope.infoModel.userID = 10;
    MapManager.getCurrentLocation().then(function (point) {
      $scope.infoModel.lat = point.lat;
      $scope.infoModel.log = point.lng;
      HTTPManager.post(HOST+ADD_NEWS,$scope.infoModel).then(function (result) {
        console.log(result);
        if (result.data.code === 2000){
          $scope.modal.hide();
        }else {
          Show.showAlertDelay(result.data.message,3);
        }
      }).catch(function (error) {
        //  弹出错误提示窗口
        Show.showAlertDelay(error.message,3);
      });
    });
  };

})

.controller('FriendsController', function($scope) {

})

.controller('RankController', function($scope) {

})

.controller('UserController', function($scope,userInfo) {
//  登陆成功
  var info = {userid:3,phone:"110",username:"xiaoming",isValidity:true};
  userInfo.saveInfo(info);
});
