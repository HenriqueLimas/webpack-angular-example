var commentModule = require('./comments.module.js');

module.exports = function() {
  commentModule
    .directive('commentsForm', function() {
      return {
        restrict: 'E',
        template: require('./comments-form.html'),
        scope: {
          onSubmit: '@'
        }
      }
    });
};
