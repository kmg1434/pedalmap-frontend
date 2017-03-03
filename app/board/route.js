import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('board', params.board_id);
  },

  actions: {
    editBoard (board) {
      this.transitionTo('board/edit', board);
    },

    deleteBoard (board) {
      board.destroyRecord();
      this.transitionTo('boards');
    },
  },
});
