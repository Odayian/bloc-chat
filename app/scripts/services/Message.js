/*global angular*/
/*global firebase*/
(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        
    };
    
    Message.send = function(content, roomId, user){
      messages.$add({
  				content: content,
  				username: user,
  				roomId: roomId,
  				sentAt: firebase.database.ServerValue.TIMESTAMP
  			});  
    };

    return Message;
    
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();