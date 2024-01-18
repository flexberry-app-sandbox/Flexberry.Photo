import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-photo-клиент-l');
  this.route('i-i-s-photo-клиент-e',
  { path: 'i-i-s-photo-клиент-e/:id' });
  this.route('i-i-s-photo-клиент-e.new',
  { path: 'i-i-s-photo-клиент-e/new' });
  this.route('i-i-s-photo-оплата-l');
  this.route('i-i-s-photo-оплата-e',
  { path: 'i-i-s-photo-оплата-e/:id' });
  this.route('i-i-s-photo-оплата-e.new',
  { path: 'i-i-s-photo-оплата-e/new' });
  this.route('i-i-s-photo-фотокиоск-l');
  this.route('i-i-s-photo-фотокиоск-e',
  { path: 'i-i-s-photo-фотокиоск-e/:id' });
  this.route('i-i-s-photo-фотокиоск-e.new',
  { path: 'i-i-s-photo-фотокиоск-e/new' });
});

export default Router;
