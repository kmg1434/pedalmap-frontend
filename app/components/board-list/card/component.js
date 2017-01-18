import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editBoard () {
      this.sendAction('editBoard', this.get('board'));
    },

    deleteBoard () {
      console.log('inside board-list/card');
      this.sendAction('deleteBoard', this.get('board'));
    },
  },
});
