import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string'),
  фотокиоск: DS.belongsTo('i-i-s-photo-фотокиоск', { inverse: 'оборудование', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-photo-оборудование.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-photo-оборудование.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-photo-оборудование.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-photo-оборудование', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
