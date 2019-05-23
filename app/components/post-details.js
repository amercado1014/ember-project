import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  ajax: inject(),
  displayModal: false,
  user: null,
  actions: {
    getUser(userId) {
      this.get('ajax')
        .request(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(data => {
          this.set('user', data);
        });
      this.toggleProperty('displayModal');
    },
    closeModal() {
      this.toggleProperty('displayModal');
    }
  }
});
