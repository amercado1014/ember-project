import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  model() {
    return this.get('ajax').request(
      'https://jsonplaceholder.typicode.com/posts?_page=1'
    );
  },
  setupController(controller, model) {
    controller.set('posts', model);
  }
});
