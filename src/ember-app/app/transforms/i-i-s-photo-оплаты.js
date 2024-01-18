import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОплатыEnum from '../enums/i-i-s-photo-оплаты';

export default FlexberryEnum.extend({
  enum: ОплатыEnum,
  sourceType: 'IIS.Photo.Оплаты'
});
