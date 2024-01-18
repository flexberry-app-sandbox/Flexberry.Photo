import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-photo-оплата', 'Unit | Serializer | i-i-s-photo-оплата', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-photo-оплата',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-photo-оплаты',
    'transform:i-i-s-photo-режимы',

    'model:i-i-s-photo-клиент',
    'model:i-i-s-photo-оборудование',
    'model:i-i-s-photo-оплата',
    'model:i-i-s-photo-фото',
    'model:i-i-s-photo-фотокиоск',
    'model:i-i-s-photo-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
