import { module, test } from 'qunit';
import { setupTest } from '@atomizedev/console/tests/helpers';

module('Unit | Controller | console/settings/auth', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        let controller = this.owner.lookup('controller:console/settings/auth');
        assert.ok(controller);
    });
});
