App = Ember.Application.create();

App.Router.map(function() {
  this.route('patterns', {path: '/patterns/:pattern_id'});
  this.route('search', {path: '/search'})
});


App.IndexRoute = Ember.Route.extend({
    model: function() {
    return interactions;
  }
});

App.PatternsRoute = Ember.Route.extend({
    model: function(params) {
        console.log(interactions.filterBy(id, params.pattern_id));
        return interactions.filterBy(id, params.pattern_id);
    },

    actions: {
        expand: function() {
          this.controller.set('isExpanded', true);
        },

        collapse: function() {
          this.controller.set('isExpanded', false);
        }
    }
});

App.SearchRoute = Ember.Route.extend({
  model: function() {
    return ['green', 'yellow', 'something'];
  }
});