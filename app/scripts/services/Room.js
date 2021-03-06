/*global angular*/
/*global firebase*/
(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    
    Room.all = rooms;
    
    Room.addRoom = function(name){
      rooms.$add(name).then(function(ref) {
        var id = ref.key;
        console.log("added record with id "+ id);
        Room.currentRoomUid = id;
        console.log("currentUid= "+Room.currentRoomUid);
        rooms.$indexFor(id);
       
      });
    };
    
    return Room;
    
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();