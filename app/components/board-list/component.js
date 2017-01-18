import Ember from 'ember';

export default Ember.Component.extend({
  model () {
    return this.get('store').findAll('board');
  },

  actions: {
    editBoard () {
      // board.save();
    },

    deleteBoard () {
      console.log('inside board-list');
      this.sendAction('deleteBoard', this.get('board'));
    },
  },
});
