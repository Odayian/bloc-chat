/*global angular*/
(function() {
    function RoomCtrl(Room, $scope) {
        this.roomList = Room.all;
        
        this.createRoom = function(roomName){
            if(!roomName){
                console.log("invalid name");   
            }else{
                Room.addRoom(roomName);
                console.log("Room created as "+roomName);
            }
        };
       
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room',RoomCtrl]);
})();