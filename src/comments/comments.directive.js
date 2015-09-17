var commentModule = require('./comments.module.js');

module.exports = function() {
  commentModule
    .directive('comment', function() {
      return {
        restrict: 'E',
        scope: {
          author: '=',
          text: '='
        },
        template: require('./comments.html')
      };
    });
};
