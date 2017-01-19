import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('board');
  },

  actions: {
    editBoard () {
      console.log('inside boards/route editBoard()');
      this.transitionTo('board/edit'); // why won't this work?
    },

    deleteBoard (board) {
      console.log('inside boards/route.js');
      board.destroyRecord();
    },
  },
});
