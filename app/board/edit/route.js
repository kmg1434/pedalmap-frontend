import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('board', params.board_id);
  },

  actions: {
    saveBoard (board) {
      let _this = this;
      board.save().then(function () {
        _this.transitionTo('boards');
      });
    },

    cancelEditBoard (board) {
      board.rollbackAttributes();
      this.transitionTo('boards');

    },

    willTransition () {
      this.get('store').peekAll('board').forEach(function (board) {
        if (board.get('hasDirtyAttributes')) {
          board.rollbackAttributes();
        }
      });
    },
  },
});
