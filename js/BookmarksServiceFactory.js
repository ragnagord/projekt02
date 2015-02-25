angular.module("myApp.factoryBookmarksService", ["firebase"])


.factory('BookmarksService',function($firebase,FIREBASE_URI){
    var ref = new Firebase(FIREBASE_URI+"/bookmarks");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    bookmarks.$
    var getBookmarks = function(){
        return bookmarks;
    };
    
    var addBookmark = function(bookmark){
        bookmark.id = bookmarks.length;
        bookmarks.$add(bookmark); 
    };
    
     var removeBookmark = function(index){
        for (var i = 0, len = bookmarks.length; i < len; i++) {
          if (bookmarks[i].id === index) {
                bookmarks.$remove(i);
          }
        } 
    };
    
   var removeBookmarksForCategory = function(category){
        for (var i = 0, len = bookmarks.length; i < len; i++) {
          if (bookmarks[i].categoryname === category.name) {
                bookmarks.$remove(i);
          }
        }
    };
    
return{
        getBookmarks: getBookmarks,
        addBookmark: addBookmark,
        removeBookmark: removeBookmark,
        removeBookmarksForCategory: removeBookmarksForCategory
    }
    })