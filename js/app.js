angular.module('myApp',["ui.router", "myApp.factoryCategoriesService"])

.constant('FIREBASE_URI', 'https://projekt2-pokrywka.firebaseio.com/')
    
.controller('MainCtrl', function($location, $scope,  CategoriesService){
   
 $scope.categories = CategoriesService.getCategories();
 $scope.addCategory = function(category){
            CategoriesService.addCategory(category);
        }
 })