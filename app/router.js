import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('application/index', { path: '/' });

  // auth routes
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  // board routes
  this.route('boards');
  this.route('boards/new');
  this.route('board', { path: 'boards/:board_id' });
  this.route('board/edit', { path: 'boards/:board_id/edit' });

  // pedal routes
  this.route('pedals');
  this.route('pedals/new');
  this.route('pedal', { path: 'pedals/:pedal_id' });
  this.route('pedal/edit', { path: 'pedals/:pedal_id/edit' });
});

export default Router;
