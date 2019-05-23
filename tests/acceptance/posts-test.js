import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);

  test('should show posts as the home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/posts', 'should redirect automatically');
  });

  test('should display posts', async function(assert) {
    await visit('/posts');
    assert.equal(
      this.element.querySelectorAll('.post').length,
      10,
      'should have 10 posts per page'
    );
  });
});
