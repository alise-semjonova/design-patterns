import DS from 'ember-data';

var Tag = DS.Model.extend({
  name: DS.attr('String'),
  patterns: DS.hasMany('pattern')
});

Tag.reopenClass({
  FIXTURES:
    [
      {
        id: 1,
        name: "Example tag",
        patterns: 1
      }
      ]
});

export default Tag;


