/*global angular*/
/*global roomName*/
(function() {
    function NewroomCtrl(Room, $uibModalInstance, $log) {
        var $ctrl = this;
        //$ctrl.items = items;
        $ctrl.selected = {
            item: $ctrl.items[0]
        };
        $ctrl.open();
        
        $ctrl.ok = function () {
            Room.add(this.newRoom);
			$uibModalInstance.close();
		};

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
       
        
 	
		
    }
       
    

    angular
        .module('blocChat')
        .controller('NewroomCtrl', ['Room','$uibModalInstance', '$log', NewroomCtrl]);
})();