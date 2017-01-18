import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  this.route('boards');
  this.route('boards/new');
  this.route('board', { path: 'boards/:board_id' });
  this.route('board/edit', { path: 'boards/:board_id/edit' });

  this.route('board-details', function () {});
});

export default Router;
