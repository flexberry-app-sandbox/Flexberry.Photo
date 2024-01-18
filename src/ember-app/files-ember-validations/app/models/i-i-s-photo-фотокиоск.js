import {
  defineNamespace,
  defineProjections,
  Model as ФотокиоскMixin
} from '../mixins/regenerated/models/i-i-s-photo-фотокиоск';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФотокиоскMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
