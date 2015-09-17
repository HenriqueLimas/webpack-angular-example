var commentModule = require('./comments.module.js');

require('./comments-list.directive.js')();
require('./comments-form.directive.js')();

module.exports = function() {
  commentModule
    .directive('commentsBox', function() {
      return {
        restrict: 'E',
        template: require('./comments-box.html'),
        scope: {},
        controller: function($scope) {
          $scope.comments = [{
            author: 'Henrique Limas',
            text: 'My first comment'
          }];

          $scope.onSubmit = function() {
            if (!$scope.author || !$scope.text) return;

            $scope.comments.push({
              author: $scope.author,
              text: $scope.text
            });

            $scope.author = '';
            $scope.text = '';
          };
        }
      }
    });
};
