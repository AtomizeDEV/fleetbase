import { module, test } from 'qunit';

import { setupTest } from '@atomizedev/console/tests/helpers';

module('Unit | Serializer | comment', function (hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function (assert) {
        let store = this.owner.lookup('service:store');
        let serializer = store.serializerFor('comment');

        assert.ok(serializer);
    });

    test('it serializes records', function (assert) {
        let store = this.owner.lookup('service:store');
        let record = store.createRecord('comment', {});

        let serializedRecord = record.serialize();

        assert.ok(serializedRecord);
    });
});
