import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('family', function () {
    this.route('index');
  });
  this.route('patterns', {path: '/'});
});

export default Router;
