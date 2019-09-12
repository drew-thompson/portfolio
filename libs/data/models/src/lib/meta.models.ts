import { MetaDefinition } from '@angular/platform-browser';

export type OGMetaProperty =
  | 'type'
  | 'image'
  | 'title'
  | 'description'
  | 'url'
  | 'site_name';

export type OGMetaDefinition = MetaDefinition & { property: OGMetaProperty };

export type ProductMetaProperty =
  | 'brand'
  | 'availability'
  | 'condition'
  | 'price:amount'
  | 'price:currency'
  | 'retailer_item_id';

export type ProductMetaDefinition = MetaDefinition & {
  property: ProductMetaProperty;
};

export type TwitterMetaName = 'image' | 'site';

export type TwitterMetaDefinition = MetaDefinition & { name: TwitterMetaName };

export type MetaTagPosition = 'default' | 'top';
