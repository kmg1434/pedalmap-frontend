import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editBoard () {
      this.sendAction('editBoard', this.get('board'));
    },

    deleteBoard () {
      this.sendAction('deleteBoard', this.get('board'));
    },
  },
});
