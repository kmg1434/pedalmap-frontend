import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('pedal', params.pedal_id);
  },

  actions: {
    savePedal (pedal) {
      let _this = this;
      pedal.save().then(function () {
        _this.transitionTo('pedals');
      });
    },

    cancelEditPedal (pedal) {
      pedal.rollbackAttributes();
      this.transitionTo('pedals');

    },

    willTransition () {
      this.get('store').peekAll('pedal').forEach(function (pedal) {
        if (pedal.get('hasDirtyAttributes')) {
          pedal.rollbackAttributes();
        }
      });
    },
  },
});
