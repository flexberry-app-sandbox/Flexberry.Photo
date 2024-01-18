import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОплатаMixin
} from '../mixins/regenerated/models/i-i-s-photo-оплата';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОплатаMixin, Validations, {
});

defineProjections(Model);

export default Model;
