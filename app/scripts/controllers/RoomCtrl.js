/*global angular*/
(function() {
    function RoomCtrl(Room, Message, $cookies) {
        this.roomList = Room.all;
        this.currentRoom = null;
        this.messages = null;
        this.newMessage = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.createRoom = function(roomName){
            if(!roomName){
                console.log("invalid name");   
            }else{
                Room.addRoom(roomName);
                console.log("Room created as "+roomName);
            }
        };
        
        this.setCurrentRoom = function(room){
          this.currentRoom = room;
          this.messages = Message.getByRoomId(room.$id);
        };

       this.sendMessage = function(){
           console.log("message: "+this.newMessage+"  room: "+this.currentRoom.$id+"  user: "+this.currentUser);
          
            Message.send(this.newMessage, this.currentRoom.$id, this.currentUser);
            this.newMessage=null;
       };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','Message', '$cookies', RoomCtrl]);
})();