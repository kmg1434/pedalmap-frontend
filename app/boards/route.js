import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('board');
  },

  actions: {
    editBoard (board) {
      this.transitionTo('board/edit', board);
    },

    deleteBoard (board) {
      board.destroyRecord();
    },
  },
});
