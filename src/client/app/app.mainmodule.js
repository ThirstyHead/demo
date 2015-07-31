(function() {
    'use strict';

    angular.module('app', ['ngNewRouter',
                           'ngResource',
                           'ui.bootstrap',
                           'app.home',
                           'app.items'])
    .controller('AppController', AppController);

    AppController.$inject = ['$router'];
    function AppController($router) {
        $router.config([
            {path: '/',
             as: 'home',
             components: {'main':'home'}},
            {path: '/items',
             as: 'items',
             components: {'main':'items'}}
        ]);
    }
})();
