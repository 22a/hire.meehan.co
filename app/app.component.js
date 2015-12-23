(function(app) {
  app.AppComponent = ng.core
  .Component({
    selector: 'my-app',
    templateUrl: 'partial/hire.html'
  })
  .Class({
    constructor: function() {}
  });

})(window.app || (window.app = {}));
