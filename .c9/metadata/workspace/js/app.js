{"filter":false,"title":"app.js","tooltip":"/js/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":30},"action":"insert","lines":["$scope.currentCategory = null;"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":30},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":18,"column":9},"action":"insert","lines":["function setCurrentCategory(category) {","            $scope.currentCategory = category;","            $scope.currentBookmark = null;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":30},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":9},"end":{"row":20,"column":0},"action":"insert","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":8},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":23,"column":9},"action":"insert","lines":["function isCurrentCategory(category) {","            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":9},"end":{"row":24,"column":0},"action":"insert","lines":["",""]},{"start":{"row":24,"column":0},"end":{"row":24,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":8},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":4},"end":{"row":25,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":47},"action":"insert","lines":["$scope.setCurrentCategory = setCurrentCategory;"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":47},"end":{"row":26,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":45},"action":"insert","lines":["$scope.isCurrentCategory = isCurrentCategory;"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":71},"action":"remove","lines":["angular.module('myApp',[\"ui.router\", \"myApp.factoryCategoriesService\"])"]},{"start":{"row":0,"column":0},"end":{"row":9,"column":6},"action":"insert","lines":["angular.module('myApp',[\"ui.router\", \"myApp.factoryBookmarksService\",\"myApp.factoryCategoriesService\"])","","   .config(function($stateProvider, $urlRouterProvider) {","          $stateProvider","            .state('bookmark', {","                url: '/bookmark',","                templateUrl: 'templates/bookmark.html'","            })","          $urlRouterProvider.otherwise('/bookmark');","    })"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":70},"end":{"row":13,"column":88},"action":"insert","lines":[", BookmarksService"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":55},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":17,"column":0},"action":"insert","lines":["",""]},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":52},"action":"insert","lines":["$scope.bookmarks = BookmarksService.getBookmarks();"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":9},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":8},"end":{"row":22,"column":0},"action":"insert","lines":["",""]},{"start":{"row":22,"column":0},"end":{"row":22,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":4},"end":{"row":22,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":0},"end":{"row":24,"column":9},"action":"insert","lines":["$scope.addBookmark = function(bookmark){","            BookmarksService.addBookmark(bookmark);","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":9},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":0},"end":{"row":42,"column":9},"action":"insert","lines":["function shouldShowCreating() {","            return $scope.isCreating;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":9},"end":{"row":42,"column":16},"action":"remove","lines":["       "]},{"start":{"row":42,"column":9},"end":{"row":43,"column":0},"action":"insert","lines":["",""]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":45},"end":{"row":46,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":0},"end":{"row":46,"column":47},"action":"insert","lines":["$scope.shouldShowCreating = shouldShowCreating;"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":47},"end":{"row":47,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":30},"end":{"row":31,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":0},"end":{"row":31,"column":30},"action":"insert","lines":["$scope.currentBookmark = null;"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":30},"end":{"row":32,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":33,"column":33},"action":"insert","lines":["$scope.isCreating = true;","        $scope.isEditing = false;"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":4},"end":{"row":33,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":9},"end":{"row":43,"column":0},"action":"insert","lines":["",""]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":4},"end":{"row":43,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":49,"column":9},"action":"insert","lines":["function isCurrentBookmark(bookmark) {","            return $scope.currentBookmark !== null && bookmark.id === $scope.currentBookmark.id;","        }","        ","        function setCurrentBookmark(bookmark) {","            $scope.currentBookmark = bookmark;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":9},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":50,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":9},"end":{"row":43,"column":0},"action":"insert","lines":["",""]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":47},"end":{"row":57,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":0},"end":{"row":57,"column":47},"action":"insert","lines":["$scope.setCurrentBookmark = setCurrentBookmark;"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":47},"end":{"row":58,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":47},"end":{"row":58,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":45},"end":{"row":59,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":0},"end":{"row":59,"column":45},"action":"insert","lines":["$scope.isCurrentBookmark = isCurrentBookmark;"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":0},"end":{"row":61,"column":47},"action":"insert","lines":["$scope.shouldShowBookmark = shouldShowBookmark;"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":47},"end":{"row":62,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":9},"end":{"row":55,"column":0},"action":"insert","lines":["",""]},{"start":{"row":55,"column":0},"end":{"row":55,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":4},"end":{"row":55,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":57,"column":9},"action":"insert","lines":["function shouldShowBookmark(){","            return $scope.currentBookmark !== null;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":74},"end":{"row":28,"column":0},"action":"insert","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":12},"end":{"row":28,"column":80},"action":"insert","lines":["BookmarksService.removeBookmarksForCategory($scope.currentCategory);"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":9},"end":{"row":30,"column":0},"action":"insert","lines":["",""]},{"start":{"row":30,"column":0},"end":{"row":30,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":4},"end":{"row":30,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":33,"column":9},"action":"insert","lines":["$scope.removeBookmark = function(){","            BookmarksService.removeBookmark($scope.currentBookmark.id);","            $scope.startCreating();","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":9},"end":{"row":34,"column":0},"action":"insert","lines":["",""]},{"start":{"row":34,"column":0},"end":{"row":34,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":39,"column":9},"action":"insert","lines":[" function updateBookmark(bookmark) {","            BookmarksService.updateBookmark(bookmark);","            $scope.editedBookmark = null;","            $scope.isEditing = false;","            $scope.isCreating = true;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":9},"end":{"row":66,"column":0},"action":"insert","lines":["",""]},{"start":{"row":66,"column":0},"end":{"row":66,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":4},"end":{"row":66,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":66,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":68,"column":9},"action":"insert","lines":["function shouldShowEditing() {","            return $scope.isEditing;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":78,"column":47},"end":{"row":79,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":0},"end":{"row":79,"column":45},"action":"insert","lines":["$scope.shouldShowEditing = shouldShowEditing;"]}]}],[{"group":"doc","deltas":[{"start":{"row":71,"column":9},"end":{"row":72,"column":0},"action":"insert","lines":["",""]},{"start":{"row":72,"column":0},"end":{"row":72,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":4},"end":{"row":72,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":0},"end":{"row":74,"column":9},"action":"insert","lines":["function setEditedBookmark() {","            $scope.editedBookmark = angular.copy($scope.currentBookmark);","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":9},"end":{"row":75,"column":0},"action":"insert","lines":["",""]},{"start":{"row":75,"column":0},"end":{"row":75,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":4},"end":{"row":75,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":75,"column":0},"end":{"row":78,"column":9},"action":"insert","lines":["function startEditing() {","            $scope.isCreating = false;","            $scope.isEditing = true;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":44},"end":{"row":86,"column":45},"action":"remove","lines":[";"]},{"start":{"row":86,"column":44},"end":{"row":87,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":87,"column":0},"end":{"row":87,"column":45},"action":"insert","lines":["$scope.setEditedBookmark = setEditedBookmark;"]}]}],[{"group":"doc","deltas":[{"start":{"row":87,"column":45},"end":{"row":88,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":0},"end":{"row":88,"column":35},"action":"insert","lines":["$scope.startEditing = startEditing;"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":29},"action":"insert","lines":["$scope.editedBookmark = null;"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":29},"end":{"row":46,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":56,"column":9},"action":"insert","lines":["function startCreating() {","            $scope.isCreating = true;","            $scope.isEditing = false;","        }","        ","        function startEditing() {","            $scope.isCreating = false;","            $scope.isEditing = true;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":9},"end":{"row":57,"column":0},"action":"insert","lines":["",""]},{"start":{"row":57,"column":0},"end":{"row":57,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":4},"end":{"row":53,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":35},"end":{"row":101,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":0},"end":{"row":102,"column":43},"action":"insert","lines":["$scope.startCreating = startCreating;","        $scope.startEditing = startEditing;"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":4},"end":{"row":102,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":0},"end":{"row":102,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":0},"end":{"row":100,"column":35},"action":"remove","lines":["$scope.startEditing = startEditing;"]}]}],[{"group":"doc","deltas":[{"start":{"row":87,"column":0},"end":{"row":90,"column":9},"action":"remove","lines":["function startEditing() {","            $scope.isCreating = false;","            $scope.isEditing = true;","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":9},"end":{"row":87,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":0},"end":{"row":96,"column":39},"action":"insert","lines":["$scope.updateBookmark = updateBookmark;"]}]}]]},"ace":{"folds":[],"scrolltop":964,"scrollleft":0,"selection":{"start":{"row":96,"column":39},"end":{"row":96,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":111,"mode":"ace/mode/javascript"}},"timestamp":1424889898747,"hash":"00623a2d036ac03954853d54d846d2db991bfe9b"}