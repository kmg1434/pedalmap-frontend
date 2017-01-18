import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editBoard () {
      this.sendAction('editBoard', this.get('board'));
    },
  },
});
