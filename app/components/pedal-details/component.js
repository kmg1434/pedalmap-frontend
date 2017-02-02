import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editPedal () {
      this.sendAction('editPedal', this.get('pedal'));
    },

    deletePedal () {
      this.sendAction('deletePedal', this.get('pedal'));
    },

    attach () {
      this.sendAction('attach', this.get('velcro'));

      // this.get('store').peekAll('velcro').forEach(function (board) {
      // this.sendAction('attach', this.get('velcro'));
    },
  },
});
