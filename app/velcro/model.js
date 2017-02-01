import DS from 'ember-data';

export default DS.Model.extend({
  board_id: DS.attr('number'),
  pedal_id: DS.attr('number'),
});
