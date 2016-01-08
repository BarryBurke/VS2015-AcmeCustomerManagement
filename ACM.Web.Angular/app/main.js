(function () {
    'use strict';

    angular
        .module('app1')
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.food = 'pizza';
    }

})();