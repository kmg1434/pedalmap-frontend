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

    cancelEditBoard () {
      this.transitionTo('boards');
    },
  },
});
