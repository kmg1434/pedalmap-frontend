import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('pedal', params.pedal_id);
  },

  actions: {
    editPedal (pedal) {

      this.transitionTo('pedal/edit', pedal);
    },

    deletePedal (pedal) {
      pedal.destroyRecord();
    },
  },
});
