(function () {
    'use strict';

    angular
        .module('app.items')
        .service('ItemsService', ItemsService);

    ItemsService.$inject = ['$resource'];
    function ItemsService($resource) {
        return $resource('items/:id',
        // return $resource('mock/items/:id',
                         {id: '@_id'},
                         {update: {method: 'PUT'}});
    }

})();
