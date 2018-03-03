// angular.module('meanhotel').directive('hotelRating', hotelRating);

// function hotelRating() {
//     return {
//         restrict: 'E',
//         template: '<span ng-repeat="star in vm.stars track by $index" class="fas fa-star">{{ star }}</span>',
//         bindToController: true,
//         controller: 'HotelController',
//         controllerAs: 'vm',
//         scope: {
//             stars: '@'
//         }
//     };
// }

angular.module('meanhotel').component('hotelRating', {
   bindings: {
       stars: '='
   } ,
   template: '<span ng-repeat="star in vm.stars track by $index" class="fas fas-star">{{ star }}</span>',
   contorller: 'HotelController',
   controllerAs: 'vm'
});