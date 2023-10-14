import { module, test } from 'qunit';
import { setupTest } from '@atomizedev/console/tests/helpers';

module('Unit | Route | console/account/virtual', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        let route = this.owner.lookup('route:console/account/virtual');
        assert.ok(route);
    });
});
