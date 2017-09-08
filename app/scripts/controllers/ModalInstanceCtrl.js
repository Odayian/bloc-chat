/*global angular*/
(function() {
    //$uibModalInstance requried to hand an instance of a modal.
    function ModalInstanceCtrl($uibModalInstance) {
        //checks for undefined room names. If a valid name, returns 'roomName' toinstance.result.then... to complete the function
        // on 'create' button press
        this.ok = function(roomName){
            
            console.log("entered roomname: "+ roomName);
             if(!roomName){
                 //logs invalid name if roomName is undefined
                console.log("invalid name");   
            }else{
                //closes instance and returns roomName
                $uibModalInstance.close(roomName);
            }
            
        };
        //closes instance w/ log 
        this.cancel = function(){
            $uibModalInstance.dismiss("user cancel");
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
