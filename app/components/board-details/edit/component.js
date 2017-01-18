import Ember from 'ember';

export default Ember.Component.extend({
  Board: {
    name: null,
    length: null,
    width: null,
    pedals: null,
  },

  actions: {
    save () {
      this.sendAction('save', this.get('board'));
    },

    cancel () {
      this.sendAction('cancel', this.get('board'));
    },
  },
});
