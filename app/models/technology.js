import DS from 'ember-data';

var Technology = DS.Model.extend({
  name: DS.attr('String'),
  patterns: DS.hasMany('pattern')
});

Technology.reopenClass({
  FIXTURES:
    [
      {
        id: 1,
        name: 'haptic',
        patterns: 1
      }
    ]
});

export default Technology;
