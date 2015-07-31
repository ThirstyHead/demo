angular.module('app.items', [])
       .controller('ItemsController', ItemsController);

ItemsController.$inject = ['$modal', '$window', 'ItemsService'];
function ItemsController($modal, $window, Item) {
    var my = this;
    my.title = 'Items';
    getList();

    my.edit = function(id) {
        Item.get({id:id}, function(res) {
            openDialog(res, 'edit');
        }, function(errorResponse) {
            console.log(errorResponse);
        });
    };

    my.create = function() {
        openDialog(new Item({}), 'create');
    };

    my.delete = function(id) {
        Item.remove({id:id}, function() {
            getList();
        });
    };

    function getList() {
        Item.query(function(res) {
            my.list = res;
        }, function(errorResponse) {
            console.log(errorResponse);
        });
    }

    function openDialog(obj, mode) {
        var modalInstance = $modal.open({
            templateUrl: '/components/items/dialog.item.html',
            controller: 'DialogItemController',
            animation: false,
            size: 'med',
            resolve: {
                item: function () {
                    return obj;
                }
            }
        });

        modalInstance.result.then(function(modalResults) {
            switch (mode) {
                case 'edit':
                    obj.$update(function(res) {
                        getList();
                    }, function(errorResponse) {
                        console.log(errorResponse);
                    });
                    break;

                case 'create':
                    obj.$save(function(res) {
                        getList();
                    }, function(errorResponse) {
                        console.log(errorResponse);
                    });
                    break;
            }
        });
    }
}
