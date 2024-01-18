import { Serializer as ФотокиоскSerializer } from
  '../mixins/regenerated/serializers/i-i-s-photo-фотокиоск';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФотокиоскSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
