import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-photo-оплата', 'Unit | Model | i-i-s-photo-оплата', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
