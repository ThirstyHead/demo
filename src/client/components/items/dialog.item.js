angular.module('app.items')
       .controller('DialogItemController', DialogItemController);

DialogItemController.$inject = ['$scope', '$modalInstance', 'item'];
function DialogItemController($scope, $modalInstance, item) {
    $scope.item = item;

    $scope.ok = function() {
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}
