import { Serializer as ФотоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-photo-фото';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФотоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
