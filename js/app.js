App = Ember.Application.create();

App.Router.map(function() {
    this.route('interaction', {path: "/interaction/:pattern_id"}, function () {
        this.route('edit');
    });
    this.route('new-interaction', {path:"/new"}, function() {
        this.route('description');
        this.route('summary');
    });
});

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://blinding-torch-541.firebaseio.com/')
});

App.Interaction = DS.Model.extend({
    name: DS.attr('string'),
    summary: DS.attr('string'),
    expanded_data: DS.attr('string'),
    reference: DS.attr('string'),
    media: DS.hasMany('medium', {async: true})
});

App.Medium = DS.Model.extend({
    name: DS.attr('string'),
    file: DS.attr('string'),
    interaction: DS.belongsTo('interaction', {async: true})
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        var interactions = this.store.findAll('interaction');
        return interactions;
  }
});

App.InteractionRoute = Ember.Route.extend({
    model: function(params) {
        var interaction = this.store.findRecord('interaction', params.pattern_id);
        return interaction;
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


// This does not work at the moment, I need to check why //
App.InteractionEditRoute = Ember.Route.extend({
    model: function(params) {
        var interaction = this.store.findRecord('interaction', params.pattern_id);
        return interaction;
    }
});

App.NewInteractionController = Ember.Controller.extend({
    actions: {
        save: function() {
            var name = this.get('name');
            var summary = this.get('summary');
            var expanded_data = this.get('expanded_data');
            var reference = this.get('reference');

            var interaction = this.store.createRecord('interaction', {
                name: name,
                summary: summary,
                expanded_data: expanded_data,
                reference: reference
            });

            interaction.save();

            console.log(interaction);
        }
    }
});