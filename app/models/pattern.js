import DS from 'ember-data';

var Pattern = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  family: DS.belongsTo('family'),
  technology: DS.belongsTo('technology'),
  tags: DS.hasMany('tag')
});

Pattern.reopenClass({
  FIXTURES:
    [
      {
        id: 1,
        name: "MobiES",
        description: "lorem ipsum here goes a very happy text",
        family: 1,
        technology: 1,
        tags: 1
      }
  ]
});

export default Pattern;
