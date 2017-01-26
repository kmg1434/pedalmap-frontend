import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('board', {});
  },

  actions: {
    save (board) {
      board.save();
      this.transitionTo('boards');
    },

    cancel (board) {
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
