import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('pedal', {});
  },

  actions: {
    save (pedal) {
      pedal.save();
      this.transitionTo('pedals');
    },

    cancel (pedal) {
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
