import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editPedal () {

      this.sendAction('editPedal', this.get('pedal'));

      // this.transitionTo('pedal/edit', pedal);
    },

    deletePedal () {
      this.sendAction('editPedal', this.get('pedal'));

      // pedal.destroyRecord();
    },
  },
});
