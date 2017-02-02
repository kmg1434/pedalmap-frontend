import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('velcro', {});
  },

  actions: {
    save (velcro) {
      velcro.save();
      this.transitionTo('velcro');
    },

    cancel (velcro) {
      velcro.rollbackAttributes();
      this.transitionTo('velcro');

    },

    willTransition () {
      this.get('store').peekAll('velcro').forEach(function (velcro) {
        if (velcro.get('hasDirtyAttributes')) {
          velcro.rollbackAttributes();
        }
      });
    },
  },
});
