import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  адрес: DS.attr('string'),
  состояние: DS.attr('string'),
  оборудование: DS.hasMany('i-i-s-photo-оборудование', { inverse: 'фотокиоск', async: false }),
  чек: DS.hasMany('i-i-s-photo-чек', { inverse: 'фотокиоск', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-photo-фотокиоск.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-photo-фотокиоск.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-photo-фотокиоск.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-photo-фотокиоск.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  чек: {
    descriptionKey: 'models.i-i-s-photo-фотокиоск.validations.чек.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотокиоскE', 'i-i-s-photo-фотокиоск', {
    iD: attr('ID', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    оборудование: hasMany('i-i-s-photo-оборудование', 'Оборудование', {
      iD: attr('ID', { index: 0 }),
      наименование: attr('Наименование', { index: 1 })
    }),
    чек: hasMany('i-i-s-photo-чек', 'Чек', {
      номер: attr('Номер', { index: 0 }),
      дата: attr('Дата', { index: 1 })
    })
  });

  modelClass.defineProjection('ФотокиоскL', 'i-i-s-photo-фотокиоск', {
    iD: attr('ID', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    состояние: attr('Состояние', { index: 2 })
  });
};
