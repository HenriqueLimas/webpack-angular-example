var commentModule = require('./comments.module.js');

require('./comments.directive.js')();

module.exports = function() {
  commentModule
    .directive('commentsList', function() {
      return {
        restrict: 'E',
        template: require('./comments-list.html'),
        scope: {
          comments: '='
        }
      };
    });
};
