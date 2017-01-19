import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('board');
  },

  actions: {
    editBoard (board) {
      console.log('inside boards/route editBoard()');
      this.transitionTo('board/edit', board);
    },

    deleteBoard (board) {
      console.log('inside boards/route.js');
      board.destroyRecord();
    },
  },
});
