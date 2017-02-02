import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('board', params.board_id);
  },

  actions: {
    editBoard (board) {
      console.log('got to board route edit');
      this.transitionTo('board/edit', board);
    },

    deleteBoard (board) {
      console.log('got to board route delete');
      board.destroyRecord();
      this.transitionTo('boards', board);
    },
  },
});
