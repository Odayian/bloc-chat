/*global angular*/
(function() {
    function RoomCtrl(Room) {
        this.roomList = Room.all;
       
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room',RoomCtrl]);
})();