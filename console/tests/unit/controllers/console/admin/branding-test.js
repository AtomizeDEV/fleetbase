import { module, test } from 'qunit';
import { setupTest } from '@atomizedev/console/tests/helpers';

module('Unit | Controller | console/admin/branding', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        let controller = this.owner.lookup('controller:console/admin/branding');
        assert.ok(controller);
    });
});
