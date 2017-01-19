import Ember from 'ember';

// generated by boards route

export default Ember.Component.extend({
  actions: {
    editBoard () {
      console.log('inside board-list/card/component editBoard()');
      this.sendAction('editBoard', this.get('board'));
    },

    deleteBoard () {
      console.log('inside board-list/card');
      this.sendAction('deleteBoard', this.get('board'));
    },
  },
});
