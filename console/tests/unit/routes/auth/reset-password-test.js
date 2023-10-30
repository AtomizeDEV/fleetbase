import { module, test } from 'qunit';
import { setupTest } from '@atomizedev/console/tests/helpers';

module('Unit | Route | auth/reset-password', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        let route = this.owner.lookup('route:auth/reset-password');
        assert.ok(route);
    });
});
