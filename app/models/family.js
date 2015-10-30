import DS from 'ember-data';

var Family = DS.Model.extend({
  name: DS.attr('string'),
  patterns: DS.hasMany('pattern')
});

export default Family;
