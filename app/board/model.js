import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.belongsTo('user'),
  name: DS.attr('string'),
  length: DS.attr('number'),
  width: DS.attr('number'),

  // pedals: DS.hasMany('pedal'), // not sure about this
});
