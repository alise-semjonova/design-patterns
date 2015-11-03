App = Ember.Application.create();

App.Router.map(function() {
  this.route('patterns', {path: '/patterns'});
  this.route('search', {path: '/search'})
});


App.IndexRoute = Ember.Route.extend({
    model: function() {
    return interactions;
  }
});

App.PatternsRoute = Ember.Route.extend({
});

App.SearchRoute = Ember.Route.extend({
  model: function() {
    return ['green', 'yellow', 'something'];
  }
});