import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  length: DS.attr('number'), // should be a decimal
  width: DS.attr('number'), // should be a decimal
  pedals: DS.hasMany('pedal'),
});
