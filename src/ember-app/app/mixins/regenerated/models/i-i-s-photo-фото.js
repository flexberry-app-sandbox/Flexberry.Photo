import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длина: DS.attr('number'),
  номер: DS.attr('number'),
  режим: DS.attr('i-i-s-photo-режимы'),
  ширина: DS.attr('number'),
  оплата: DS.belongsTo('i-i-s-photo-оплата', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  длина: {
    descriptionKey: 'models.i-i-s-photo-фото.validations.длина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-photo-фото.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  режим: {
    descriptionKey: 'models.i-i-s-photo-фото.validations.режим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ширина: {
    descriptionKey: 'models.i-i-s-photo-фото.validations.ширина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-photo-фото.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-photo-фото', {
    режим: attr('Режим', { index: 0 }),
    длина: attr('Длина', { index: 1 }),
    ширина: attr('Ширина', { index: 2 }),
    номер: attr('Номер', { index: 3 })
  });
};
