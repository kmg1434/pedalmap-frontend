import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPedal () {
      this.sendAction('editPedal', this.get('pedal'));
    },

    deletePedal () {
      this.sendAction('deletePedal', this.get('pedal'));
    },
  },
});
