/*global angular*/
(function() {

    function UsernameInstanceCtrl($uibModalInstance) {
        
        this.ok = function(username){
            
            console.log("entered username: "+ username);
             if(!username || username.charAt(0)===' '){
                 
                console.log("invalid name");   
            }else{
                
                $uibModalInstance.close(username);
            }
            
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameInstanceCtrl', ['$uibModalInstance', UsernameInstanceCtrl]);
})();
