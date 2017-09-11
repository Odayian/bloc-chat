/*global angular*/
(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        var instance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            backdrop: 'static',
            //loads newroom.html template as instanced modal
            templateUrl: '../templates/username.html',
            //instanced modal is now controlled via ModalInstanceCtrl as modal
            controller: 'UsernameInstanceCtrl',
            controllerAs: 'modal',
            //small modal
            size: 'sm'
        });
                
            //modal.result.then(function())  takes returned value from ModalInstanceCtrl when closed
            //and passes to Room.addRoom(returnedVar)
        instance.result.then(function(username){
            $cookies.put('blocChatCurrentUser', username);
        });     
    }else{
        console.log("Current User: "+currentUser);
    }
 }


  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();