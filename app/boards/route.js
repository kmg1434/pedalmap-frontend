import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('board');
  },

  actions: {
    editBoard (board) {
      this.transitionTo('boards/new');
    },

    deleteBoard (board) {
      console.log('inside boards/route.js');
      board.destroyRecord();
    },
  },
});
