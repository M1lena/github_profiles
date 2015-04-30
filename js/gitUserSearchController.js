githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('https://api.github.com/search/users?access_token=d6cc97081f07efeddade53ebeca259cfae57d754');

  // self.searchResult = {
  //   "items": [
  //     {
  //       "login": "tansaku",
  //       "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
  //       "html_url": "https://github.com/tansaku"
  //     },
  //     {
  //       "login": "stephenlloyd",
  //       "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
  //       "html_url": "https://github.com/stephenlloyd"
  //     }
  //   ]
  // };

  self.doSearch = function() {
    if(self.searchTerm !== '') {
      self.searchResult = searchResource.get(
        { q: self.searchTerm }
      );
    };
  };
}]);
