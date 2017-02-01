import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('pedal');
  },

  actions: {

    editPedal (pedal) {
      this.transitionTo('pedal/edit', pedal);
    },

    deletePedal (pedal) {
      pedal.destroyRecord();
    },

    // attach () {
    //   let _this = this;
    //   return new Ember.RSVP.Promise(function (resolve) {
    //     _this.store.findAll('board')
    //       .then(function (boards) {
    //       resolve(boards.filterBy('ytid', ytid));
    //       });
    //   });
    // },
  },
});
