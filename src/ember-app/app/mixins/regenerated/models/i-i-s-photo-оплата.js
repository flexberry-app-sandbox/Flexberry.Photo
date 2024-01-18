import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-photo-оплаты'),
  клиент: DS.belongsTo('i-i-s-photo-клиент', { inverse: null, async: false }),
  фото: DS.hasMany('i-i-s-photo-фото', { inverse: 'оплата', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-photo-оплата.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-photo-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-photo-оплата.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-photo-оплата.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-photo-оплата.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-photo-оплата', {
    типОплаты: attr('Тип оплаты', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    номер: attr('Номер', { index: 2 }),
    фото: hasMany('i-i-s-photo-фото', 'Фото', {
      режим: attr('Режим', { index: 0 }),
      длина: attr('Длина', { index: 1 }),
      ширина: attr('Ширина', { index: 2 }),
      номер: attr('Номер', { index: 3 })
    })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-photo-оплата', {
    типОплаты: attr('Тип оплаты', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    номер: attr('Номер', { index: 2 })
  });
};
