import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  ajax: inject(),
  page: 1,
  isFirstPage: equal('page', 1),
  isLastPage: equal('page', 10),
  posts: null,
  getPosts() {
    this.get('ajax')
      .request(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}`)
      .then(data => {
        this.set('posts', data);
      });
  },
  actions: {
    getPreviousPage() {
      this.set('page', this.page - 1);
      this.getPosts();
    },
    getNextPage() {
      this.set('page', this.page + 1);
      this.getPosts();
    }
  }
});
