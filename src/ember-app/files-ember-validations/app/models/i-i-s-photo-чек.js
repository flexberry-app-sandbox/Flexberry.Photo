import {
  defineNamespace,
  defineProjections,
  Model as ЧекMixin
} from '../mixins/regenerated/models/i-i-s-photo-чек';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЧекMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
