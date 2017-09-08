/*global angular*/
(function() {
    function ModalCtrl($uibModal, Room) {
        
       
        this.openModal = function(){
            //modal is created as an instanced object as "instance"
            var instance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                //loads newroom.html template as instanced modal
                templateUrl: '../templates/newroom.html',
                //instanced modal is now controlled via ModalInstanceCtrl as modal
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal',
                //small modal
                size: 'sm'
            });
            
            //modal.result.then(function())  takes returned value from ModalInstanceCtrl when closed
            //and passes to Room.addRoom(returnedVar)
            instance.result.then(function(roomName){
                Room.addRoom(roomName);
                });
        };
        
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal','Room', ModalCtrl]);
})();
