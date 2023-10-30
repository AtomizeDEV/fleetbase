import ApplicationSerializer from '@atomizedev/ember-core/serializers/application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class BrandSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {}
