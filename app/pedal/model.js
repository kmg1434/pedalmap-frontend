import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  length: DS.attr('number'),
  width: DS.attr('number'),
  link: DS.attr('string'),
  info: DS.attr('string'),

  // boards: DS.hasMany('board'), // not sure about this
});
