import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  iD: DS.attr('number')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-photo-клиент.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iD: {
    descriptionKey: 'models.i-i-s-photo-клиент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-photo-клиент', {
    email: attr('Email', { index: 0 }),
    iD: attr('ID', { index: 1 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-photo-клиент', {
    email: attr('Email', { index: 0 }),
    iD: attr('ID', { index: 1 })
  });
};
