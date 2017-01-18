import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('board', {});
  },

  actions: {
    save (board) {
      board.save();
    },

    cancelCreateBoard (board) {
      console.log('in boards/new route cancelCreateBoard');
      board.rollbackAttributes();
    },
  },
});
