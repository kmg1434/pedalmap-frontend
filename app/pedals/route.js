import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('pedal');
  },

  actions: {
    editBoard (pedal) {
      this.transitionTo('pedal/edit', pedal);
    },

    deleteBoard (pedal) {
      pedal.destroyRecord();
    },
  },
});
