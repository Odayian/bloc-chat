/*global angular*/
(function() {
    function RoomCtrl(Room, Message) {
        this.roomList = Room.all;
        this.currentRoom = null;
        this.messages = null;
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
        //   console.log("You are now entering room.$name, room.$id : "+room.$value+", "+room.$id);
        //   console.log("this.currentRoom.$id: "+this.currentRoom.$id);
        };
        
        // this.getCurrentRoom = function(){
        //     console.log("this.currentRoom.$value "+this.currentRoom.$value);
        //     console.log("this.currentRoom.$id: "+this.currentRoom.$id);
        // };
       
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','Message', RoomCtrl]);
})();