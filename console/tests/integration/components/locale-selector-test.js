import { module, test } from 'qunit';
import { setupRenderingTest } from '@atomizedev/console/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | locale-selector', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<LocaleSelector />`);

        assert.dom().hasText('');

        // Template block usage:
        await render(hbs`
      <LocaleSelector>
        template block text
      </LocaleSelector>
    `);

        assert.dom().hasText('template block text');
    });
});
