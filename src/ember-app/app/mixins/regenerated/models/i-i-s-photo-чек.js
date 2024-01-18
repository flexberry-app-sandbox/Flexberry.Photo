import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  оплата: DS.belongsTo('i-i-s-photo-оплата', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-photo-фотокиоск', { inverse: 'чек', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-photo-чек.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-photo-чек.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-photo-чек.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-photo-чек.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧекE', 'i-i-s-photo-чек', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
