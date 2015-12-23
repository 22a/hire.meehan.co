(function(app) {
  app.AppComponent = ng.core
  .Component({
    selector: 'my-app',
    template: '<h1>Angular 2 is a thing</h1>'
  })
  .Class({
    constructor: function() {}
  });

})(window.app || (window.app = {}));
