angular.module('starter.services', [])
  .service('MapManager',function () {
          //初始化百度地图
      this.map = new BMap.Map('map');
         var self=this;
         //显示地图
         this.showMap = function () {
           self.showUserLocation(function (point) {
             self.map.centerAndZoom(point,15);
           })
         };
         //显示用户位置
         this.showUserLocation = function (callback) {
           self.getCurrentLocation().then(function (point) {
             if(callback){
               callback(point);
             }
             self.map.panTo(point);
             var userMarker = new BMap.Marker(point);
             self.map.addOverlay(userMarker);
           }).catch(function (error) {
             console.log(error);
           });
         };
         //定位
         this.getCurrentLocation = function () {
           return new Promise(function (success,fail) {
             var geo = new BMap.Geolocation();
             //getLocationResult->point经纬度对象
             geo.getCurrentPosition(function (result) {
               result.point?success(result.point):fail('定位失败');
             });
           });
         };
  })

  .factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
