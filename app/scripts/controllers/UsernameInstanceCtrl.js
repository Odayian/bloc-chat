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
        //closes instance w/ log 
        // this.cancel = function(){
        //     $uibModalInstance.dismiss("user cancel");
        // };
    }

    angular
        .module('blocChat')
        .controller('UsernameInstanceCtrl', ['$uibModalInstance', UsernameInstanceCtrl]);
})();
