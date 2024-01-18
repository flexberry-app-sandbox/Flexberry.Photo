import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РежимыEnum from '../enums/i-i-s-photo-режимы';

export default FlexberryEnum.extend({
  enum: РежимыEnum,
  sourceType: 'IIS.Photo.Режимы'
});
