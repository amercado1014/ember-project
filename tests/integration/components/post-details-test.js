import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | post-details', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.post = {
      userId: 1,
      id: 1,
      title: 'test-title',
      body: 'test-body'
    };
  });

  test('should display post details', async function(assert) {
    await render(hbs`<PostDetails @post={{this.post}} />`);
    assert.equal(
      this.element.querySelector('.post-title').textContent.trim(),
      'test-title',
      'Title: test-title'
    );
  });

  test('should display modal', async function(assert) {
    await render(hbs`<PostDetails @post={{this.post}} />`);
    await click('.post-title');
    assert.equal(
      this.element.querySelector('.post-body').textContent.trim(),
      'test-body',
      'Body: test-body'
    );
  });
});
