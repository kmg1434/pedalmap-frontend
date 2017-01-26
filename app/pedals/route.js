import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('pedal');
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
