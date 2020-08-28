import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Administrator = {
  __typename?: 'Administrator';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  type: AdministratorEnum;
  user: User;
};


export enum AdministratorEnum {
  Superadmin = 'SUPERADMIN',
  Staff = 'STAFF'
}

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: Scalars['String'];
  mimeType: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  fileSize: Scalars['Float'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint: Scalars['JSONObject'];
  featureds: Array<Product>;
  productAssets: Array<ProductAsset>;
  featuredsAggregate: AssetFeaturedsAggregateResponse;
  productAssetsAggregate: AssetProductAssetsAggregateResponse;
};


export type AssetFeaturedsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type AssetProductAssetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductAssetFilter>;
  sorting?: Maybe<Array<ProductAssetSort>>;
};


export type AssetFeaturedsAggregateArgs = {
  filter?: Maybe<ProductAggregateFilter>;
};


export type AssetProductAssetsAggregateArgs = {
  filter?: Maybe<ProductAssetAggregateFilter>;
};


export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: Maybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: Maybe<Scalars['Int']>;
};

export type ProductFilter = {
  and?: Maybe<Array<ProductFilter>>;
  or?: Maybe<Array<ProductFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  productName?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type DateFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  between?: Maybe<DateFieldComparisonBetween>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type ProductSort = {
  field: ProductSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  ProductName = 'productName',
  Slug = 'slug',
  Description = 'description'
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type ProductAssetFilter = {
  and?: Maybe<Array<ProductAssetFilter>>;
  or?: Maybe<Array<ProductAssetFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductAssetSort = {
  field: ProductAssetSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductAssetSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type ProductAggregateFilter = {
  and?: Maybe<Array<ProductAggregateFilter>>;
  or?: Maybe<Array<ProductAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  productName?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type ProductAssetAggregateFilter = {
  and?: Maybe<Array<ProductAssetAggregateFilter>>;
  or?: Maybe<Array<ProductAssetAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultLanguageCode: Scalars['String'];
  currencyCode: Scalars['String'];
  pricesIncludeTax: Scalars['Boolean'];
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isRoot: Scalars['Boolean'];
  inMenu: Scalars['Boolean'];
  position: Scalars['Float'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  description: Scalars['String'];
  children: Array<Collection>;
  products: Array<Product>;
  agreements: Array<BillingAgreement>;
  cartPrice?: Maybe<CartPriceRules>;
  seo?: Maybe<Seo>;
  parent?: Maybe<Collection>;
  childrenAggregate: CollectionChildrenAggregateResponse;
  productsAggregate: CollectionProductsAggregateResponse;
  agreementsAggregate: CollectionAgreementsAggregateResponse;
};


export type CollectionChildrenArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CollectionFilter>;
  sorting?: Maybe<Array<CollectionSort>>;
};


export type CollectionProductsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type CollectionAgreementsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<BillingAgreementFilter>;
  sorting?: Maybe<Array<BillingAgreementSort>>;
};


export type CollectionChildrenAggregateArgs = {
  filter?: Maybe<CollectionAggregateFilter>;
};


export type CollectionProductsAggregateArgs = {
  filter?: Maybe<ProductAggregateFilter>;
};


export type CollectionAgreementsAggregateArgs = {
  filter?: Maybe<BillingAgreementAggregateFilter>;
};

export type CollectionFilter = {
  and?: Maybe<Array<CollectionFilter>>;
  or?: Maybe<Array<CollectionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isRoot?: Maybe<BooleanFieldComparison>;
  inMenu?: Maybe<BooleanFieldComparison>;
  position?: Maybe<NumberFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type BooleanFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
};

export type NumberFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  between?: Maybe<NumberFieldComparisonBetween>;
  notBetween?: Maybe<NumberFieldComparisonBetween>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type CollectionSort = {
  field: CollectionSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CollectionSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  IsRoot = 'isRoot',
  InMenu = 'inMenu',
  Position = 'position',
  IsPrivate = 'isPrivate',
  Name = 'name',
  Description = 'description'
}

export type BillingAgreementFilter = {
  and?: Maybe<Array<BillingAgreementFilter>>;
  or?: Maybe<Array<BillingAgreementFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  store?: Maybe<BillingAgreementFilterStoreFilter>;
};

export type BillingAgreementFilterStoreFilter = {
  and?: Maybe<Array<BillingAgreementFilterStoreFilter>>;
  or?: Maybe<Array<BillingAgreementFilterStoreFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
};

export type BillingAgreementSort = {
  field: BillingAgreementSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum BillingAgreementSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type CollectionAggregateFilter = {
  and?: Maybe<Array<CollectionAggregateFilter>>;
  or?: Maybe<Array<CollectionAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isRoot?: Maybe<BooleanFieldComparison>;
  inMenu?: Maybe<BooleanFieldComparison>;
  position?: Maybe<NumberFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type BillingAgreementAggregateFilter = {
  and?: Maybe<Array<BillingAgreementAggregateFilter>>;
  or?: Maybe<Array<BillingAgreementAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type Facet = {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  code: Scalars['String'];
  products: Array<Product>;
  values: Array<FacetValue>;
  productsAggregate: FacetProductsAggregateResponse;
  valuesAggregate: FacetValuesAggregateResponse;
};


export type FacetProductsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type FacetValuesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<FacetValueFilter>;
  sorting?: Maybe<Array<FacetValueSort>>;
};


export type FacetProductsAggregateArgs = {
  filter?: Maybe<ProductAggregateFilter>;
};


export type FacetValuesAggregateArgs = {
  filter?: Maybe<FacetValueAggregateFilter>;
};

export type FacetValueFilter = {
  and?: Maybe<Array<FacetValueFilter>>;
  or?: Maybe<Array<FacetValueFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type FacetValueSort = {
  field: FacetValueSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum FacetValueSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Code = 'code'
}

export type FacetValueAggregateFilter = {
  and?: Maybe<Array<FacetValueAggregateFilter>>;
  or?: Maybe<Array<FacetValueAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type FacetValue = {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  products: Array<Product>;
  facet: Facet;
  productsAggregate: FacetValueProductsAggregateResponse;
};


export type FacetValueProductsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type FacetValueProductsAggregateArgs = {
  filter?: Maybe<ProductAggregateFilter>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  totalPrice: Scalars['Float'];
  address: Scalars['String'];
  lines: Array<OrderLine>;
  user: User;
  linesAggregate: OrderLinesAggregateResponse;
};


export type OrderLinesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<OrderLineFilter>;
  sorting?: Maybe<Array<OrderLineSort>>;
};


export type OrderLinesAggregateArgs = {
  filter?: Maybe<OrderLineAggregateFilter>;
};

export type OrderLineFilter = {
  and?: Maybe<Array<OrderLineFilter>>;
  or?: Maybe<Array<OrderLineFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  stage?: Maybe<StringFieldComparison>;
  store?: Maybe<OrderLineFilterStoreFilter>;
};

export type OrderLineFilterStoreFilter = {
  and?: Maybe<Array<OrderLineFilterStoreFilter>>;
  or?: Maybe<Array<OrderLineFilterStoreFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
};

export type OrderLineSort = {
  field: OrderLineSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum OrderLineSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Stage = 'stage'
}

export type OrderLineAggregateFilter = {
  and?: Maybe<Array<OrderLineAggregateFilter>>;
  or?: Maybe<Array<OrderLineAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  stage?: Maybe<StringFieldComparison>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  line: OrderLine;
  taxCategory: TaxRate;
  productVariant: ProductVariant;
};

export type OrderLine = {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  priceField: Scalars['JSON'];
  stage: Scalars['String'];
  store: Store;
  item: OrderItem;
  order: Order;
};


export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productName: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  options: Array<ProductOptionGroup>;
  facets: Array<FacetValue>;
  variants: Array<ProductVariant>;
  assets: Array<ProductAsset>;
  collection?: Maybe<Collection>;
  featuredAsset: Asset;
  optionsAggregate: ProductOptionsAggregateResponse;
  facetsAggregate: ProductFacetsAggregateResponse;
  variantsAggregate: ProductVariantsAggregateResponse;
  assetsAggregate: ProductAssetsAggregateResponse;
};


export type ProductOptionsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductOptionGroupFilter>;
  sorting?: Maybe<Array<ProductOptionGroupSort>>;
};


export type ProductFacetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<FacetValueFilter>;
  sorting?: Maybe<Array<FacetValueSort>>;
};


export type ProductVariantsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantFilter>;
  sorting?: Maybe<Array<ProductVariantSort>>;
};


export type ProductAssetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductAssetFilter>;
  sorting?: Maybe<Array<ProductAssetSort>>;
};


export type ProductOptionsAggregateArgs = {
  filter?: Maybe<ProductOptionGroupAggregateFilter>;
};


export type ProductFacetsAggregateArgs = {
  filter?: Maybe<FacetValueAggregateFilter>;
};


export type ProductVariantsAggregateArgs = {
  filter?: Maybe<ProductVariantAggregateFilter>;
};


export type ProductAssetsAggregateArgs = {
  filter?: Maybe<ProductAssetAggregateFilter>;
};

export type ProductOptionGroupFilter = {
  and?: Maybe<Array<ProductOptionGroupFilter>>;
  or?: Maybe<Array<ProductOptionGroupFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type ProductOptionGroupSort = {
  field: ProductOptionGroupSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductOptionGroupSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  Code = 'code'
}

export type ProductVariantFilter = {
  and?: Maybe<Array<ProductVariantFilter>>;
  or?: Maybe<Array<ProductVariantFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  dum_price?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  trackInventory?: Maybe<BooleanFieldComparison>;
  line?: Maybe<ProductVariantFilterOrderItemFilter>;
  price?: Maybe<ProductVariantFilterProductVariantPriceFilter>;
};

export type ProductVariantFilterOrderItemFilter = {
  and?: Maybe<Array<ProductVariantFilterOrderItemFilter>>;
  or?: Maybe<Array<ProductVariantFilterOrderItemFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type ProductVariantFilterProductVariantPriceFilter = {
  and?: Maybe<Array<ProductVariantFilterProductVariantPriceFilter>>;
  or?: Maybe<Array<ProductVariantFilterProductVariantPriceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
};

export type ProductVariantSort = {
  field: ProductVariantSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductVariantSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DeletedAt = 'deletedAt',
  DumPrice = 'dum_price',
  Enabled = 'enabled',
  Sku = 'sku',
  Name = 'name',
  TrackInventory = 'trackInventory'
}

export type ProductOptionGroupAggregateFilter = {
  and?: Maybe<Array<ProductOptionGroupAggregateFilter>>;
  or?: Maybe<Array<ProductOptionGroupAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type ProductVariantAggregateFilter = {
  and?: Maybe<Array<ProductVariantAggregateFilter>>;
  or?: Maybe<Array<ProductVariantAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  dum_price?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  trackInventory?: Maybe<BooleanFieldComparison>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  verified: Scalars['Boolean'];
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  administrator?: Maybe<Administrator>;
  vendor?: Maybe<Vendor>;
  delivery: Delivery;
  cart: Cart;
  view: Array<View>;
  address?: Maybe<Address>;
  order: Array<Order>;
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  vendorName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  zips: Array<Zip>;
  store: Store;
  license: VendorLicense;
  user: User;
  zipsAggregate: VendorZipsAggregateResponse;
};


export type VendorZipsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ZipFilter>;
  sorting?: Maybe<Array<ZipSort>>;
};


export type VendorZipsAggregateArgs = {
  filter?: Maybe<ZipAggregateFilter>;
};

export type ZipFilter = {
  and?: Maybe<Array<ZipFilter>>;
  or?: Maybe<Array<ZipFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  code?: Maybe<NumberFieldComparison>;
  vendors?: Maybe<ZipFilterVendorFilter>;
};

export type ZipFilterVendorFilter = {
  and?: Maybe<Array<ZipFilterVendorFilter>>;
  or?: Maybe<Array<ZipFilterVendorFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  vendorName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type ZipSort = {
  field: ZipSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ZipSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  Slug = 'slug',
  Code = 'code'
}

export type ZipAggregateFilter = {
  and?: Maybe<Array<ZipAggregateFilter>>;
  or?: Maybe<Array<ZipAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  code?: Maybe<NumberFieldComparison>;
};

export type TaxCategory = {
  __typename?: 'TaxCategory';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  rates: Array<TaxRate>;
  ratesAggregate: TaxCategoryRatesAggregateResponse;
};


export type TaxCategoryRatesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<TaxRateFilter>;
  sorting?: Maybe<Array<TaxRateSort>>;
};


export type TaxCategoryRatesAggregateArgs = {
  filter?: Maybe<TaxRateAggregateFilter>;
};

export type TaxRateFilter = {
  and?: Maybe<Array<TaxRateFilter>>;
  or?: Maybe<Array<TaxRateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type TaxRateSort = {
  field: TaxRateSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum TaxRateSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  Value = 'value',
  Enabled = 'enabled'
}

export type TaxRateAggregateFilter = {
  and?: Maybe<Array<TaxRateAggregateFilter>>;
  or?: Maybe<Array<TaxRateAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  value: Scalars['Float'];
  enabled: Scalars['Boolean'];
  variants: Array<ProductVariantPrice>;
  zone: Zone;
  category: TaxCategory;
  variantsAggregate: TaxRateVariantsAggregateResponse;
};


export type TaxRateVariantsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantPriceFilter>;
  sorting?: Maybe<Array<ProductVariantPriceSort>>;
};


export type TaxRateVariantsAggregateArgs = {
  filter?: Maybe<ProductVariantPriceAggregateFilter>;
};

export type ProductVariantPriceFilter = {
  and?: Maybe<Array<ProductVariantPriceFilter>>;
  or?: Maybe<Array<ProductVariantPriceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
  variant?: Maybe<ProductVariantPriceFilterProductVariantFilter>;
};

export type ProductVariantPriceFilterProductVariantFilter = {
  and?: Maybe<Array<ProductVariantPriceFilterProductVariantFilter>>;
  or?: Maybe<Array<ProductVariantPriceFilterProductVariantFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  dum_price?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  trackInventory?: Maybe<BooleanFieldComparison>;
};

export type ProductVariantPriceSort = {
  field: ProductVariantPriceSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductVariantPriceSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Price = 'price',
  TaxIncluded = 'taxIncluded'
}

export type ProductVariantPriceAggregateFilter = {
  and?: Maybe<Array<ProductVariantPriceAggregateFilter>>;
  or?: Maybe<Array<ProductVariantPriceAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
};

export type Zone = {
  __typename?: 'Zone';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  members: Array<Country>;
  stores: Array<Store>;
  taxrates: Array<TaxRate>;
  membersAggregate: ZoneMembersAggregateResponse;
  storesAggregate: ZoneStoresAggregateResponse;
  taxratesAggregate: ZoneTaxratesAggregateResponse;
};


export type ZoneMembersArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CountryFilter>;
  sorting?: Maybe<Array<CountrySort>>;
};


export type ZoneStoresArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StoreFilter>;
  sorting?: Maybe<Array<StoreSort>>;
};


export type ZoneTaxratesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<TaxRateFilter>;
  sorting?: Maybe<Array<TaxRateSort>>;
};


export type ZoneMembersAggregateArgs = {
  filter?: Maybe<CountryAggregateFilter>;
};


export type ZoneStoresAggregateArgs = {
  filter?: Maybe<StoreAggregateFilter>;
};


export type ZoneTaxratesAggregateArgs = {
  filter?: Maybe<TaxRateAggregateFilter>;
};

export type CountryFilter = {
  and?: Maybe<Array<CountryFilter>>;
  or?: Maybe<Array<CountryFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type CountrySort = {
  field: CountrySortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CountrySortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Code = 'code',
  Name = 'name',
  Enabled = 'enabled'
}

export type StoreFilter = {
  and?: Maybe<Array<StoreFilter>>;
  or?: Maybe<Array<StoreFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
  line?: Maybe<StoreFilterOrderLineFilter>;
};

export type StoreFilterOrderLineFilter = {
  and?: Maybe<Array<StoreFilterOrderLineFilter>>;
  or?: Maybe<Array<StoreFilterOrderLineFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  stage?: Maybe<StringFieldComparison>;
};

export type StoreSort = {
  field: StoreSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum StoreSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  StoreName = 'storeName',
  PhoneNumber = 'phoneNumber',
  Officialemail = 'officialemail',
  Zipcode = 'zipcode',
  StreetAddress1 = 'streetAddress1',
  StreetAddress2 = 'streetAddress2',
  Gstin = 'GSTIN',
  SingleStore = 'singleStore',
  RentalStore = 'rentalStore',
  ChannelMarkets = 'channelMarkets'
}

export type CountryAggregateFilter = {
  and?: Maybe<Array<CountryAggregateFilter>>;
  or?: Maybe<Array<CountryAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type StoreAggregateFilter = {
  and?: Maybe<Array<StoreAggregateFilter>>;
  or?: Maybe<Array<StoreAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
};

export type StoreBalance = {
  __typename?: 'StoreBalance';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  balance: Scalars['Float'];
};

export type Settlements = {
  __typename?: 'Settlements';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  amount: Scalars['Float'];
  taxamount: Scalars['Float'];
  finalamount: Scalars['Float'];
  transactionID: Scalars['String'];
  remarks: Scalars['String'];
  type: SettlementType;
  store: Store;
};

export enum SettlementType {
  Processing = 'PROCESSING',
  Processed = 'PROCESSED'
}

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  storeName: Scalars['String'];
  phoneNumber: Scalars['String'];
  officialemail: Scalars['String'];
  zipcode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  GSTIN: Scalars['String'];
  singleStore: Scalars['Boolean'];
  rentalStore: Scalars['Boolean'];
  channelMarkets: Scalars['Boolean'];
  type: StoreTypeEnum;
  lines: Array<OrderLine>;
  prices: Array<Settlements>;
  settlements: Array<Settlements>;
  skus: Array<StockKeeping>;
  balance?: Maybe<StoreBalance>;
  country: Country;
  linesAggregate: StoreLinesAggregateResponse;
  pricesAggregate: StorePricesAggregateResponse;
  settlementsAggregate: StoreSettlementsAggregateResponse;
  skusAggregate: StoreSkusAggregateResponse;
};


export type StoreLinesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<OrderLineFilter>;
  sorting?: Maybe<Array<OrderLineSort>>;
};


export type StorePricesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<SettlementsFilter>;
  sorting?: Maybe<Array<SettlementsSort>>;
};


export type StoreSettlementsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<SettlementsFilter>;
  sorting?: Maybe<Array<SettlementsSort>>;
};


export type StoreSkusArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StockKeepingFilter>;
  sorting?: Maybe<Array<StockKeepingSort>>;
};


export type StoreLinesAggregateArgs = {
  filter?: Maybe<OrderLineAggregateFilter>;
};


export type StorePricesAggregateArgs = {
  filter?: Maybe<SettlementsAggregateFilter>;
};


export type StoreSettlementsAggregateArgs = {
  filter?: Maybe<SettlementsAggregateFilter>;
};


export type StoreSkusAggregateArgs = {
  filter?: Maybe<StockKeepingAggregateFilter>;
};

export enum StoreTypeEnum {
  Default = 'DEFAULT',
  Vendor = 'VENDOR'
}

export type SettlementsFilter = {
  and?: Maybe<Array<SettlementsFilter>>;
  or?: Maybe<Array<SettlementsFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  amount?: Maybe<NumberFieldComparison>;
  taxamount?: Maybe<NumberFieldComparison>;
  finalamount?: Maybe<NumberFieldComparison>;
  transactionID?: Maybe<StringFieldComparison>;
  remarks?: Maybe<StringFieldComparison>;
  type?: Maybe<SettlementTypeFilterComparison>;
};

export type SettlementTypeFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<SettlementType>;
  neq?: Maybe<SettlementType>;
  gt?: Maybe<SettlementType>;
  gte?: Maybe<SettlementType>;
  lt?: Maybe<SettlementType>;
  lte?: Maybe<SettlementType>;
  like?: Maybe<SettlementType>;
  notLike?: Maybe<SettlementType>;
  iLike?: Maybe<SettlementType>;
  notILike?: Maybe<SettlementType>;
  in?: Maybe<Array<SettlementType>>;
  notIn?: Maybe<Array<SettlementType>>;
};

export type SettlementsSort = {
  field: SettlementsSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum SettlementsSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Amount = 'amount',
  Taxamount = 'taxamount',
  Finalamount = 'finalamount',
  TransactionId = 'transactionID',
  Remarks = 'remarks',
  Type = 'type'
}

export type StockKeepingFilter = {
  and?: Maybe<Array<StockKeepingFilter>>;
  or?: Maybe<Array<StockKeepingFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
  available_quantity?: Maybe<NumberFieldComparison>;
  threshold?: Maybe<NumberFieldComparison>;
  multiple?: Maybe<BooleanFieldComparison>;
  backorder?: Maybe<BooleanFieldComparison>;
  stockstatus?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
};

export type StockKeepingSort = {
  field: StockKeepingSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum StockKeepingSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Quantity = 'quantity',
  AvailableQuantity = 'available_quantity',
  Threshold = 'threshold',
  Multiple = 'multiple',
  Backorder = 'backorder',
  Stockstatus = 'stockstatus',
  Sku = 'sku',
  Type = 'type'
}

export type SettlementsAggregateFilter = {
  and?: Maybe<Array<SettlementsAggregateFilter>>;
  or?: Maybe<Array<SettlementsAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  amount?: Maybe<NumberFieldComparison>;
  taxamount?: Maybe<NumberFieldComparison>;
  finalamount?: Maybe<NumberFieldComparison>;
  transactionID?: Maybe<StringFieldComparison>;
  remarks?: Maybe<StringFieldComparison>;
  type?: Maybe<SettlementTypeFilterComparison>;
};

export type StockKeepingAggregateFilter = {
  and?: Maybe<Array<StockKeepingAggregateFilter>>;
  or?: Maybe<Array<StockKeepingAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
  available_quantity?: Maybe<NumberFieldComparison>;
  threshold?: Maybe<NumberFieldComparison>;
  multiple?: Maybe<BooleanFieldComparison>;
  backorder?: Maybe<BooleanFieldComparison>;
  stockstatus?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
  type: RoleType;
};

export enum Permission {
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreateInvoices = 'CreateInvoices',
  ReadInvoices = 'ReadInvoices',
  UpdateInvoices = 'UpdateInvoices',
  DeleteInvoices = 'DeleteInvoices',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreatePromotion = 'CreatePromotion',
  ReadPromotion = 'ReadPromotion',
  UpdatePromotion = 'UpdatePromotion',
  DeletePromotion = 'DeletePromotion',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings',
  CreateCommunications = 'CreateCommunications',
  ReadCommunications = 'ReadCommunications',
  UpdateCommunications = 'UpdateCommunications',
  DeleteCommunications = 'DeleteCommunications',
  CreateSeo = 'CreateSeo',
  ReadSeo = 'ReadSeo',
  UpdateSeo = 'UpdateSeo',
  DeleteSeo = 'DeleteSeo'
}

export enum RoleType {
  Administrator = 'ADMINISTRATOR',
  Vendor = 'VENDOR',
  User = 'USER',
  Basic = 'BASIC'
}

export type Seo = {
  __typename?: 'Seo';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  urlKey: Scalars['String'];
  metatitle: Scalars['String'];
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc: Scalars['String'];
  variant?: Maybe<ProductVariant>;
  collection?: Maybe<Collection>;
};

export type ProductAsset = {
  __typename?: 'ProductAsset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  asset: Asset;
  product: Product;
};

export type StockKeeping = {
  __typename?: 'StockKeeping';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  available_quantity: Scalars['Float'];
  threshold: Scalars['Float'];
  multiple: Scalars['Boolean'];
  backorder: Scalars['Boolean'];
  stockstatus: Scalars['Boolean'];
  sku: Scalars['String'];
  type: Scalars['String'];
  sales: Array<Sale>;
  cancels: Array<Cancellation>;
  movements: Array<StockMovement>;
  store: Store;
  variant: ProductVariant;
  salesAggregate: StockKeepingSalesAggregateResponse;
  cancelsAggregate: StockKeepingCancelsAggregateResponse;
  movementsAggregate: StockKeepingMovementsAggregateResponse;
};


export type StockKeepingSalesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<SaleFilter>;
  sorting?: Maybe<Array<SaleSort>>;
};


export type StockKeepingCancelsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CancellationFilter>;
  sorting?: Maybe<Array<CancellationSort>>;
};


export type StockKeepingMovementsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StockMovementFilter>;
  sorting?: Maybe<Array<StockMovementSort>>;
};


export type StockKeepingSalesAggregateArgs = {
  filter?: Maybe<SaleAggregateFilter>;
};


export type StockKeepingCancelsAggregateArgs = {
  filter?: Maybe<CancellationAggregateFilter>;
};


export type StockKeepingMovementsAggregateArgs = {
  filter?: Maybe<StockMovementAggregateFilter>;
};

export type SaleFilter = {
  and?: Maybe<Array<SaleFilter>>;
  or?: Maybe<Array<SaleFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type SaleSort = {
  field: SaleSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum SaleSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Quantity = 'quantity'
}

export type CancellationFilter = {
  and?: Maybe<Array<CancellationFilter>>;
  or?: Maybe<Array<CancellationFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type CancellationSort = {
  field: CancellationSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CancellationSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Quantity = 'quantity'
}

export type StockMovementFilter = {
  and?: Maybe<Array<StockMovementFilter>>;
  or?: Maybe<Array<StockMovementFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type StockMovementSort = {
  field: StockMovementSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum StockMovementSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Quantity = 'quantity'
}

export type SaleAggregateFilter = {
  and?: Maybe<Array<SaleAggregateFilter>>;
  or?: Maybe<Array<SaleAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type CancellationAggregateFilter = {
  and?: Maybe<Array<CancellationAggregateFilter>>;
  or?: Maybe<Array<CancellationAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type StockMovementAggregateFilter = {
  and?: Maybe<Array<StockMovementAggregateFilter>>;
  or?: Maybe<Array<StockMovementAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dum_price: Scalars['Float'];
  enabled: Scalars['Boolean'];
  sku: Scalars['String'];
  name: Scalars['String'];
  trackInventory: Scalars['Boolean'];
  lines: Array<OrderItem>;
  stocks: Array<StockKeeping>;
  prices?: Maybe<Array<ProductVariantPrice>>;
  seo?: Maybe<Seo>;
  specs?: Maybe<ProductVariantSpecs>;
  asset?: Maybe<ProductVariantAsset>;
  product: Product;
  linesAggregate: ProductVariantLinesAggregateResponse;
  stocksAggregate: ProductVariantStocksAggregateResponse;
  pricesAggregate: ProductVariantPricesAggregateResponse;
};


export type ProductVariantLinesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<OrderItemFilter>;
  sorting?: Maybe<Array<OrderItemSort>>;
};


export type ProductVariantStocksArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StockKeepingFilter>;
  sorting?: Maybe<Array<StockKeepingSort>>;
};


export type ProductVariantPricesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantPriceFilter>;
  sorting?: Maybe<Array<ProductVariantPriceSort>>;
};


export type ProductVariantLinesAggregateArgs = {
  filter?: Maybe<OrderItemAggregateFilter>;
};


export type ProductVariantStocksAggregateArgs = {
  filter?: Maybe<StockKeepingAggregateFilter>;
};


export type ProductVariantPricesAggregateArgs = {
  filter?: Maybe<ProductVariantPriceAggregateFilter>;
};

export type OrderItemFilter = {
  and?: Maybe<Array<OrderItemFilter>>;
  or?: Maybe<Array<OrderItemFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type OrderItemSort = {
  field: OrderItemSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum OrderItemSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Quantity = 'quantity'
}

export type OrderItemAggregateFilter = {
  and?: Maybe<Array<OrderItemAggregateFilter>>;
  or?: Maybe<Array<OrderItemAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type ProductVariantAsset = {
  __typename?: 'ProductVariantAsset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  asset: Asset;
  variant: ProductVariant;
};

export type ProductVariantPrice = {
  __typename?: 'ProductVariantPrice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  price: Scalars['Float'];
  taxIncluded: Scalars['Boolean'];
  promoprice?: Maybe<PromotionVariantPrice>;
  store: Store;
  tax?: Maybe<TaxRate>;
  variant: ProductVariant;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  variants: Array<ProductVariant>;
  group: ProductOptionGroup;
  variantsAggregate: ProductOptionVariantsAggregateResponse;
};


export type ProductOptionVariantsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantFilter>;
  sorting?: Maybe<Array<ProductVariantSort>>;
};


export type ProductOptionVariantsAggregateArgs = {
  filter?: Maybe<ProductVariantAggregateFilter>;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  options: Array<ProductOption>;
  product: Product;
  optionsAggregate: ProductOptionGroupOptionsAggregateResponse;
};


export type ProductOptionGroupOptionsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductOptionFilter>;
  sorting?: Maybe<Array<ProductOptionSort>>;
};


export type ProductOptionGroupOptionsAggregateArgs = {
  filter?: Maybe<ProductOptionAggregateFilter>;
};

export type ProductOptionFilter = {
  and?: Maybe<Array<ProductOptionFilter>>;
  or?: Maybe<Array<ProductOptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type ProductOptionSort = {
  field: ProductOptionSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductOptionSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  Code = 'code'
}

export type ProductOptionAggregateFilter = {
  and?: Maybe<Array<ProductOptionAggregateFilter>>;
  or?: Maybe<Array<ProductOptionAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type VendorLicense = {
  __typename?: 'VendorLicense';
  id: Scalars['ID'];
  tenureStart: Scalars['DateTime'];
  tenureEnd: Scalars['DateTime'];
  vendor: Vendor;
};

export type VendorPlans = {
  __typename?: 'VendorPlans';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  planValue: Scalars['Float'];
  priceStrategy: Scalars['String'];
  tenureStrategy: VendorPlanTenure;
  licences: Array<VendorLicense>;
  licencesAggregate: VendorPlansLicencesAggregateResponse;
};


export type VendorPlansLicencesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<VendorLicenseFilter>;
  sorting?: Maybe<Array<VendorLicenseSort>>;
};


export type VendorPlansLicencesAggregateArgs = {
  filter?: Maybe<VendorLicenseAggregateFilter>;
};

export enum VendorPlanTenure {
  Monthly = 'MONTHLY',
  Halfyearly = 'HALFYEARLY',
  Annual = 'ANNUAL'
}

export type VendorLicenseFilter = {
  and?: Maybe<Array<VendorLicenseFilter>>;
  or?: Maybe<Array<VendorLicenseFilter>>;
  id?: Maybe<IdFilterComparison>;
  tenureStart?: Maybe<DateFieldComparison>;
  tenureEnd?: Maybe<DateFieldComparison>;
};

export type VendorLicenseSort = {
  field: VendorLicenseSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum VendorLicenseSortFields {
  Id = 'id',
  TenureStart = 'tenureStart',
  TenureEnd = 'tenureEnd'
}

export type VendorLicenseAggregateFilter = {
  and?: Maybe<Array<VendorLicenseAggregateFilter>>;
  or?: Maybe<Array<VendorLicenseAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  tenureStart?: Maybe<DateFieldComparison>;
  tenureEnd?: Maybe<DateFieldComparison>;
};

export type BillingAgreement = {
  __typename?: 'BillingAgreement';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  type: BillingAgreementEnum;
  state: BillingAgreementState;
  collection?: Maybe<Collection>;
  store: Store;
  request: Array<BillingAgreementRequest>;
};

export enum BillingAgreementEnum {
  Planbase = 'PLANBASE',
  Collectionbase = 'COLLECTIONBASE',
  Comissionbase = 'COMISSIONBASE'
}

export enum BillingAgreementState {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type ProductVariantSpecs = {
  __typename?: 'ProductVariantSpecs';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  specs: Scalars['JSON'];
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
};

export type View = {
  __typename?: 'View';
  id: Scalars['ID'];
};

export type BillingAgreementRequest = {
  __typename?: 'BillingAgreementRequest';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  state: BillingAgreementState;
};

export type Cancellation = {
  __typename?: 'Cancellation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  keeping: StockKeeping;
};

export type StockMovement = {
  __typename?: 'StockMovement';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  keeping: StockKeeping;
};

export type Sale = {
  __typename?: 'Sale';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  quantity: Scalars['Float'];
  keeping: StockKeeping;
};

export type Zip = {
  __typename?: 'Zip';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  code: Scalars['Float'];
  vendors: Array<Vendor>;
  vendorsAggregate: ZipVendorsAggregateResponse;
};


export type ZipVendorsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<VendorFilter>;
  sorting?: Maybe<Array<VendorSort>>;
};


export type ZipVendorsAggregateArgs = {
  filter?: Maybe<VendorAggregateFilter>;
};

export type VendorFilter = {
  and?: Maybe<Array<VendorFilter>>;
  or?: Maybe<Array<VendorFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  vendorName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type VendorSort = {
  field: VendorSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum VendorSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  VendorName = 'vendorName',
  PhoneNumber = 'phoneNumber',
  Email = 'email'
}

export type VendorAggregateFilter = {
  and?: Maybe<Array<VendorAggregateFilter>>;
  or?: Maybe<Array<VendorAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  vendorName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type Menu = {
  __typename?: 'Menu';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  targetId: Scalars['String'];
  target: Scalars['String'];
  children: Array<Menu>;
  parent?: Maybe<Menu>;
  childrenAggregate: MenuChildrenAggregateResponse;
};


export type MenuChildrenArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<MenuFilter>;
  sorting?: Maybe<Array<MenuSort>>;
};


export type MenuChildrenAggregateArgs = {
  filter?: Maybe<MenuAggregateFilter>;
};

export type MenuFilter = {
  and?: Maybe<Array<MenuFilter>>;
  or?: Maybe<Array<MenuFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  target?: Maybe<StringFieldComparison>;
};

export type MenuSort = {
  field: MenuSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum MenuSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  TargetId = 'targetId',
  Target = 'target'
}

export type MenuAggregateFilter = {
  and?: Maybe<Array<MenuAggregateFilter>>;
  or?: Maybe<Array<MenuAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  target?: Maybe<StringFieldComparison>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  targetId: Scalars['String'];
  single?: Maybe<Scalars['JSON']>;
  list?: Maybe<Array<Scalars['String']>>;
  pageType: PageType;
  pageCategory: PageCategory;
};

export enum PageType {
  List = 'LIST',
  Single = 'SINGLE'
}

export enum PageCategory {
  Home = 'HOME',
  Category = 'CATEGORY',
  Singleprod = 'SINGLEPROD',
  Prodvariant = 'PRODVARIANT'
}

export type Delivery = {
  __typename?: 'Delivery';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type PromotionVariantPrice = {
  __typename?: 'PromotionVariantPrice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  priceType: Scalars['String'];
  value: Scalars['Float'];
  forever: Scalars['Boolean'];
  startsAt: Scalars['DateTime'];
  endsAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  price: ProductVariantPrice;
};

export type CartPriceRules = {
  __typename?: 'CartPriceRules';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  priceType: Scalars['String'];
  value: Scalars['Float'];
  collection?: Maybe<Collection>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  stores: Array<Store>;
  zones: Array<Zone>;
  storesAggregate: CountryStoresAggregateResponse;
  zonesAggregate: CountryZonesAggregateResponse;
};


export type CountryStoresArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StoreFilter>;
  sorting?: Maybe<Array<StoreSort>>;
};


export type CountryZonesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ZoneFilter>;
  sorting?: Maybe<Array<ZoneSort>>;
};


export type CountryStoresAggregateArgs = {
  filter?: Maybe<StoreAggregateFilter>;
};


export type CountryZonesAggregateArgs = {
  filter?: Maybe<ZoneAggregateFilter>;
};

export type ZoneFilter = {
  and?: Maybe<Array<ZoneFilter>>;
  or?: Maybe<Array<ZoneFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type ZoneSort = {
  field: ZoneSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ZoneSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name'
}

export type ZoneAggregateFilter = {
  and?: Maybe<Array<ZoneAggregateFilter>>;
  or?: Maybe<Array<ZoneAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
  addressLine: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  landmark: Scalars['String'];
  postalCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  alternatePhoneNumber: Scalars['String'];
  defaultShippingAddress: Scalars['Boolean'];
  defaultBillingAddress: Scalars['Boolean'];
  addressType: AddressType;
  users?: Maybe<AddressUsersConnection>;
  usersAggregate: AddressUsersAggregateResponse;
};


export type AddressUsersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<UserFilter>;
  sorting?: Maybe<Array<UserSort>>;
};


export type AddressUsersAggregateArgs = {
  filter?: Maybe<UserAggregateFilter>;
};

export enum AddressType {
  Home = 'HOME',
  Work = 'WORK'
}

export type CursorPaging = {
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: Maybe<Scalars['Int']>;
  /** Paginate last */
  last?: Maybe<Scalars['Int']>;
};


export type UserFilter = {
  and?: Maybe<Array<UserFilter>>;
  or?: Maybe<Array<UserFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  verified?: Maybe<BooleanFieldComparison>;
  verificationToken?: Maybe<StringFieldComparison>;
  passwordResetToken?: Maybe<StringFieldComparison>;
  identifierChangeToken?: Maybe<StringFieldComparison>;
  pendingIdentifier?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
};

export type UserSort = {
  field: UserSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum UserSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Email = 'email',
  Verified = 'verified',
  VerificationToken = 'verificationToken',
  PasswordResetToken = 'passwordResetToken',
  IdentifierChangeToken = 'identifierChangeToken',
  PendingIdentifier = 'pendingIdentifier',
  LastLogin = 'lastLogin',
  FirstName = 'firstName',
  LastName = 'lastName',
  PhoneNumber = 'phoneNumber'
}

export type UserAggregateFilter = {
  and?: Maybe<Array<UserAggregateFilter>>;
  or?: Maybe<Array<UserAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  verified?: Maybe<BooleanFieldComparison>;
  verificationToken?: Maybe<StringFieldComparison>;
  passwordResetToken?: Maybe<StringFieldComparison>;
  identifierChangeToken?: Maybe<StringFieldComparison>;
  pendingIdentifier?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
};

export type AdministratorDto = {
  __typename?: 'AdministratorDto';
  user: User;
  token: Scalars['String'];
  store?: Maybe<Store>;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type AssetDeleteResponse = {
  __typename?: 'AssetDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSONObject']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type AssetCountAggregate = {
  __typename?: 'AssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  fileSize?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Int']>;
};

export type AssetSumAggregate = {
  __typename?: 'AssetSumAggregate';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
};

export type AssetAvgAggregate = {
  __typename?: 'AssetAvgAggregate';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
};

export type AssetMinAggregate = {
  __typename?: 'AssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type AssetMaxAggregate = {
  __typename?: 'AssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileSize?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type AssetAggregateResponse = {
  __typename?: 'AssetAggregateResponse';
  count?: Maybe<AssetCountAggregate>;
  sum?: Maybe<AssetSumAggregate>;
  avg?: Maybe<AssetAvgAggregate>;
  min?: Maybe<AssetMinAggregate>;
  max?: Maybe<AssetMaxAggregate>;
};

export type AssetFeaturedsCountAggregate = {
  __typename?: 'AssetFeaturedsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type AssetFeaturedsMinAggregate = {
  __typename?: 'AssetFeaturedsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetFeaturedsMaxAggregate = {
  __typename?: 'AssetFeaturedsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetFeaturedsAggregateResponse = {
  __typename?: 'AssetFeaturedsAggregateResponse';
  count?: Maybe<AssetFeaturedsCountAggregate>;
  min?: Maybe<AssetFeaturedsMinAggregate>;
  max?: Maybe<AssetFeaturedsMaxAggregate>;
};

export type AssetProductAssetsCountAggregate = {
  __typename?: 'AssetProductAssetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AssetProductAssetsMinAggregate = {
  __typename?: 'AssetProductAssetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssetProductAssetsMaxAggregate = {
  __typename?: 'AssetProductAssetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssetProductAssetsAggregateResponse = {
  __typename?: 'AssetProductAssetsAggregateResponse';
  count?: Maybe<AssetProductAssetsCountAggregate>;
  min?: Maybe<AssetProductAssetsMinAggregate>;
  max?: Maybe<AssetProductAssetsMaxAggregate>;
};

export type RoleDeleteResponse = {
  __typename?: 'RoleDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
  type?: Maybe<RoleType>;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type RoleAggregateResponse = {
  __typename?: 'RoleAggregateResponse';
  count?: Maybe<RoleCountAggregate>;
  min?: Maybe<RoleMinAggregate>;
  max?: Maybe<RoleMaxAggregate>;
};

export type CollectionDeleteResponse = {
  __typename?: 'CollectionDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  inMenu?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Float']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionCountAggregate = {
  __typename?: 'CollectionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  isRoot?: Maybe<Scalars['Int']>;
  inMenu?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionSumAggregate = {
  __typename?: 'CollectionSumAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionAvgAggregate = {
  __typename?: 'CollectionAvgAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionMinAggregate = {
  __typename?: 'CollectionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionMaxAggregate = {
  __typename?: 'CollectionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionAggregateResponse = {
  __typename?: 'CollectionAggregateResponse';
  count?: Maybe<CollectionCountAggregate>;
  sum?: Maybe<CollectionSumAggregate>;
  avg?: Maybe<CollectionAvgAggregate>;
  min?: Maybe<CollectionMinAggregate>;
  max?: Maybe<CollectionMaxAggregate>;
};

export type CollectionChildrenCountAggregate = {
  __typename?: 'CollectionChildrenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  isRoot?: Maybe<Scalars['Int']>;
  inMenu?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionChildrenSumAggregate = {
  __typename?: 'CollectionChildrenSumAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionChildrenAvgAggregate = {
  __typename?: 'CollectionChildrenAvgAggregate';
  position?: Maybe<Scalars['Float']>;
};

export type CollectionChildrenMinAggregate = {
  __typename?: 'CollectionChildrenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionChildrenMaxAggregate = {
  __typename?: 'CollectionChildrenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionChildrenAggregateResponse = {
  __typename?: 'CollectionChildrenAggregateResponse';
  count?: Maybe<CollectionChildrenCountAggregate>;
  sum?: Maybe<CollectionChildrenSumAggregate>;
  avg?: Maybe<CollectionChildrenAvgAggregate>;
  min?: Maybe<CollectionChildrenMinAggregate>;
  max?: Maybe<CollectionChildrenMaxAggregate>;
};

export type CollectionProductsCountAggregate = {
  __typename?: 'CollectionProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type CollectionProductsMinAggregate = {
  __typename?: 'CollectionProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionProductsMaxAggregate = {
  __typename?: 'CollectionProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CollectionProductsAggregateResponse = {
  __typename?: 'CollectionProductsAggregateResponse';
  count?: Maybe<CollectionProductsCountAggregate>;
  min?: Maybe<CollectionProductsMinAggregate>;
  max?: Maybe<CollectionProductsMaxAggregate>;
};

export type CollectionAgreementsCountAggregate = {
  __typename?: 'CollectionAgreementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type CollectionAgreementsSumAggregate = {
  __typename?: 'CollectionAgreementsSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsAvgAggregate = {
  __typename?: 'CollectionAgreementsAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsMinAggregate = {
  __typename?: 'CollectionAgreementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsMaxAggregate = {
  __typename?: 'CollectionAgreementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type CollectionAgreementsAggregateResponse = {
  __typename?: 'CollectionAgreementsAggregateResponse';
  count?: Maybe<CollectionAgreementsCountAggregate>;
  sum?: Maybe<CollectionAgreementsSumAggregate>;
  avg?: Maybe<CollectionAgreementsAvgAggregate>;
  min?: Maybe<CollectionAgreementsMinAggregate>;
  max?: Maybe<CollectionAgreementsMaxAggregate>;
};

export type ChannelDeleteResponse = {
  __typename?: 'ChannelDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
};

export type ChannelCountAggregate = {
  __typename?: 'ChannelCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  defaultLanguageCode?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['Int']>;
  pricesIncludeTax?: Maybe<Scalars['Int']>;
};

export type ChannelMinAggregate = {
  __typename?: 'ChannelMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ChannelMaxAggregate = {
  __typename?: 'ChannelMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ChannelAggregateResponse = {
  __typename?: 'ChannelAggregateResponse';
  count?: Maybe<ChannelCountAggregate>;
  min?: Maybe<ChannelMinAggregate>;
  max?: Maybe<ChannelMaxAggregate>;
};

export type StoreDeleteResponse = {
  __typename?: 'StoreDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
  singleStore?: Maybe<Scalars['Boolean']>;
  rentalStore?: Maybe<Scalars['Boolean']>;
  channelMarkets?: Maybe<Scalars['Boolean']>;
  type?: Maybe<StoreTypeEnum>;
};

export type StoreCountAggregate = {
  __typename?: 'StoreCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type StoreMinAggregate = {
  __typename?: 'StoreMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type StoreMaxAggregate = {
  __typename?: 'StoreMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type StoreAggregateResponse = {
  __typename?: 'StoreAggregateResponse';
  count?: Maybe<StoreCountAggregate>;
  min?: Maybe<StoreMinAggregate>;
  max?: Maybe<StoreMaxAggregate>;
};

export type StoreLinesCountAggregate = {
  __typename?: 'StoreLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type StoreLinesMinAggregate = {
  __typename?: 'StoreLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type StoreLinesMaxAggregate = {
  __typename?: 'StoreLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type StoreLinesAggregateResponse = {
  __typename?: 'StoreLinesAggregateResponse';
  count?: Maybe<StoreLinesCountAggregate>;
  min?: Maybe<StoreLinesMinAggregate>;
  max?: Maybe<StoreLinesMaxAggregate>;
};

export type StorePricesCountAggregate = {
  __typename?: 'StorePricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StorePricesSumAggregate = {
  __typename?: 'StorePricesSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StorePricesAvgAggregate = {
  __typename?: 'StorePricesAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StorePricesMinAggregate = {
  __typename?: 'StorePricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StorePricesMaxAggregate = {
  __typename?: 'StorePricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StorePricesAggregateResponse = {
  __typename?: 'StorePricesAggregateResponse';
  count?: Maybe<StorePricesCountAggregate>;
  sum?: Maybe<StorePricesSumAggregate>;
  avg?: Maybe<StorePricesAvgAggregate>;
  min?: Maybe<StorePricesMinAggregate>;
  max?: Maybe<StorePricesMaxAggregate>;
};

export type StoreSettlementsCountAggregate = {
  __typename?: 'StoreSettlementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StoreSettlementsSumAggregate = {
  __typename?: 'StoreSettlementsSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StoreSettlementsAvgAggregate = {
  __typename?: 'StoreSettlementsAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type StoreSettlementsMinAggregate = {
  __typename?: 'StoreSettlementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSettlementsMaxAggregate = {
  __typename?: 'StoreSettlementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type StoreSettlementsAggregateResponse = {
  __typename?: 'StoreSettlementsAggregateResponse';
  count?: Maybe<StoreSettlementsCountAggregate>;
  sum?: Maybe<StoreSettlementsSumAggregate>;
  avg?: Maybe<StoreSettlementsAvgAggregate>;
  min?: Maybe<StoreSettlementsMinAggregate>;
  max?: Maybe<StoreSettlementsMaxAggregate>;
};

export type StoreSkusCountAggregate = {
  __typename?: 'StoreSkusCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StoreSkusSumAggregate = {
  __typename?: 'StoreSkusSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StoreSkusAvgAggregate = {
  __typename?: 'StoreSkusAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StoreSkusMinAggregate = {
  __typename?: 'StoreSkusMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StoreSkusMaxAggregate = {
  __typename?: 'StoreSkusMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StoreSkusAggregateResponse = {
  __typename?: 'StoreSkusAggregateResponse';
  count?: Maybe<StoreSkusCountAggregate>;
  sum?: Maybe<StoreSkusSumAggregate>;
  avg?: Maybe<StoreSkusAvgAggregate>;
  min?: Maybe<StoreSkusMinAggregate>;
  max?: Maybe<StoreSkusMaxAggregate>;
};

export type TaxCategoryDeleteResponse = {
  __typename?: 'TaxCategoryDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryCountAggregate = {
  __typename?: 'TaxCategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type TaxCategoryMinAggregate = {
  __typename?: 'TaxCategoryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryMaxAggregate = {
  __typename?: 'TaxCategoryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryAggregateResponse = {
  __typename?: 'TaxCategoryAggregateResponse';
  count?: Maybe<TaxCategoryCountAggregate>;
  min?: Maybe<TaxCategoryMinAggregate>;
  max?: Maybe<TaxCategoryMaxAggregate>;
};

export type TaxCategoryRatesCountAggregate = {
  __typename?: 'TaxCategoryRatesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type TaxCategoryRatesSumAggregate = {
  __typename?: 'TaxCategoryRatesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesAvgAggregate = {
  __typename?: 'TaxCategoryRatesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesMinAggregate = {
  __typename?: 'TaxCategoryRatesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesMaxAggregate = {
  __typename?: 'TaxCategoryRatesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxCategoryRatesAggregateResponse = {
  __typename?: 'TaxCategoryRatesAggregateResponse';
  count?: Maybe<TaxCategoryRatesCountAggregate>;
  sum?: Maybe<TaxCategoryRatesSumAggregate>;
  avg?: Maybe<TaxCategoryRatesAvgAggregate>;
  min?: Maybe<TaxCategoryRatesMinAggregate>;
  max?: Maybe<TaxCategoryRatesMaxAggregate>;
};

export type TaxRateDeleteResponse = {
  __typename?: 'TaxRateDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type TaxRateCountAggregate = {
  __typename?: 'TaxRateCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type TaxRateSumAggregate = {
  __typename?: 'TaxRateSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateAvgAggregate = {
  __typename?: 'TaxRateAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateMinAggregate = {
  __typename?: 'TaxRateMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateMaxAggregate = {
  __typename?: 'TaxRateMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaxRateAggregateResponse = {
  __typename?: 'TaxRateAggregateResponse';
  count?: Maybe<TaxRateCountAggregate>;
  sum?: Maybe<TaxRateSumAggregate>;
  avg?: Maybe<TaxRateAvgAggregate>;
  min?: Maybe<TaxRateMinAggregate>;
  max?: Maybe<TaxRateMaxAggregate>;
};

export type TaxRateVariantsCountAggregate = {
  __typename?: 'TaxRateVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type TaxRateVariantsSumAggregate = {
  __typename?: 'TaxRateVariantsSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsAvgAggregate = {
  __typename?: 'TaxRateVariantsAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsMinAggregate = {
  __typename?: 'TaxRateVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsMaxAggregate = {
  __typename?: 'TaxRateVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type TaxRateVariantsAggregateResponse = {
  __typename?: 'TaxRateVariantsAggregateResponse';
  count?: Maybe<TaxRateVariantsCountAggregate>;
  sum?: Maybe<TaxRateVariantsSumAggregate>;
  avg?: Maybe<TaxRateVariantsAvgAggregate>;
  min?: Maybe<TaxRateVariantsMinAggregate>;
  max?: Maybe<TaxRateVariantsMaxAggregate>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  administrator?: Maybe<Administrator>;
  vendor?: Maybe<Vendor>;
  delivery?: Maybe<Delivery>;
  cart?: Maybe<Cart>;
  view?: Maybe<Array<View>>;
  address?: Maybe<Array<Address>>;
  order?: Maybe<Array<Order>>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<Scalars['Int']>;
  identifierChangeToken?: Maybe<Scalars['Int']>;
  pendingIdentifier?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserAggregateResponse = {
  __typename?: 'UserAggregateResponse';
  count?: Maybe<UserCountAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type VendorDto = {
  __typename?: 'VendorDto';
  user: User;
  token: Scalars['String'];
  vendor: Vendor;
};

export type VendorDeleteResponse = {
  __typename?: 'VendorDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VendorCountAggregate = {
  __typename?: 'VendorCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  vendorName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type VendorMinAggregate = {
  __typename?: 'VendorMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VendorMaxAggregate = {
  __typename?: 'VendorMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VendorAggregateResponse = {
  __typename?: 'VendorAggregateResponse';
  count?: Maybe<VendorCountAggregate>;
  min?: Maybe<VendorMinAggregate>;
  max?: Maybe<VendorMaxAggregate>;
};

export type VendorZipsCountAggregate = {
  __typename?: 'VendorZipsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type VendorZipsSumAggregate = {
  __typename?: 'VendorZipsSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsAvgAggregate = {
  __typename?: 'VendorZipsAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsMinAggregate = {
  __typename?: 'VendorZipsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsMaxAggregate = {
  __typename?: 'VendorZipsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type VendorZipsAggregateResponse = {
  __typename?: 'VendorZipsAggregateResponse';
  count?: Maybe<VendorZipsCountAggregate>;
  sum?: Maybe<VendorZipsSumAggregate>;
  avg?: Maybe<VendorZipsAvgAggregate>;
  min?: Maybe<VendorZipsMinAggregate>;
  max?: Maybe<VendorZipsMaxAggregate>;
};

export type ZoneDeleteResponse = {
  __typename?: 'ZoneDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneCountAggregate = {
  __typename?: 'ZoneCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type ZoneMinAggregate = {
  __typename?: 'ZoneMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMaxAggregate = {
  __typename?: 'ZoneMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneAggregateResponse = {
  __typename?: 'ZoneAggregateResponse';
  count?: Maybe<ZoneCountAggregate>;
  min?: Maybe<ZoneMinAggregate>;
  max?: Maybe<ZoneMaxAggregate>;
};

export type ZoneMembersCountAggregate = {
  __typename?: 'ZoneMembersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type ZoneMembersMinAggregate = {
  __typename?: 'ZoneMembersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMembersMaxAggregate = {
  __typename?: 'ZoneMembersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneMembersAggregateResponse = {
  __typename?: 'ZoneMembersAggregateResponse';
  count?: Maybe<ZoneMembersCountAggregate>;
  min?: Maybe<ZoneMembersMinAggregate>;
  max?: Maybe<ZoneMembersMaxAggregate>;
};

export type ZoneStoresCountAggregate = {
  __typename?: 'ZoneStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type ZoneStoresMinAggregate = {
  __typename?: 'ZoneStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZoneStoresMaxAggregate = {
  __typename?: 'ZoneStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type ZoneStoresAggregateResponse = {
  __typename?: 'ZoneStoresAggregateResponse';
  count?: Maybe<ZoneStoresCountAggregate>;
  min?: Maybe<ZoneStoresMinAggregate>;
  max?: Maybe<ZoneStoresMaxAggregate>;
};

export type ZoneTaxratesCountAggregate = {
  __typename?: 'ZoneTaxratesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type ZoneTaxratesSumAggregate = {
  __typename?: 'ZoneTaxratesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesAvgAggregate = {
  __typename?: 'ZoneTaxratesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesMinAggregate = {
  __typename?: 'ZoneTaxratesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesMaxAggregate = {
  __typename?: 'ZoneTaxratesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ZoneTaxratesAggregateResponse = {
  __typename?: 'ZoneTaxratesAggregateResponse';
  count?: Maybe<ZoneTaxratesCountAggregate>;
  sum?: Maybe<ZoneTaxratesSumAggregate>;
  avg?: Maybe<ZoneTaxratesAvgAggregate>;
  min?: Maybe<ZoneTaxratesMinAggregate>;
  max?: Maybe<ZoneTaxratesMaxAggregate>;
};

export type CountryDeleteResponse = {
  __typename?: 'CountryDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryAggregateResponse = {
  __typename?: 'CountryAggregateResponse';
  count?: Maybe<CountryCountAggregate>;
  min?: Maybe<CountryMinAggregate>;
  max?: Maybe<CountryMaxAggregate>;
};

export type CountryStoresCountAggregate = {
  __typename?: 'CountryStoresCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  officialemail?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
  streetAddress1?: Maybe<Scalars['Int']>;
  streetAddress2?: Maybe<Scalars['Int']>;
  GSTIN?: Maybe<Scalars['Int']>;
  singleStore?: Maybe<Scalars['Int']>;
  rentalStore?: Maybe<Scalars['Int']>;
  channelMarkets?: Maybe<Scalars['Int']>;
};

export type CountryStoresMinAggregate = {
  __typename?: 'CountryStoresMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type CountryStoresMaxAggregate = {
  __typename?: 'CountryStoresMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
};

export type CountryStoresAggregateResponse = {
  __typename?: 'CountryStoresAggregateResponse';
  count?: Maybe<CountryStoresCountAggregate>;
  min?: Maybe<CountryStoresMinAggregate>;
  max?: Maybe<CountryStoresMaxAggregate>;
};

export type CountryZonesCountAggregate = {
  __typename?: 'CountryZonesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type CountryZonesMinAggregate = {
  __typename?: 'CountryZonesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryZonesMaxAggregate = {
  __typename?: 'CountryZonesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryZonesAggregateResponse = {
  __typename?: 'CountryZonesAggregateResponse';
  count?: Maybe<CountryZonesCountAggregate>;
  min?: Maybe<CountryZonesMinAggregate>;
  max?: Maybe<CountryZonesMaxAggregate>;
};

export type SeoDeleteResponse = {
  __typename?: 'SeoDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc?: Maybe<Scalars['String']>;
};

export type SeoCountAggregate = {
  __typename?: 'SeoCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  urlKey?: Maybe<Scalars['Int']>;
  metatitle?: Maybe<Scalars['Int']>;
};

export type SeoMinAggregate = {
  __typename?: 'SeoMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
};

export type SeoMaxAggregate = {
  __typename?: 'SeoMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
};

export type SeoAggregateResponse = {
  __typename?: 'SeoAggregateResponse';
  count?: Maybe<SeoCountAggregate>;
  min?: Maybe<SeoMinAggregate>;
  max?: Maybe<SeoMaxAggregate>;
};

export type FacetDeleteResponse = {
  __typename?: 'FacetDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetCountAggregate = {
  __typename?: 'FacetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetMinAggregate = {
  __typename?: 'FacetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetMaxAggregate = {
  __typename?: 'FacetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetAggregateResponse = {
  __typename?: 'FacetAggregateResponse';
  count?: Maybe<FacetCountAggregate>;
  min?: Maybe<FacetMinAggregate>;
  max?: Maybe<FacetMaxAggregate>;
};

export type FacetProductsCountAggregate = {
  __typename?: 'FacetProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type FacetProductsMinAggregate = {
  __typename?: 'FacetProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetProductsMaxAggregate = {
  __typename?: 'FacetProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetProductsAggregateResponse = {
  __typename?: 'FacetProductsAggregateResponse';
  count?: Maybe<FacetProductsCountAggregate>;
  min?: Maybe<FacetProductsMinAggregate>;
  max?: Maybe<FacetProductsMaxAggregate>;
};

export type FacetValuesCountAggregate = {
  __typename?: 'FacetValuesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetValuesMinAggregate = {
  __typename?: 'FacetValuesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValuesMaxAggregate = {
  __typename?: 'FacetValuesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValuesAggregateResponse = {
  __typename?: 'FacetValuesAggregateResponse';
  count?: Maybe<FacetValuesCountAggregate>;
  min?: Maybe<FacetValuesMinAggregate>;
  max?: Maybe<FacetValuesMaxAggregate>;
};

export type FacetValueDeleteResponse = {
  __typename?: 'FacetValueDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueCountAggregate = {
  __typename?: 'FacetValueCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type FacetValueMinAggregate = {
  __typename?: 'FacetValueMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueMaxAggregate = {
  __typename?: 'FacetValueMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type FacetValueAggregateResponse = {
  __typename?: 'FacetValueAggregateResponse';
  count?: Maybe<FacetValueCountAggregate>;
  min?: Maybe<FacetValueMinAggregate>;
  max?: Maybe<FacetValueMaxAggregate>;
};

export type FacetValueProductsCountAggregate = {
  __typename?: 'FacetValueProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type FacetValueProductsMinAggregate = {
  __typename?: 'FacetValueProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValueProductsMaxAggregate = {
  __typename?: 'FacetValueProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FacetValueProductsAggregateResponse = {
  __typename?: 'FacetValueProductsAggregateResponse';
  count?: Maybe<FacetValueProductsCountAggregate>;
  min?: Maybe<FacetValueProductsMinAggregate>;
  max?: Maybe<FacetValueProductsMaxAggregate>;
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductAggregateResponse = {
  __typename?: 'ProductAggregateResponse';
  count?: Maybe<ProductCountAggregate>;
  min?: Maybe<ProductMinAggregate>;
  max?: Maybe<ProductMaxAggregate>;
};

export type ProductOptionsCountAggregate = {
  __typename?: 'ProductOptionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionsMinAggregate = {
  __typename?: 'ProductOptionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionsMaxAggregate = {
  __typename?: 'ProductOptionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionsAggregateResponse = {
  __typename?: 'ProductOptionsAggregateResponse';
  count?: Maybe<ProductOptionsCountAggregate>;
  min?: Maybe<ProductOptionsMinAggregate>;
  max?: Maybe<ProductOptionsMaxAggregate>;
};

export type ProductFacetsCountAggregate = {
  __typename?: 'ProductFacetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductFacetsMinAggregate = {
  __typename?: 'ProductFacetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductFacetsMaxAggregate = {
  __typename?: 'ProductFacetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductFacetsAggregateResponse = {
  __typename?: 'ProductFacetsAggregateResponse';
  count?: Maybe<ProductFacetsCountAggregate>;
  min?: Maybe<ProductFacetsMinAggregate>;
  max?: Maybe<ProductFacetsMaxAggregate>;
};

export type ProductVariantsCountAggregate = {
  __typename?: 'ProductVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductVariantsSumAggregate = {
  __typename?: 'ProductVariantsSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantsAvgAggregate = {
  __typename?: 'ProductVariantsAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantsMinAggregate = {
  __typename?: 'ProductVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantsMaxAggregate = {
  __typename?: 'ProductVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantsAggregateResponse = {
  __typename?: 'ProductVariantsAggregateResponse';
  count?: Maybe<ProductVariantsCountAggregate>;
  sum?: Maybe<ProductVariantsSumAggregate>;
  avg?: Maybe<ProductVariantsAvgAggregate>;
  min?: Maybe<ProductVariantsMinAggregate>;
  max?: Maybe<ProductVariantsMaxAggregate>;
};

export type ProductAssetsCountAggregate = {
  __typename?: 'ProductAssetsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductAssetsMinAggregate = {
  __typename?: 'ProductAssetsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetsMaxAggregate = {
  __typename?: 'ProductAssetsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetsAggregateResponse = {
  __typename?: 'ProductAssetsAggregateResponse';
  count?: Maybe<ProductAssetsCountAggregate>;
  min?: Maybe<ProductAssetsMinAggregate>;
  max?: Maybe<ProductAssetsMaxAggregate>;
};

export type ProductVariantDeleteResponse = {
  __typename?: 'ProductVariantDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  trackInventory?: Maybe<Scalars['Boolean']>;
};

export type ProductVariantCountAggregate = {
  __typename?: 'ProductVariantCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductVariantSumAggregate = {
  __typename?: 'ProductVariantSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantAvgAggregate = {
  __typename?: 'ProductVariantAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductVariantMinAggregate = {
  __typename?: 'ProductVariantMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantMaxAggregate = {
  __typename?: 'ProductVariantMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductVariantAggregateResponse = {
  __typename?: 'ProductVariantAggregateResponse';
  count?: Maybe<ProductVariantCountAggregate>;
  sum?: Maybe<ProductVariantSumAggregate>;
  avg?: Maybe<ProductVariantAvgAggregate>;
  min?: Maybe<ProductVariantMinAggregate>;
  max?: Maybe<ProductVariantMaxAggregate>;
};

export type ProductVariantLinesCountAggregate = {
  __typename?: 'ProductVariantLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ProductVariantLinesSumAggregate = {
  __typename?: 'ProductVariantLinesSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesAvgAggregate = {
  __typename?: 'ProductVariantLinesAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesMinAggregate = {
  __typename?: 'ProductVariantLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesMaxAggregate = {
  __typename?: 'ProductVariantLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ProductVariantLinesAggregateResponse = {
  __typename?: 'ProductVariantLinesAggregateResponse';
  count?: Maybe<ProductVariantLinesCountAggregate>;
  sum?: Maybe<ProductVariantLinesSumAggregate>;
  avg?: Maybe<ProductVariantLinesAvgAggregate>;
  min?: Maybe<ProductVariantLinesMinAggregate>;
  max?: Maybe<ProductVariantLinesMaxAggregate>;
};

export type ProductVariantStocksCountAggregate = {
  __typename?: 'ProductVariantStocksCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type ProductVariantStocksSumAggregate = {
  __typename?: 'ProductVariantStocksSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type ProductVariantStocksAvgAggregate = {
  __typename?: 'ProductVariantStocksAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type ProductVariantStocksMinAggregate = {
  __typename?: 'ProductVariantStocksMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductVariantStocksMaxAggregate = {
  __typename?: 'ProductVariantStocksMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductVariantStocksAggregateResponse = {
  __typename?: 'ProductVariantStocksAggregateResponse';
  count?: Maybe<ProductVariantStocksCountAggregate>;
  sum?: Maybe<ProductVariantStocksSumAggregate>;
  avg?: Maybe<ProductVariantStocksAvgAggregate>;
  min?: Maybe<ProductVariantStocksMinAggregate>;
  max?: Maybe<ProductVariantStocksMaxAggregate>;
};

export type ProductVariantPricesCountAggregate = {
  __typename?: 'ProductVariantPricesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type ProductVariantPricesSumAggregate = {
  __typename?: 'ProductVariantPricesSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesAvgAggregate = {
  __typename?: 'ProductVariantPricesAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesMinAggregate = {
  __typename?: 'ProductVariantPricesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesMaxAggregate = {
  __typename?: 'ProductVariantPricesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPricesAggregateResponse = {
  __typename?: 'ProductVariantPricesAggregateResponse';
  count?: Maybe<ProductVariantPricesCountAggregate>;
  sum?: Maybe<ProductVariantPricesSumAggregate>;
  avg?: Maybe<ProductVariantPricesAvgAggregate>;
  min?: Maybe<ProductVariantPricesMinAggregate>;
  max?: Maybe<ProductVariantPricesMaxAggregate>;
};

export type ProductOptionDeleteResponse = {
  __typename?: 'ProductOptionDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionCountAggregate = {
  __typename?: 'ProductOptionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionMinAggregate = {
  __typename?: 'ProductOptionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionMaxAggregate = {
  __typename?: 'ProductOptionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionAggregateResponse = {
  __typename?: 'ProductOptionAggregateResponse';
  count?: Maybe<ProductOptionCountAggregate>;
  min?: Maybe<ProductOptionMinAggregate>;
  max?: Maybe<ProductOptionMaxAggregate>;
};

export type ProductOptionVariantsCountAggregate = {
  __typename?: 'ProductOptionVariantsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dum_price?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
};

export type ProductOptionVariantsSumAggregate = {
  __typename?: 'ProductOptionVariantsSumAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsAvgAggregate = {
  __typename?: 'ProductOptionVariantsAvgAggregate';
  dum_price?: Maybe<Scalars['Float']>;
};

export type ProductOptionVariantsMinAggregate = {
  __typename?: 'ProductOptionVariantsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductOptionVariantsMaxAggregate = {
  __typename?: 'ProductOptionVariantsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dum_price?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductOptionVariantsAggregateResponse = {
  __typename?: 'ProductOptionVariantsAggregateResponse';
  count?: Maybe<ProductOptionVariantsCountAggregate>;
  sum?: Maybe<ProductOptionVariantsSumAggregate>;
  avg?: Maybe<ProductOptionVariantsAvgAggregate>;
  min?: Maybe<ProductOptionVariantsMinAggregate>;
  max?: Maybe<ProductOptionVariantsMaxAggregate>;
};

export type ProductOptionGroupDeleteResponse = {
  __typename?: 'ProductOptionGroupDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupCountAggregate = {
  __typename?: 'ProductOptionGroupCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroupMinAggregate = {
  __typename?: 'ProductOptionGroupMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupMaxAggregate = {
  __typename?: 'ProductOptionGroupMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupAggregateResponse = {
  __typename?: 'ProductOptionGroupAggregateResponse';
  count?: Maybe<ProductOptionGroupCountAggregate>;
  min?: Maybe<ProductOptionGroupMinAggregate>;
  max?: Maybe<ProductOptionGroupMaxAggregate>;
};

export type ProductOptionGroupOptionsCountAggregate = {
  __typename?: 'ProductOptionGroupOptionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ProductOptionGroupOptionsMinAggregate = {
  __typename?: 'ProductOptionGroupOptionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupOptionsMaxAggregate = {
  __typename?: 'ProductOptionGroupOptionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionGroupOptionsAggregateResponse = {
  __typename?: 'ProductOptionGroupOptionsAggregateResponse';
  count?: Maybe<ProductOptionGroupOptionsCountAggregate>;
  min?: Maybe<ProductOptionGroupOptionsMinAggregate>;
  max?: Maybe<ProductOptionGroupOptionsMaxAggregate>;
};

export type ProductVariantPriceDeleteResponse = {
  __typename?: 'ProductVariantPriceDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
  taxIncluded?: Maybe<Scalars['Boolean']>;
};

export type ProductVariantPriceCountAggregate = {
  __typename?: 'ProductVariantPriceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  taxIncluded?: Maybe<Scalars['Int']>;
};

export type ProductVariantPriceSumAggregate = {
  __typename?: 'ProductVariantPriceSumAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceAvgAggregate = {
  __typename?: 'ProductVariantPriceAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceMinAggregate = {
  __typename?: 'ProductVariantPriceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceMaxAggregate = {
  __typename?: 'ProductVariantPriceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantPriceAggregateResponse = {
  __typename?: 'ProductVariantPriceAggregateResponse';
  count?: Maybe<ProductVariantPriceCountAggregate>;
  sum?: Maybe<ProductVariantPriceSumAggregate>;
  avg?: Maybe<ProductVariantPriceAvgAggregate>;
  min?: Maybe<ProductVariantPriceMinAggregate>;
  max?: Maybe<ProductVariantPriceMaxAggregate>;
};

export type ProductVariantAssetDeleteResponse = {
  __typename?: 'ProductVariantAssetDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantAssetCountAggregate = {
  __typename?: 'ProductVariantAssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductVariantAssetMinAggregate = {
  __typename?: 'ProductVariantAssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantAssetMaxAggregate = {
  __typename?: 'ProductVariantAssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantAssetAggregateResponse = {
  __typename?: 'ProductVariantAssetAggregateResponse';
  count?: Maybe<ProductVariantAssetCountAggregate>;
  min?: Maybe<ProductVariantAssetMinAggregate>;
  max?: Maybe<ProductVariantAssetMaxAggregate>;
};

export type ProductAssetDeleteResponse = {
  __typename?: 'ProductAssetDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetCountAggregate = {
  __typename?: 'ProductAssetCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductAssetMinAggregate = {
  __typename?: 'ProductAssetMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetMaxAggregate = {
  __typename?: 'ProductAssetMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAssetAggregateResponse = {
  __typename?: 'ProductAssetAggregateResponse';
  count?: Maybe<ProductAssetCountAggregate>;
  min?: Maybe<ProductAssetMinAggregate>;
  max?: Maybe<ProductAssetMaxAggregate>;
};

export type VendorPlansDeleteResponse = {
  __typename?: 'VendorPlansDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
  priceStrategy?: Maybe<Scalars['String']>;
  tenureStrategy?: Maybe<VendorPlanTenure>;
};

export type VendorPlansCountAggregate = {
  __typename?: 'VendorPlansCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  planValue?: Maybe<Scalars['Int']>;
};

export type VendorPlansSumAggregate = {
  __typename?: 'VendorPlansSumAggregate';
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansAvgAggregate = {
  __typename?: 'VendorPlansAvgAggregate';
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansMinAggregate = {
  __typename?: 'VendorPlansMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansMaxAggregate = {
  __typename?: 'VendorPlansMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  planValue?: Maybe<Scalars['Float']>;
};

export type VendorPlansAggregateResponse = {
  __typename?: 'VendorPlansAggregateResponse';
  count?: Maybe<VendorPlansCountAggregate>;
  sum?: Maybe<VendorPlansSumAggregate>;
  avg?: Maybe<VendorPlansAvgAggregate>;
  min?: Maybe<VendorPlansMinAggregate>;
  max?: Maybe<VendorPlansMaxAggregate>;
};

export type VendorPlansLicencesCountAggregate = {
  __typename?: 'VendorPlansLicencesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  tenureStart?: Maybe<Scalars['Int']>;
  tenureEnd?: Maybe<Scalars['Int']>;
};

export type VendorPlansLicencesMinAggregate = {
  __typename?: 'VendorPlansLicencesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansLicencesMaxAggregate = {
  __typename?: 'VendorPlansLicencesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansLicencesAggregateResponse = {
  __typename?: 'VendorPlansLicencesAggregateResponse';
  count?: Maybe<VendorPlansLicencesCountAggregate>;
  min?: Maybe<VendorPlansLicencesMinAggregate>;
  max?: Maybe<VendorPlansLicencesMaxAggregate>;
};

export type VendorLicenseDeleteResponse = {
  __typename?: 'VendorLicenseDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorLicenseCountAggregate = {
  __typename?: 'VendorLicenseCountAggregate';
  id?: Maybe<Scalars['Int']>;
  tenureStart?: Maybe<Scalars['Int']>;
  tenureEnd?: Maybe<Scalars['Int']>;
};

export type VendorLicenseMinAggregate = {
  __typename?: 'VendorLicenseMinAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorLicenseMaxAggregate = {
  __typename?: 'VendorLicenseMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  tenureStart?: Maybe<Scalars['DateTime']>;
  tenureEnd?: Maybe<Scalars['DateTime']>;
};

export type VendorLicenseAggregateResponse = {
  __typename?: 'VendorLicenseAggregateResponse';
  count?: Maybe<VendorLicenseCountAggregate>;
  min?: Maybe<VendorLicenseMinAggregate>;
  max?: Maybe<VendorLicenseMaxAggregate>;
};

export type MenuResponseTypes = {
  __typename?: 'MenuResponseTypes';
  menu: Scalars['String'];
};

export type StockKeepingDeleteResponse = {
  __typename?: 'StockKeepingDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  multiple?: Maybe<Scalars['Boolean']>;
  backorder?: Maybe<Scalars['Boolean']>;
  stockstatus?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingCountAggregate = {
  __typename?: 'StockKeepingCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  available_quantity?: Maybe<Scalars['Int']>;
  threshold?: Maybe<Scalars['Int']>;
  multiple?: Maybe<Scalars['Int']>;
  backorder?: Maybe<Scalars['Int']>;
  stockstatus?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type StockKeepingSumAggregate = {
  __typename?: 'StockKeepingSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StockKeepingAvgAggregate = {
  __typename?: 'StockKeepingAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
};

export type StockKeepingMinAggregate = {
  __typename?: 'StockKeepingMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingMaxAggregate = {
  __typename?: 'StockKeepingMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StockKeepingAggregateResponse = {
  __typename?: 'StockKeepingAggregateResponse';
  count?: Maybe<StockKeepingCountAggregate>;
  sum?: Maybe<StockKeepingSumAggregate>;
  avg?: Maybe<StockKeepingAvgAggregate>;
  min?: Maybe<StockKeepingMinAggregate>;
  max?: Maybe<StockKeepingMaxAggregate>;
};

export type StockKeepingSalesCountAggregate = {
  __typename?: 'StockKeepingSalesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingSalesSumAggregate = {
  __typename?: 'StockKeepingSalesSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesAvgAggregate = {
  __typename?: 'StockKeepingSalesAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesMinAggregate = {
  __typename?: 'StockKeepingSalesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesMaxAggregate = {
  __typename?: 'StockKeepingSalesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingSalesAggregateResponse = {
  __typename?: 'StockKeepingSalesAggregateResponse';
  count?: Maybe<StockKeepingSalesCountAggregate>;
  sum?: Maybe<StockKeepingSalesSumAggregate>;
  avg?: Maybe<StockKeepingSalesAvgAggregate>;
  min?: Maybe<StockKeepingSalesMinAggregate>;
  max?: Maybe<StockKeepingSalesMaxAggregate>;
};

export type StockKeepingCancelsCountAggregate = {
  __typename?: 'StockKeepingCancelsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingCancelsSumAggregate = {
  __typename?: 'StockKeepingCancelsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsAvgAggregate = {
  __typename?: 'StockKeepingCancelsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsMinAggregate = {
  __typename?: 'StockKeepingCancelsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsMaxAggregate = {
  __typename?: 'StockKeepingCancelsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingCancelsAggregateResponse = {
  __typename?: 'StockKeepingCancelsAggregateResponse';
  count?: Maybe<StockKeepingCancelsCountAggregate>;
  sum?: Maybe<StockKeepingCancelsSumAggregate>;
  avg?: Maybe<StockKeepingCancelsAvgAggregate>;
  min?: Maybe<StockKeepingCancelsMinAggregate>;
  max?: Maybe<StockKeepingCancelsMaxAggregate>;
};

export type StockKeepingMovementsCountAggregate = {
  __typename?: 'StockKeepingMovementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockKeepingMovementsSumAggregate = {
  __typename?: 'StockKeepingMovementsSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsAvgAggregate = {
  __typename?: 'StockKeepingMovementsAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsMinAggregate = {
  __typename?: 'StockKeepingMovementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsMaxAggregate = {
  __typename?: 'StockKeepingMovementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockKeepingMovementsAggregateResponse = {
  __typename?: 'StockKeepingMovementsAggregateResponse';
  count?: Maybe<StockKeepingMovementsCountAggregate>;
  sum?: Maybe<StockKeepingMovementsSumAggregate>;
  avg?: Maybe<StockKeepingMovementsAvgAggregate>;
  min?: Maybe<StockKeepingMovementsMinAggregate>;
  max?: Maybe<StockKeepingMovementsMaxAggregate>;
};

export type SaleDeleteResponse = {
  __typename?: 'SaleDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleMaxAggregate = {
  __typename?: 'SaleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SaleAggregateResponse = {
  __typename?: 'SaleAggregateResponse';
  count?: Maybe<SaleCountAggregate>;
  sum?: Maybe<SaleSumAggregate>;
  avg?: Maybe<SaleAvgAggregate>;
  min?: Maybe<SaleMinAggregate>;
  max?: Maybe<SaleMaxAggregate>;
};

export type StockMovementDeleteResponse = {
  __typename?: 'StockMovementDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementCountAggregate = {
  __typename?: 'StockMovementCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockMovementSumAggregate = {
  __typename?: 'StockMovementSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementAvgAggregate = {
  __typename?: 'StockMovementAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementMinAggregate = {
  __typename?: 'StockMovementMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementMaxAggregate = {
  __typename?: 'StockMovementMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementAggregateResponse = {
  __typename?: 'StockMovementAggregateResponse';
  count?: Maybe<StockMovementCountAggregate>;
  sum?: Maybe<StockMovementSumAggregate>;
  avg?: Maybe<StockMovementAvgAggregate>;
  min?: Maybe<StockMovementMinAggregate>;
  max?: Maybe<StockMovementMaxAggregate>;
};

export type CancellationDeleteResponse = {
  __typename?: 'CancellationDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationCountAggregate = {
  __typename?: 'CancellationCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CancellationSumAggregate = {
  __typename?: 'CancellationSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationAvgAggregate = {
  __typename?: 'CancellationAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationMinAggregate = {
  __typename?: 'CancellationMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationMaxAggregate = {
  __typename?: 'CancellationMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationAggregateResponse = {
  __typename?: 'CancellationAggregateResponse';
  count?: Maybe<CancellationCountAggregate>;
  sum?: Maybe<CancellationSumAggregate>;
  avg?: Maybe<CancellationAvgAggregate>;
  min?: Maybe<CancellationMinAggregate>;
  max?: Maybe<CancellationMaxAggregate>;
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderAggregateResponse = {
  __typename?: 'OrderAggregateResponse';
  count?: Maybe<OrderCountAggregate>;
  sum?: Maybe<OrderSumAggregate>;
  avg?: Maybe<OrderAvgAggregate>;
  min?: Maybe<OrderMinAggregate>;
  max?: Maybe<OrderMaxAggregate>;
};

export type OrderLinesCountAggregate = {
  __typename?: 'OrderLinesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type OrderLinesMinAggregate = {
  __typename?: 'OrderLinesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLinesMaxAggregate = {
  __typename?: 'OrderLinesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLinesAggregateResponse = {
  __typename?: 'OrderLinesAggregateResponse';
  count?: Maybe<OrderLinesCountAggregate>;
  min?: Maybe<OrderLinesMinAggregate>;
  max?: Maybe<OrderLinesMaxAggregate>;
};

export type ZipDeleteResponse = {
  __typename?: 'ZipDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type ZipCountAggregate = {
  __typename?: 'ZipCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
};

export type ZipSumAggregate = {
  __typename?: 'ZipSumAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type ZipAvgAggregate = {
  __typename?: 'ZipAvgAggregate';
  code?: Maybe<Scalars['Float']>;
};

export type ZipMinAggregate = {
  __typename?: 'ZipMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type ZipMaxAggregate = {
  __typename?: 'ZipMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type ZipAggregateResponse = {
  __typename?: 'ZipAggregateResponse';
  count?: Maybe<ZipCountAggregate>;
  sum?: Maybe<ZipSumAggregate>;
  avg?: Maybe<ZipAvgAggregate>;
  min?: Maybe<ZipMinAggregate>;
  max?: Maybe<ZipMaxAggregate>;
};

export type ZipVendorsCountAggregate = {
  __typename?: 'ZipVendorsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  vendorName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type ZipVendorsMinAggregate = {
  __typename?: 'ZipVendorsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ZipVendorsMaxAggregate = {
  __typename?: 'ZipVendorsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vendorName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ZipVendorsAggregateResponse = {
  __typename?: 'ZipVendorsAggregateResponse';
  count?: Maybe<ZipVendorsCountAggregate>;
  min?: Maybe<ZipVendorsMinAggregate>;
  max?: Maybe<ZipVendorsMaxAggregate>;
};

export type MenuDeleteResponse = {
  __typename?: 'MenuDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuCountAggregate = {
  __typename?: 'MenuCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

export type MenuMinAggregate = {
  __typename?: 'MenuMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuMaxAggregate = {
  __typename?: 'MenuMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuAggregateResponse = {
  __typename?: 'MenuAggregateResponse';
  count?: Maybe<MenuCountAggregate>;
  min?: Maybe<MenuMinAggregate>;
  max?: Maybe<MenuMaxAggregate>;
};

export type MenuChildrenCountAggregate = {
  __typename?: 'MenuChildrenCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
};

export type MenuChildrenMinAggregate = {
  __typename?: 'MenuChildrenMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuChildrenMaxAggregate = {
  __typename?: 'MenuChildrenMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type MenuChildrenAggregateResponse = {
  __typename?: 'MenuChildrenAggregateResponse';
  count?: Maybe<MenuChildrenCountAggregate>;
  min?: Maybe<MenuChildrenMinAggregate>;
  max?: Maybe<MenuChildrenMaxAggregate>;
};

export type PageDeleteResponse = {
  __typename?: 'PageDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  single?: Maybe<Scalars['JSON']>;
  list?: Maybe<Array<Scalars['String']>>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type PageCountAggregate = {
  __typename?: 'PageCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  targetId?: Maybe<Scalars['Int']>;
  pageType?: Maybe<Scalars['Int']>;
  pageCategory?: Maybe<Scalars['Int']>;
};

export type PageMinAggregate = {
  __typename?: 'PageMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type PageMaxAggregate = {
  __typename?: 'PageMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type PageAggregateResponse = {
  __typename?: 'PageAggregateResponse';
  count?: Maybe<PageCountAggregate>;
  min?: Maybe<PageMinAggregate>;
  max?: Maybe<PageMaxAggregate>;
};

export type AddressDeleteResponse = {
  __typename?: 'AddressDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  addressType?: Maybe<AddressType>;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['Int']>;
  addressLine?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  landmark?: Maybe<Scalars['Int']>;
  postalCode?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  alternatePhoneNumber?: Maybe<Scalars['Int']>;
  defaultShippingAddress?: Maybe<Scalars['Int']>;
  defaultBillingAddress?: Maybe<Scalars['Int']>;
  addressType?: Maybe<Scalars['Int']>;
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  addressType?: Maybe<AddressType>;
};

export type AddressAggregateResponse = {
  __typename?: 'AddressAggregateResponse';
  count?: Maybe<AddressCountAggregate>;
  min?: Maybe<AddressMinAggregate>;
  max?: Maybe<AddressMaxAggregate>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** The node containing the User */
  node: User;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type AddressUsersConnection = {
  __typename?: 'AddressUsersConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<UserEdge>;
};

export type AddressUsersCountAggregate = {
  __typename?: 'AddressUsersCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
  verificationToken?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<Scalars['Int']>;
  identifierChangeToken?: Maybe<Scalars['Int']>;
  pendingIdentifier?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
};

export type AddressUsersMinAggregate = {
  __typename?: 'AddressUsersMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type AddressUsersMaxAggregate = {
  __typename?: 'AddressUsersMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  identifierChangeToken?: Maybe<Scalars['String']>;
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type AddressUsersAggregateResponse = {
  __typename?: 'AddressUsersAggregateResponse';
  count?: Maybe<AddressUsersCountAggregate>;
  min?: Maybe<AddressUsersMinAggregate>;
  max?: Maybe<AddressUsersMaxAggregate>;
};

export type SettlementsDeleteResponse = {
  __typename?: 'SettlementsDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type SettlementsCountAggregate = {
  __typename?: 'SettlementsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  taxamount?: Maybe<Scalars['Int']>;
  finalamount?: Maybe<Scalars['Int']>;
  transactionID?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type SettlementsSumAggregate = {
  __typename?: 'SettlementsSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type SettlementsAvgAggregate = {
  __typename?: 'SettlementsAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
};

export type SettlementsMinAggregate = {
  __typename?: 'SettlementsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type SettlementsMaxAggregate = {
  __typename?: 'SettlementsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  taxamount?: Maybe<Scalars['Float']>;
  finalamount?: Maybe<Scalars['Float']>;
  transactionID?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  type?: Maybe<SettlementType>;
};

export type SettlementsAggregateResponse = {
  __typename?: 'SettlementsAggregateResponse';
  count?: Maybe<SettlementsCountAggregate>;
  sum?: Maybe<SettlementsSumAggregate>;
  avg?: Maybe<SettlementsAvgAggregate>;
  min?: Maybe<SettlementsMinAggregate>;
  max?: Maybe<SettlementsMaxAggregate>;
};

export type OrderLineDeleteResponse = {
  __typename?: 'OrderLineDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceField?: Maybe<Scalars['JSON']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLineCountAggregate = {
  __typename?: 'OrderLineCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
};

export type OrderLineMinAggregate = {
  __typename?: 'OrderLineMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLineMaxAggregate = {
  __typename?: 'OrderLineMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
};

export type OrderLineAggregateResponse = {
  __typename?: 'OrderLineAggregateResponse';
  count?: Maybe<OrderLineCountAggregate>;
  min?: Maybe<OrderLineMinAggregate>;
  max?: Maybe<OrderLineMaxAggregate>;
};

export type OrderItemDeleteResponse = {
  __typename?: 'OrderItemDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type OrderItemSumAggregate = {
  __typename?: 'OrderItemSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemAvgAggregate = {
  __typename?: 'OrderItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemAggregateResponse = {
  __typename?: 'OrderItemAggregateResponse';
  count?: Maybe<OrderItemCountAggregate>;
  sum?: Maybe<OrderItemSumAggregate>;
  avg?: Maybe<OrderItemAvgAggregate>;
  min?: Maybe<OrderItemMinAggregate>;
  max?: Maybe<OrderItemMaxAggregate>;
};

export type PromotionVariantPriceDeleteResponse = {
  __typename?: 'PromotionVariantPriceDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  forever?: Maybe<Scalars['Boolean']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type PromotionVariantPriceCountAggregate = {
  __typename?: 'PromotionVariantPriceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  priceType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  forever?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['Int']>;
  endsAt?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Int']>;
};

export type PromotionVariantPriceSumAggregate = {
  __typename?: 'PromotionVariantPriceSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPriceAvgAggregate = {
  __typename?: 'PromotionVariantPriceAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type PromotionVariantPriceMinAggregate = {
  __typename?: 'PromotionVariantPriceMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionVariantPriceMaxAggregate = {
  __typename?: 'PromotionVariantPriceMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionVariantPriceAggregateResponse = {
  __typename?: 'PromotionVariantPriceAggregateResponse';
  count?: Maybe<PromotionVariantPriceCountAggregate>;
  sum?: Maybe<PromotionVariantPriceSumAggregate>;
  avg?: Maybe<PromotionVariantPriceAvgAggregate>;
  min?: Maybe<PromotionVariantPriceMinAggregate>;
  max?: Maybe<PromotionVariantPriceMaxAggregate>;
};

export type CartPriceRulesDeleteResponse = {
  __typename?: 'CartPriceRulesDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesCountAggregate = {
  __typename?: 'CartPriceRulesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  priceType?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type CartPriceRulesSumAggregate = {
  __typename?: 'CartPriceRulesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesAvgAggregate = {
  __typename?: 'CartPriceRulesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesMinAggregate = {
  __typename?: 'CartPriceRulesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesMaxAggregate = {
  __typename?: 'CartPriceRulesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CartPriceRulesAggregateResponse = {
  __typename?: 'CartPriceRulesAggregateResponse';
  count?: Maybe<CartPriceRulesCountAggregate>;
  sum?: Maybe<CartPriceRulesSumAggregate>;
  avg?: Maybe<CartPriceRulesAvgAggregate>;
  min?: Maybe<CartPriceRulesMinAggregate>;
  max?: Maybe<CartPriceRulesMaxAggregate>;
};

export type Query = {
  __typename?: 'Query';
  GetAdministratorData: Administrator;
  GetAllAdministrator: Array<Administrator>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  assetAggregate: AssetAggregateResponse;
  role?: Maybe<Role>;
  roles: Array<Role>;
  roleAggregate: RoleAggregateResponse;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  collectionAggregate: CollectionAggregateResponse;
  GetCollectionTree: Array<Collection>;
  channel?: Maybe<Channel>;
  channels: Array<Channel>;
  channelAggregate: ChannelAggregateResponse;
  store?: Maybe<Store>;
  stores: Array<Store>;
  storeAggregate: StoreAggregateResponse;
  GetDefaultStore: Store;
  taxCategory?: Maybe<TaxCategory>;
  taxCategories: Array<TaxCategory>;
  taxCategoryAggregate: TaxCategoryAggregateResponse;
  taxRate?: Maybe<TaxRate>;
  taxRates: Array<TaxRate>;
  taxRateAggregate: TaxRateAggregateResponse;
  GetAllTaxRates: Array<TaxRate>;
  GetAllTaxCategory: Array<TaxCategory>;
  user?: Maybe<User>;
  users: Array<User>;
  userAggregate: UserAggregateResponse;
  GetCurrentUser: User;
  vendor?: Maybe<Vendor>;
  vendors: Array<Vendor>;
  vendorAggregate: VendorAggregateResponse;
  GetVendorInfo?: Maybe<Vendor>;
  zone?: Maybe<Zone>;
  zones: Array<Zone>;
  zoneAggregate: ZoneAggregateResponse;
  ZoneFindMany: Array<Zone>;
  ZoneFindOne: Zone;
  country?: Maybe<Country>;
  countries: Array<Country>;
  countryAggregate: CountryAggregateResponse;
  GetAllCountries: Array<Country>;
  seo?: Maybe<Seo>;
  seos: Array<Seo>;
  seoAggregate: SeoAggregateResponse;
  facet?: Maybe<Facet>;
  facets: Array<Facet>;
  facetAggregate: FacetAggregateResponse;
  facetValue?: Maybe<FacetValue>;
  facetValues: Array<FacetValue>;
  facetValueAggregate: FacetValueAggregateResponse;
  product?: Maybe<Product>;
  products: Array<Product>;
  productAggregate: ProductAggregateResponse;
  productVariant?: Maybe<ProductVariant>;
  productVariants: Array<ProductVariant>;
  productVariantAggregate: ProductVariantAggregateResponse;
  productOption?: Maybe<ProductOption>;
  productOptions: Array<ProductOption>;
  productOptionAggregate: ProductOptionAggregateResponse;
  productOptionGroup?: Maybe<ProductOptionGroup>;
  productOptionGroups: Array<ProductOptionGroup>;
  productOptionGroupAggregate: ProductOptionGroupAggregateResponse;
  productVariantPrice?: Maybe<ProductVariantPrice>;
  productVariantPrices: Array<ProductVariantPrice>;
  productVariantPriceAggregate: ProductVariantPriceAggregateResponse;
  GetPriceForVariant?: Maybe<ProductVariantPrice>;
  productVariantAsset?: Maybe<ProductVariantAsset>;
  productVariantAssets: Array<ProductVariantAsset>;
  productVariantAssetAggregate: ProductVariantAssetAggregateResponse;
  productAsset?: Maybe<ProductAsset>;
  productAssets: Array<ProductAsset>;
  productAssetAggregate: ProductAssetAggregateResponse;
  vendorPlans: Array<VendorPlans>;
  vendorPlansAggregate: VendorPlansAggregateResponse;
  FindAllVendorPlans: Array<VendorPlans>;
  GetVendorPlansForRegistration: Array<VendorPlans>;
  vendorLicense?: Maybe<VendorLicense>;
  vendorLicenses: Array<VendorLicense>;
  vendorLicenseAggregate: VendorLicenseAggregateResponse;
  GetBillingAgreementByVendor: Array<BillingAgreement>;
  GetBillingAgreement: BillingAgreement;
  GetBillingRequestForAgreement: Array<BillingAgreementRequest>;
  stockKeeping?: Maybe<StockKeeping>;
  stockKeepings: Array<StockKeeping>;
  stockKeepingAggregate: StockKeepingAggregateResponse;
  getStockKeepingVendor?: Maybe<StockKeeping>;
  getStockKeepingByStore: Array<StockKeeping>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  saleAggregate: SaleAggregateResponse;
  stockMovement?: Maybe<StockMovement>;
  stockMovements: Array<StockMovement>;
  stockMovementAggregate: StockMovementAggregateResponse;
  cancellation?: Maybe<Cancellation>;
  cancellations: Array<Cancellation>;
  cancellationAggregate: CancellationAggregateResponse;
  order?: Maybe<Order>;
  orders: Array<Order>;
  orderAggregate: OrderAggregateResponse;
  zip?: Maybe<Zip>;
  zips: Array<Zip>;
  zipAggregate: ZipAggregateResponse;
  findAllZip: Array<Zip>;
  menu?: Maybe<Menu>;
  menus: Array<Menu>;
  menuAggregate: MenuAggregateResponse;
  GetMenuTree: MenuResponseTypes;
  page?: Maybe<Page>;
  pages: Array<Page>;
  pageAggregate: PageAggregateResponse;
  getHomePage: Page;
  address?: Maybe<Address>;
  addresses: Array<Address>;
  addressAggregate: AddressAggregateResponse;
  settlements: Array<Settlements>;
  settlementsAggregate: SettlementsAggregateResponse;
  orderLine?: Maybe<OrderLine>;
  orderLines: Array<OrderLine>;
  orderLineAggregate: OrderLineAggregateResponse;
  orderItem?: Maybe<OrderItem>;
  orderItems: Array<OrderItem>;
  orderItemAggregate: OrderItemAggregateResponse;
  promotionVariantPrice?: Maybe<PromotionVariantPrice>;
  promotionVariantPrices: Array<PromotionVariantPrice>;
  promotionVariantPriceAggregate: PromotionVariantPriceAggregateResponse;
  cartPriceRules: Array<CartPriceRules>;
  cartPriceRulesAggregate: CartPriceRulesAggregateResponse;
};


export type QueryGetAllAdministratorArgs = {
  search?: Maybe<Scalars['String']>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<AssetFilter>;
  sorting?: Maybe<Array<AssetSort>>;
};


export type QueryAssetAggregateArgs = {
  filter?: Maybe<AssetAggregateFilter>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<RoleFilter>;
  sorting?: Maybe<Array<RoleSort>>;
};


export type QueryRoleAggregateArgs = {
  filter?: Maybe<RoleAggregateFilter>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CollectionFilter>;
  sorting?: Maybe<Array<CollectionSort>>;
};


export type QueryCollectionAggregateArgs = {
  filter?: Maybe<CollectionAggregateFilter>;
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ChannelFilter>;
  sorting?: Maybe<Array<ChannelSort>>;
};


export type QueryChannelAggregateArgs = {
  filter?: Maybe<ChannelAggregateFilter>;
};


export type QueryStoreArgs = {
  id: Scalars['ID'];
};


export type QueryStoresArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StoreFilter>;
  sorting?: Maybe<Array<StoreSort>>;
};


export type QueryStoreAggregateArgs = {
  filter?: Maybe<StoreAggregateFilter>;
};


export type QueryTaxCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryTaxCategoriesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<TaxCategoryFilter>;
  sorting?: Maybe<Array<TaxCategorySort>>;
};


export type QueryTaxCategoryAggregateArgs = {
  filter?: Maybe<TaxCategoryAggregateFilter>;
};


export type QueryTaxRateArgs = {
  id: Scalars['ID'];
};


export type QueryTaxRatesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<TaxRateFilter>;
  sorting?: Maybe<Array<TaxRateSort>>;
};


export type QueryTaxRateAggregateArgs = {
  filter?: Maybe<TaxRateAggregateFilter>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<UserFilter>;
  sorting?: Maybe<Array<UserSort>>;
};


export type QueryUserAggregateArgs = {
  filter?: Maybe<UserAggregateFilter>;
};


export type QueryVendorArgs = {
  id: Scalars['ID'];
};


export type QueryVendorsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<VendorFilter>;
  sorting?: Maybe<Array<VendorSort>>;
};


export type QueryVendorAggregateArgs = {
  filter?: Maybe<VendorAggregateFilter>;
};


export type QueryZoneArgs = {
  id: Scalars['ID'];
};


export type QueryZonesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ZoneFilter>;
  sorting?: Maybe<Array<ZoneSort>>;
};


export type QueryZoneAggregateArgs = {
  filter?: Maybe<ZoneAggregateFilter>;
};


export type QueryZoneFindOneArgs = {
  id: Scalars['ID'];
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryCountriesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CountryFilter>;
  sorting?: Maybe<Array<CountrySort>>;
};


export type QueryCountryAggregateArgs = {
  filter?: Maybe<CountryAggregateFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['ID'];
};


export type QuerySeosArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<SeoFilter>;
  sorting?: Maybe<Array<SeoSort>>;
};


export type QuerySeoAggregateArgs = {
  filter?: Maybe<SeoAggregateFilter>;
};


export type QueryFacetArgs = {
  id: Scalars['ID'];
};


export type QueryFacetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<FacetFilter>;
  sorting?: Maybe<Array<FacetSort>>;
};


export type QueryFacetAggregateArgs = {
  filter?: Maybe<FacetAggregateFilter>;
};


export type QueryFacetValueArgs = {
  id: Scalars['ID'];
};


export type QueryFacetValuesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<FacetValueFilter>;
  sorting?: Maybe<Array<FacetValueSort>>;
};


export type QueryFacetValueAggregateArgs = {
  filter?: Maybe<FacetValueAggregateFilter>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type QueryProductAggregateArgs = {
  filter?: Maybe<ProductAggregateFilter>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantFilter>;
  sorting?: Maybe<Array<ProductVariantSort>>;
};


export type QueryProductVariantAggregateArgs = {
  filter?: Maybe<ProductVariantAggregateFilter>;
};


export type QueryProductOptionArgs = {
  id: Scalars['ID'];
};


export type QueryProductOptionsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductOptionFilter>;
  sorting?: Maybe<Array<ProductOptionSort>>;
};


export type QueryProductOptionAggregateArgs = {
  filter?: Maybe<ProductOptionAggregateFilter>;
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryProductOptionGroupsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductOptionGroupFilter>;
  sorting?: Maybe<Array<ProductOptionGroupSort>>;
};


export type QueryProductOptionGroupAggregateArgs = {
  filter?: Maybe<ProductOptionGroupAggregateFilter>;
};


export type QueryProductVariantPriceArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantPricesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantPriceFilter>;
  sorting?: Maybe<Array<ProductVariantPriceSort>>;
};


export type QueryProductVariantPriceAggregateArgs = {
  filter?: Maybe<ProductVariantPriceAggregateFilter>;
};


export type QueryGetPriceForVariantArgs = {
  prodId?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
};


export type QueryProductVariantAssetArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantAssetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductVariantAssetFilter>;
  sorting?: Maybe<Array<ProductVariantAssetSort>>;
};


export type QueryProductVariantAssetAggregateArgs = {
  filter?: Maybe<ProductVariantAssetAggregateFilter>;
};


export type QueryProductAssetArgs = {
  id: Scalars['ID'];
};


export type QueryProductAssetsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ProductAssetFilter>;
  sorting?: Maybe<Array<ProductAssetSort>>;
};


export type QueryProductAssetAggregateArgs = {
  filter?: Maybe<ProductAssetAggregateFilter>;
};


export type QueryVendorPlansArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<VendorPlansFilter>;
  sorting?: Maybe<Array<VendorPlansSort>>;
};


export type QueryVendorPlansAggregateArgs = {
  filter?: Maybe<VendorPlansAggregateFilter>;
};


export type QueryVendorLicenseArgs = {
  id: Scalars['ID'];
};


export type QueryVendorLicensesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<VendorLicenseFilter>;
  sorting?: Maybe<Array<VendorLicenseSort>>;
};


export type QueryVendorLicenseAggregateArgs = {
  filter?: Maybe<VendorLicenseAggregateFilter>;
};


export type QueryGetBillingAgreementArgs = {
  id: Scalars['ID'];
};


export type QueryGetBillingRequestForAgreementArgs = {
  id: Scalars['String'];
};


export type QueryStockKeepingArgs = {
  id: Scalars['ID'];
};


export type QueryStockKeepingsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StockKeepingFilter>;
  sorting?: Maybe<Array<StockKeepingSort>>;
};


export type QueryStockKeepingAggregateArgs = {
  filter?: Maybe<StockKeepingAggregateFilter>;
};


export type QueryGetStockKeepingVendorArgs = {
  vendorId?: Maybe<Scalars['ID']>;
  variantId: Scalars['ID'];
};


export type QuerySaleArgs = {
  id: Scalars['ID'];
};


export type QuerySalesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<SaleFilter>;
  sorting?: Maybe<Array<SaleSort>>;
};


export type QuerySaleAggregateArgs = {
  filter?: Maybe<SaleAggregateFilter>;
};


export type QueryStockMovementArgs = {
  id: Scalars['ID'];
};


export type QueryStockMovementsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<StockMovementFilter>;
  sorting?: Maybe<Array<StockMovementSort>>;
};


export type QueryStockMovementAggregateArgs = {
  filter?: Maybe<StockMovementAggregateFilter>;
};


export type QueryCancellationArgs = {
  id: Scalars['ID'];
};


export type QueryCancellationsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CancellationFilter>;
  sorting?: Maybe<Array<CancellationSort>>;
};


export type QueryCancellationAggregateArgs = {
  filter?: Maybe<CancellationAggregateFilter>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<OrderFilter>;
  sorting?: Maybe<Array<OrderSort>>;
};


export type QueryOrderAggregateArgs = {
  filter?: Maybe<OrderAggregateFilter>;
};


export type QueryZipArgs = {
  id: Scalars['ID'];
};


export type QueryZipsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ZipFilter>;
  sorting?: Maybe<Array<ZipSort>>;
};


export type QueryZipAggregateArgs = {
  filter?: Maybe<ZipAggregateFilter>;
};


export type QueryMenuArgs = {
  id: Scalars['ID'];
};


export type QueryMenusArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<MenuFilter>;
  sorting?: Maybe<Array<MenuSort>>;
};


export type QueryMenuAggregateArgs = {
  filter?: Maybe<MenuAggregateFilter>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<PageFilter>;
  sorting?: Maybe<Array<PageSort>>;
};


export type QueryPageAggregateArgs = {
  filter?: Maybe<PageAggregateFilter>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<AddressFilter>;
  sorting?: Maybe<Array<AddressSort>>;
};


export type QueryAddressAggregateArgs = {
  filter?: Maybe<AddressAggregateFilter>;
};


export type QuerySettlementsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<SettlementsFilter>;
  sorting?: Maybe<Array<SettlementsSort>>;
};


export type QuerySettlementsAggregateArgs = {
  filter?: Maybe<SettlementsAggregateFilter>;
};


export type QueryOrderLineArgs = {
  id: Scalars['ID'];
};


export type QueryOrderLinesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<OrderLineFilter>;
  sorting?: Maybe<Array<OrderLineSort>>;
};


export type QueryOrderLineAggregateArgs = {
  filter?: Maybe<OrderLineAggregateFilter>;
};


export type QueryOrderItemArgs = {
  id: Scalars['ID'];
};


export type QueryOrderItemsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<OrderItemFilter>;
  sorting?: Maybe<Array<OrderItemSort>>;
};


export type QueryOrderItemAggregateArgs = {
  filter?: Maybe<OrderItemAggregateFilter>;
};


export type QueryPromotionVariantPriceArgs = {
  id: Scalars['ID'];
};


export type QueryPromotionVariantPricesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<PromotionVariantPriceFilter>;
  sorting?: Maybe<Array<PromotionVariantPriceSort>>;
};


export type QueryPromotionVariantPriceAggregateArgs = {
  filter?: Maybe<PromotionVariantPriceAggregateFilter>;
};


export type QueryCartPriceRulesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CartPriceRulesFilter>;
  sorting?: Maybe<Array<CartPriceRulesSort>>;
};


export type QueryCartPriceRulesAggregateArgs = {
  filter?: Maybe<CartPriceRulesAggregateFilter>;
};

export type AssetFilter = {
  and?: Maybe<Array<AssetFilter>>;
  or?: Maybe<Array<AssetFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
  mimeType?: Maybe<StringFieldComparison>;
  width?: Maybe<NumberFieldComparison>;
  height?: Maybe<NumberFieldComparison>;
  fileSize?: Maybe<NumberFieldComparison>;
  source?: Maybe<StringFieldComparison>;
  preview?: Maybe<StringFieldComparison>;
};

export type AssetSort = {
  field: AssetSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AssetSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  Type = 'type',
  MimeType = 'mimeType',
  Width = 'width',
  Height = 'height',
  FileSize = 'fileSize',
  Source = 'source',
  Preview = 'preview'
}

export type AssetAggregateFilter = {
  and?: Maybe<Array<AssetAggregateFilter>>;
  or?: Maybe<Array<AssetAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
  mimeType?: Maybe<StringFieldComparison>;
  width?: Maybe<NumberFieldComparison>;
  height?: Maybe<NumberFieldComparison>;
  fileSize?: Maybe<NumberFieldComparison>;
  source?: Maybe<StringFieldComparison>;
  preview?: Maybe<StringFieldComparison>;
};

export type RoleFilter = {
  and?: Maybe<Array<RoleFilter>>;
  or?: Maybe<Array<RoleFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type RoleSort = {
  field: RoleSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum RoleSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Code = 'code',
  Description = 'description'
}

export type RoleAggregateFilter = {
  and?: Maybe<Array<RoleAggregateFilter>>;
  or?: Maybe<Array<RoleAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type ChannelFilter = {
  and?: Maybe<Array<ChannelFilter>>;
  or?: Maybe<Array<ChannelFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  token?: Maybe<StringFieldComparison>;
  defaultLanguageCode?: Maybe<StringFieldComparison>;
  currencyCode?: Maybe<StringFieldComparison>;
  pricesIncludeTax?: Maybe<BooleanFieldComparison>;
};

export type ChannelSort = {
  field: ChannelSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ChannelSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Code = 'code',
  Token = 'token',
  DefaultLanguageCode = 'defaultLanguageCode',
  CurrencyCode = 'currencyCode',
  PricesIncludeTax = 'pricesIncludeTax'
}

export type ChannelAggregateFilter = {
  and?: Maybe<Array<ChannelAggregateFilter>>;
  or?: Maybe<Array<ChannelAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  token?: Maybe<StringFieldComparison>;
  defaultLanguageCode?: Maybe<StringFieldComparison>;
  currencyCode?: Maybe<StringFieldComparison>;
  pricesIncludeTax?: Maybe<BooleanFieldComparison>;
};

export type TaxCategoryFilter = {
  and?: Maybe<Array<TaxCategoryFilter>>;
  or?: Maybe<Array<TaxCategoryFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type TaxCategorySort = {
  field: TaxCategorySortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum TaxCategorySortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name'
}

export type TaxCategoryAggregateFilter = {
  and?: Maybe<Array<TaxCategoryAggregateFilter>>;
  or?: Maybe<Array<TaxCategoryAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type SeoFilter = {
  and?: Maybe<Array<SeoFilter>>;
  or?: Maybe<Array<SeoFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  urlKey?: Maybe<StringFieldComparison>;
  metatitle?: Maybe<StringFieldComparison>;
};

export type SeoSort = {
  field: SeoSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum SeoSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  DeletedAt = 'deletedAt',
  UrlKey = 'urlKey',
  Metatitle = 'metatitle'
}

export type SeoAggregateFilter = {
  and?: Maybe<Array<SeoAggregateFilter>>;
  or?: Maybe<Array<SeoAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  urlKey?: Maybe<StringFieldComparison>;
  metatitle?: Maybe<StringFieldComparison>;
};

export type FacetFilter = {
  and?: Maybe<Array<FacetFilter>>;
  or?: Maybe<Array<FacetFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type FacetSort = {
  field: FacetSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum FacetSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  IsPrivate = 'isPrivate',
  Code = 'code'
}

export type FacetAggregateFilter = {
  and?: Maybe<Array<FacetAggregateFilter>>;
  or?: Maybe<Array<FacetAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type ProductVariantAssetFilter = {
  and?: Maybe<Array<ProductVariantAssetFilter>>;
  or?: Maybe<Array<ProductVariantAssetFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductVariantAssetSort = {
  field: ProductVariantAssetSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ProductVariantAssetSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type ProductVariantAssetAggregateFilter = {
  and?: Maybe<Array<ProductVariantAssetAggregateFilter>>;
  or?: Maybe<Array<ProductVariantAssetAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type VendorPlansFilter = {
  and?: Maybe<Array<VendorPlansFilter>>;
  or?: Maybe<Array<VendorPlansFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  planValue?: Maybe<NumberFieldComparison>;
};

export type VendorPlansSort = {
  field: VendorPlansSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum VendorPlansSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  IsActive = 'isActive',
  Name = 'name',
  PlanValue = 'planValue'
}

export type VendorPlansAggregateFilter = {
  and?: Maybe<Array<VendorPlansAggregateFilter>>;
  or?: Maybe<Array<VendorPlansAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  planValue?: Maybe<NumberFieldComparison>;
};

export type OrderFilter = {
  and?: Maybe<Array<OrderFilter>>;
  or?: Maybe<Array<OrderFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  totalPrice?: Maybe<NumberFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  line?: Maybe<OrderFilterOrderLineFilter>;
};

export type OrderFilterOrderLineFilter = {
  and?: Maybe<Array<OrderFilterOrderLineFilter>>;
  or?: Maybe<Array<OrderFilterOrderLineFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  stage?: Maybe<StringFieldComparison>;
};

export type OrderSort = {
  field: OrderSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum OrderSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  TotalPrice = 'totalPrice',
  Address = 'address'
}

export type OrderAggregateFilter = {
  and?: Maybe<Array<OrderAggregateFilter>>;
  or?: Maybe<Array<OrderAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  totalPrice?: Maybe<NumberFieldComparison>;
  address?: Maybe<StringFieldComparison>;
};

export type PageFilter = {
  and?: Maybe<Array<PageFilter>>;
  or?: Maybe<Array<PageFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  pageType?: Maybe<PageTypeFilterComparison>;
  pageCategory?: Maybe<PageCategoryFilterComparison>;
};

export type PageTypeFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<PageType>;
  neq?: Maybe<PageType>;
  gt?: Maybe<PageType>;
  gte?: Maybe<PageType>;
  lt?: Maybe<PageType>;
  lte?: Maybe<PageType>;
  like?: Maybe<PageType>;
  notLike?: Maybe<PageType>;
  iLike?: Maybe<PageType>;
  notILike?: Maybe<PageType>;
  in?: Maybe<Array<PageType>>;
  notIn?: Maybe<Array<PageType>>;
};

export type PageCategoryFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<PageCategory>;
  neq?: Maybe<PageCategory>;
  gt?: Maybe<PageCategory>;
  gte?: Maybe<PageCategory>;
  lt?: Maybe<PageCategory>;
  lte?: Maybe<PageCategory>;
  like?: Maybe<PageCategory>;
  notLike?: Maybe<PageCategory>;
  iLike?: Maybe<PageCategory>;
  notILike?: Maybe<PageCategory>;
  in?: Maybe<Array<PageCategory>>;
  notIn?: Maybe<Array<PageCategory>>;
};

export type PageSort = {
  field: PageSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum PageSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  TargetId = 'targetId',
  PageType = 'pageType',
  PageCategory = 'pageCategory'
}

export type PageAggregateFilter = {
  and?: Maybe<Array<PageAggregateFilter>>;
  or?: Maybe<Array<PageAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  pageType?: Maybe<PageTypeFilterComparison>;
  pageCategory?: Maybe<PageCategoryFilterComparison>;
};

export type AddressFilter = {
  and?: Maybe<Array<AddressFilter>>;
  or?: Maybe<Array<AddressFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fullName?: Maybe<StringFieldComparison>;
  addressLine?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  landmark?: Maybe<StringFieldComparison>;
  postalCode?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  alternatePhoneNumber?: Maybe<StringFieldComparison>;
  defaultShippingAddress?: Maybe<BooleanFieldComparison>;
  defaultBillingAddress?: Maybe<BooleanFieldComparison>;
  addressType?: Maybe<AddressTypeFilterComparison>;
};

export type AddressTypeFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<AddressType>;
  neq?: Maybe<AddressType>;
  gt?: Maybe<AddressType>;
  gte?: Maybe<AddressType>;
  lt?: Maybe<AddressType>;
  lte?: Maybe<AddressType>;
  like?: Maybe<AddressType>;
  notLike?: Maybe<AddressType>;
  iLike?: Maybe<AddressType>;
  notILike?: Maybe<AddressType>;
  in?: Maybe<Array<AddressType>>;
  notIn?: Maybe<Array<AddressType>>;
};

export type AddressSort = {
  field: AddressSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AddressSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  FullName = 'fullName',
  AddressLine = 'addressLine',
  City = 'city',
  State = 'state',
  Landmark = 'landmark',
  PostalCode = 'postalCode',
  PhoneNumber = 'phoneNumber',
  AlternatePhoneNumber = 'alternatePhoneNumber',
  DefaultShippingAddress = 'defaultShippingAddress',
  DefaultBillingAddress = 'defaultBillingAddress',
  AddressType = 'addressType'
}

export type AddressAggregateFilter = {
  and?: Maybe<Array<AddressAggregateFilter>>;
  or?: Maybe<Array<AddressAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fullName?: Maybe<StringFieldComparison>;
  addressLine?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  landmark?: Maybe<StringFieldComparison>;
  postalCode?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  alternatePhoneNumber?: Maybe<StringFieldComparison>;
  defaultShippingAddress?: Maybe<BooleanFieldComparison>;
  defaultBillingAddress?: Maybe<BooleanFieldComparison>;
  addressType?: Maybe<AddressTypeFilterComparison>;
};

export type PromotionVariantPriceFilter = {
  and?: Maybe<Array<PromotionVariantPriceFilter>>;
  or?: Maybe<Array<PromotionVariantPriceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  forever?: Maybe<BooleanFieldComparison>;
  startsAt?: Maybe<DateFieldComparison>;
  endsAt?: Maybe<DateFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type PromotionVariantPriceSort = {
  field: PromotionVariantPriceSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum PromotionVariantPriceSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  PriceType = 'priceType',
  Value = 'value',
  Forever = 'forever',
  StartsAt = 'startsAt',
  EndsAt = 'endsAt',
  Enabled = 'enabled'
}

export type PromotionVariantPriceAggregateFilter = {
  and?: Maybe<Array<PromotionVariantPriceAggregateFilter>>;
  or?: Maybe<Array<PromotionVariantPriceAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  forever?: Maybe<BooleanFieldComparison>;
  startsAt?: Maybe<DateFieldComparison>;
  endsAt?: Maybe<DateFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type CartPriceRulesFilter = {
  and?: Maybe<Array<CartPriceRulesFilter>>;
  or?: Maybe<Array<CartPriceRulesFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type CartPriceRulesSort = {
  field: CartPriceRulesSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CartPriceRulesSortFields {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  PriceType = 'priceType',
  Value = 'value'
}

export type CartPriceRulesAggregateFilter = {
  and?: Maybe<Array<CartPriceRulesAggregateFilter>>;
  or?: Maybe<Array<CartPriceRulesAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  administratorLogin: AdministratorDto;
  createAdministrator: Administrator;
  updateAdministratorPassword: User;
  removeFeaturedsFromAsset: Asset;
  removeProductAssetsFromAsset: Asset;
  addFeaturedsToAsset: Asset;
  addProductAssetsToAsset: Asset;
  createAsset: Asset;
  createRole: Role;
  updateRole: Role;
  deleteOneCollection: CollectionDeleteResponse;
  deleteManyCollections: DeleteManyResponse;
  updateOneCollection: Collection;
  updateManyCollections: UpdateManyResponse;
  createOneCollection: Collection;
  createManyCollections: Array<Collection>;
  removeChildrenFromCollection: Collection;
  removeProductsFromCollection: Collection;
  removeAgreementsFromCollection: Collection;
  removeCartPriceFromCollection: Collection;
  removeSeoFromCollection: Collection;
  removeParentFromCollection: Collection;
  addChildrenToCollection: Collection;
  addProductsToCollection: Collection;
  addAgreementsToCollection: Collection;
  setCartPriceOnCollection: Collection;
  setSeoOnCollection: Collection;
  setParentOnCollection: Collection;
  AddParentToChildCollection: Collection;
  deleteOneChannel: ChannelDeleteResponse;
  deleteManyChannels: DeleteManyResponse;
  updateOneChannel: Channel;
  updateManyChannels: UpdateManyResponse;
  createOneChannel: Channel;
  createManyChannels: Array<Channel>;
  deleteOneStore: StoreDeleteResponse;
  deleteManyStores: DeleteManyResponse;
  updateOneStore: Store;
  updateManyStores: UpdateManyResponse;
  createOneStore: Store;
  createManyStores: Array<Store>;
  removeLinesFromStore: Store;
  removePricesFromStore: Store;
  removeSettlementsFromStore: Store;
  removeSkusFromStore: Store;
  removeBalanceFromStore: Store;
  removeCountryFromStore: Store;
  addLinesToStore: Store;
  addPricesToStore: Store;
  addSettlementsToStore: Store;
  addSkusToStore: Store;
  setBalanceOnStore: Store;
  setCountryOnStore: Store;
  CreateDefaultStore: Store;
  deleteOneTaxCategory: TaxCategoryDeleteResponse;
  deleteManyTaxCategories: DeleteManyResponse;
  updateOneTaxCategory: TaxCategory;
  updateManyTaxCategories: UpdateManyResponse;
  createOneTaxCategory: TaxCategory;
  createManyTaxCategories: Array<TaxCategory>;
  removeRatesFromTaxCategory: TaxCategory;
  addRatesToTaxCategory: TaxCategory;
  deleteOneTaxRate: TaxRateDeleteResponse;
  deleteManyTaxRates: DeleteManyResponse;
  updateOneTaxRate: TaxRate;
  updateManyTaxRates: UpdateManyResponse;
  createOneTaxRate: TaxRate;
  createManyTaxRates: Array<TaxRate>;
  removeVariantsFromTaxRate: TaxRate;
  removeZoneFromTaxRate: TaxRate;
  removeCategoryFromTaxRate: TaxRate;
  addVariantsToTaxRate: TaxRate;
  setZoneOnTaxRate: TaxRate;
  setCategoryOnTaxRate: TaxRate;
  deleteOneUser: UserDeleteResponse;
  deleteManyUsers: DeleteManyResponse;
  removeAddressFromUser: User;
  removeVendorFromUser: User;
  removeAdministratorFromUser: User;
  setAddressOnUser: User;
  setVendorOnUser: User;
  setAdministratorOnUser: User;
  removeZipsFromVendor: Vendor;
  removeStoreFromVendor: Vendor;
  removeLicenseFromVendor: Vendor;
  removeUserFromVendor: Vendor;
  addZipsToVendor: Vendor;
  setStoreOnVendor: Vendor;
  setLicenseOnVendor: Vendor;
  setUserOnVendor: Vendor;
  LoginVendor: VendorDto;
  RegisterVendor: VendorDto;
  deleteOneZone: ZoneDeleteResponse;
  deleteManyZones: DeleteManyResponse;
  updateOneZone: Zone;
  updateManyZones: UpdateManyResponse;
  createOneZone: Zone;
  createManyZones: Array<Zone>;
  removeMembersFromZone: Zone;
  removeStoresFromZone: Zone;
  removeTaxratesFromZone: Zone;
  addMembersToZone: Zone;
  addStoresToZone: Zone;
  addTaxratesToZone: Zone;
  AddCountryToZone: Zone;
  deleteOneCountry: CountryDeleteResponse;
  deleteManyCountries: DeleteManyResponse;
  updateOneCountry: Country;
  updateManyCountries: UpdateManyResponse;
  createOneCountry: Country;
  createManyCountries: Array<Country>;
  removeStoresFromCountry: Country;
  removeZonesFromCountry: Country;
  addStoresToCountry: Country;
  addZonesToCountry: Country;
  deleteOneSeo: SeoDeleteResponse;
  deleteManySeos: DeleteManyResponse;
  updateOneSeo: Seo;
  updateManySeos: UpdateManyResponse;
  createOneSeo: Seo;
  createManySeos: Array<Seo>;
  removeVariantFromSeo: Seo;
  removeCollectionFromSeo: Seo;
  setVariantOnSeo: Seo;
  setCollectionOnSeo: Seo;
  createProductSeo: Seo;
  updateProductSeo: Seo;
  deleteOneFacet: FacetDeleteResponse;
  deleteManyFacets: DeleteManyResponse;
  updateOneFacet: Facet;
  updateManyFacets: UpdateManyResponse;
  createOneFacet: Facet;
  createManyFacets: Array<Facet>;
  removeProductsFromFacet: Facet;
  removeValuesFromFacet: Facet;
  addProductsToFacet: Facet;
  addValuesToFacet: Facet;
  deleteOneFacetValue: FacetValueDeleteResponse;
  deleteManyFacetValues: DeleteManyResponse;
  updateOneFacetValue: FacetValue;
  updateManyFacetValues: UpdateManyResponse;
  createOneFacetValue: FacetValue;
  createManyFacetValues: Array<FacetValue>;
  removeProductsFromFacetValue: FacetValue;
  removeFacetFromFacetValue: FacetValue;
  addProductsToFacetValue: FacetValue;
  setFacetOnFacetValue: FacetValue;
  deleteOneProduct: ProductDeleteResponse;
  deleteManyProducts: DeleteManyResponse;
  updateOneProduct: Product;
  updateManyProducts: UpdateManyResponse;
  createOneProduct: Product;
  createManyProducts: Array<Product>;
  removeOptionsFromProduct: Product;
  removeFacetsFromProduct: Product;
  removeVariantsFromProduct: Product;
  removeAssetsFromProduct: Product;
  removeCollectionFromProduct: Product;
  removeFeaturedAssetFromProduct: Product;
  addOptionsToProduct: Product;
  addFacetsToProduct: Product;
  addVariantsToProduct: Product;
  addAssetsToProduct: Product;
  setCollectionOnProduct: Product;
  setFeaturedAssetOnProduct: Product;
  CreateProduct: Product;
  UpdateProductCollection: Product;
  updateProduct: Product;
  deleteOneProductVariant: ProductVariantDeleteResponse;
  deleteManyProductVariants: DeleteManyResponse;
  removeLinesFromProductVariant: ProductVariant;
  removeStocksFromProductVariant: ProductVariant;
  removePricesFromProductVariant: ProductVariant;
  removeSeoFromProductVariant: ProductVariant;
  removeSpecsFromProductVariant: ProductVariant;
  removeAssetFromProductVariant: ProductVariant;
  removeProductFromProductVariant: ProductVariant;
  addLinesToProductVariant: ProductVariant;
  addStocksToProductVariant: ProductVariant;
  addPricesToProductVariant: ProductVariant;
  setSeoOnProductVariant: ProductVariant;
  setSpecsOnProductVariant: ProductVariant;
  setAssetOnProductVariant: ProductVariant;
  setProductOnProductVariant: ProductVariant;
  CreateProductVariants: Array<ProductVariant>;
  CreateProductVariantSpecification: ProductVariantSpecs;
  UpdateProductVariantSpecification: ProductVariantSpecs;
  deleteOneProductOption: ProductOptionDeleteResponse;
  deleteManyProductOptions: DeleteManyResponse;
  updateOneProductOption: ProductOption;
  updateManyProductOptions: UpdateManyResponse;
  createOneProductOption: ProductOption;
  createManyProductOptions: Array<ProductOption>;
  removeVariantsFromProductOption: ProductOption;
  removeGroupFromProductOption: ProductOption;
  addVariantsToProductOption: ProductOption;
  setGroupOnProductOption: ProductOption;
  deleteOneProductOptionGroup: ProductOptionGroupDeleteResponse;
  deleteManyProductOptionGroups: DeleteManyResponse;
  updateOneProductOptionGroup: ProductOptionGroup;
  updateManyProductOptionGroups: UpdateManyResponse;
  createOneProductOptionGroup: ProductOptionGroup;
  createManyProductOptionGroups: Array<ProductOptionGroup>;
  removeOptionsFromProductOptionGroup: ProductOptionGroup;
  removeProductFromProductOptionGroup: ProductOptionGroup;
  addOptionsToProductOptionGroup: ProductOptionGroup;
  setProductOnProductOptionGroup: ProductOptionGroup;
  deleteOneProductVariantPrice: ProductVariantPriceDeleteResponse;
  deleteManyProductVariantPrices: DeleteManyResponse;
  updateOneProductVariantPrice: ProductVariantPrice;
  updateManyProductVariantPrices: UpdateManyResponse;
  createOneProductVariantPrice: ProductVariantPrice;
  createManyProductVariantPrices: Array<ProductVariantPrice>;
  removePromopriceFromProductVariantPrice: ProductVariantPrice;
  removeStoreFromProductVariantPrice: ProductVariantPrice;
  removeTaxFromProductVariantPrice: ProductVariantPrice;
  removeVariantFromProductVariantPrice: ProductVariantPrice;
  setPromopriceOnProductVariantPrice: ProductVariantPrice;
  setStoreOnProductVariantPrice: ProductVariantPrice;
  setTaxOnProductVariantPrice: ProductVariantPrice;
  setVariantOnProductVariantPrice: ProductVariantPrice;
  CreateVariantPrice: ProductVariantPrice;
  UpdateVariantPrice: ProductVariantPrice;
  removeAssetFromProductVariantAsset: ProductVariantAsset;
  removeVariantFromProductVariantAsset: ProductVariantAsset;
  setAssetOnProductVariantAsset: ProductVariantAsset;
  setVariantOnProductVariantAsset: ProductVariantAsset;
  CreateProductVariantAsset: ProductVariantAsset;
  deleteOneProductAsset: ProductAssetDeleteResponse;
  deleteManyProductAssets: DeleteManyResponse;
  updateOneProductAsset: ProductAsset;
  updateManyProductAssets: UpdateManyResponse;
  createOneProductAsset: ProductAsset;
  createManyProductAssets: Array<ProductAsset>;
  removeAssetFromProductAsset: ProductAsset;
  removeProductFromProductAsset: ProductAsset;
  setAssetOnProductAsset: ProductAsset;
  setProductOnProductAsset: ProductAsset;
  removeLicencesFromVendorPlans: VendorPlans;
  addLicencesToVendorPlans: VendorPlans;
  CreatePlan: VendorPlans;
  UpdatePlan: VendorPlans;
  removeVendorFromVendorLicense: VendorLicense;
  setVendorOnVendorLicense: VendorLicense;
  CreateBillingRequest: BillingAgreementRequest;
  UpdateBillingRequest: BillingAgreementRequest;
  deleteOneStockKeeping: StockKeepingDeleteResponse;
  deleteManyStockKeepings: DeleteManyResponse;
  updateOneStockKeeping: StockKeeping;
  updateManyStockKeepings: UpdateManyResponse;
  removeSalesFromStockKeeping: StockKeeping;
  removeCancelsFromStockKeeping: StockKeeping;
  removeMovementsFromStockKeeping: StockKeeping;
  removeStoreFromStockKeeping: StockKeeping;
  removeVariantFromStockKeeping: StockKeeping;
  addSalesToStockKeeping: StockKeeping;
  addCancelsToStockKeeping: StockKeeping;
  addMovementsToStockKeeping: StockKeeping;
  setStoreOnStockKeeping: StockKeeping;
  setVariantOnStockKeeping: StockKeeping;
  createOrUpdateStock: StockKeeping;
  deleteOneSale: SaleDeleteResponse;
  deleteManySales: DeleteManyResponse;
  updateOneSale: Sale;
  updateManySales: UpdateManyResponse;
  createOneSale: Sale;
  createManySales: Array<Sale>;
  removeKeepingFromSale: Sale;
  setKeepingOnSale: Sale;
  deleteOneStockMovement: StockMovementDeleteResponse;
  deleteManyStockMovements: DeleteManyResponse;
  updateOneStockMovement: StockMovement;
  updateManyStockMovements: UpdateManyResponse;
  createOneStockMovement: StockMovement;
  createManyStockMovements: Array<StockMovement>;
  removeKeepingFromStockMovement: StockMovement;
  setKeepingOnStockMovement: StockMovement;
  deleteOneCancellation: CancellationDeleteResponse;
  deleteManyCancellations: DeleteManyResponse;
  updateOneCancellation: Cancellation;
  updateManyCancellations: UpdateManyResponse;
  createOneCancellation: Cancellation;
  createManyCancellations: Array<Cancellation>;
  removeKeepingFromCancellation: Cancellation;
  setKeepingOnCancellation: Cancellation;
  removeLinesFromOrder: Order;
  removeUserFromOrder: Order;
  addLinesToOrder: Order;
  setUserOnOrder: Order;
  createOrderAdmin: Order;
  deleteOneZip: ZipDeleteResponse;
  deleteManyZips: DeleteManyResponse;
  updateOneZip: Zip;
  updateManyZips: UpdateManyResponse;
  createOneZip: Zip;
  createManyZips: Array<Zip>;
  removeVendorsFromZip: Zip;
  addVendorsToZip: Zip;
  CreateZipToVendor: Vendor;
  deleteOneMenu: MenuDeleteResponse;
  deleteManyMenus: DeleteManyResponse;
  updateOneMenu: Menu;
  updateManyMenus: UpdateManyResponse;
  createOneMenu: Menu;
  createManyMenus: Array<Menu>;
  removeChildrenFromMenu: Menu;
  removeParentFromMenu: Menu;
  addChildrenToMenu: Menu;
  setParentOnMenu: Menu;
  CreateMenuChildNode: Menu;
  deleteOnePage: PageDeleteResponse;
  deleteManyPages: DeleteManyResponse;
  updateOnePage: Page;
  updateManyPages: UpdateManyResponse;
  createOnePage: Page;
  createManyPages: Array<Page>;
  deleteOneAddress: AddressDeleteResponse;
  deleteManyAddresses: DeleteManyResponse;
  updateOneAddress: Address;
  updateManyAddresses: UpdateManyResponse;
  createOneAddress: Address;
  createManyAddresses: Array<Address>;
  removeUsersFromAddress: Address;
  addUsersToAddress: Address;
  removeStoreFromSettlements: Settlements;
  setStoreOnSettlements: Settlements;
  updateOneOrderLine: OrderLine;
  updateManyOrderLines: UpdateManyResponse;
  removeStoreFromOrderLine: OrderLine;
  removeItemFromOrderLine: OrderLine;
  removeOrderFromOrderLine: OrderLine;
  setStoreOnOrderLine: OrderLine;
  setItemOnOrderLine: OrderLine;
  setOrderOnOrderLine: OrderLine;
  removeLineFromOrderItem: OrderItem;
  removeTaxCategoryFromOrderItem: OrderItem;
  removeProductVariantFromOrderItem: OrderItem;
  setLineOnOrderItem: OrderItem;
  setTaxCategoryOnOrderItem: OrderItem;
  setProductVariantOnOrderItem: OrderItem;
  deleteOnePromotionVariantPrice: PromotionVariantPriceDeleteResponse;
  deleteManyPromotionVariantPrices: DeleteManyResponse;
  updateOnePromotionVariantPrice: PromotionVariantPrice;
  updateManyPromotionVariantPrices: UpdateManyResponse;
  createOnePromotionVariantPrice: PromotionVariantPrice;
  createManyPromotionVariantPrices: Array<PromotionVariantPrice>;
  removePriceFromPromotionVariantPrice: PromotionVariantPrice;
  setPriceOnPromotionVariantPrice: PromotionVariantPrice;
  deleteOneCartPriceRules: CartPriceRulesDeleteResponse;
  deleteManyCartPriceRules: DeleteManyResponse;
  updateOneCartPriceRules: CartPriceRules;
  updateManyCartPriceRules: UpdateManyResponse;
  createOneCartPriceRules: CartPriceRules;
  createManyCartPriceRules: Array<CartPriceRules>;
  removeCollectionFromCartPriceRules: CartPriceRules;
  setCollectionOnCartPriceRules: CartPriceRules;
};


export type MutationAdministratorLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateAdministratorArgs = {
  type: AdministratorEnum;
  phone: Scalars['String'];
  email: Scalars['String'];
  lname: Scalars['String'];
  fname: Scalars['String'];
};


export type MutationUpdateAdministratorPasswordArgs = {
  newpassword: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRemoveFeaturedsFromAssetArgs = {
  input: RelationsInput;
};


export type MutationRemoveProductAssetsFromAssetArgs = {
  input: RelationsInput;
};


export type MutationAddFeaturedsToAssetArgs = {
  input: RelationsInput;
};


export type MutationAddProductAssetsToAssetArgs = {
  input: RelationsInput;
};


export type MutationCreateAssetArgs = {
  file: Scalars['Upload'];
};


export type MutationCreateRoleArgs = {
  roles: Array<Permission>;
  description: Scalars['String'];
  code: Scalars['String'];
};


export type MutationUpdateRoleArgs = {
  roles: Array<Permission>;
  description: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationDeleteOneCollectionArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCollectionsArgs = {
  input: DeleteManyCollectionsInput;
};


export type MutationUpdateOneCollectionArgs = {
  input: UpdateOneCollectionInput;
};


export type MutationUpdateManyCollectionsArgs = {
  input: UpdateManyCollectionsInput;
};


export type MutationCreateOneCollectionArgs = {
  input: CreateOneCollectionInput;
};


export type MutationCreateManyCollectionsArgs = {
  input: CreateManyCollectionsInput;
};


export type MutationRemoveChildrenFromCollectionArgs = {
  input: RelationsInput;
};


export type MutationRemoveProductsFromCollectionArgs = {
  input: RelationsInput;
};


export type MutationRemoveAgreementsFromCollectionArgs = {
  input: RelationsInput;
};


export type MutationRemoveCartPriceFromCollectionArgs = {
  input: RelationInput;
};


export type MutationRemoveSeoFromCollectionArgs = {
  input: RelationInput;
};


export type MutationRemoveParentFromCollectionArgs = {
  input: RelationInput;
};


export type MutationAddChildrenToCollectionArgs = {
  input: RelationsInput;
};


export type MutationAddProductsToCollectionArgs = {
  input: RelationsInput;
};


export type MutationAddAgreementsToCollectionArgs = {
  input: RelationsInput;
};


export type MutationSetCartPriceOnCollectionArgs = {
  input: RelationInput;
};


export type MutationSetSeoOnCollectionArgs = {
  input: RelationInput;
};


export type MutationSetParentOnCollectionArgs = {
  input: RelationInput;
};


export type MutationAddParentToChildCollectionArgs = {
  childId: Scalars['String'];
  parentId: Scalars['String'];
};


export type MutationDeleteOneChannelArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyChannelsArgs = {
  input: DeleteManyChannelsInput;
};


export type MutationUpdateOneChannelArgs = {
  input: UpdateOneChannelInput;
};


export type MutationUpdateManyChannelsArgs = {
  input: UpdateManyChannelsInput;
};


export type MutationCreateOneChannelArgs = {
  input: CreateOneChannelInput;
};


export type MutationCreateManyChannelsArgs = {
  input: CreateManyChannelsInput;
};


export type MutationDeleteOneStoreArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyStoresArgs = {
  input: DeleteManyStoresInput;
};


export type MutationUpdateOneStoreArgs = {
  input: UpdateOneStoreInput;
};


export type MutationUpdateManyStoresArgs = {
  input: UpdateManyStoresInput;
};


export type MutationCreateOneStoreArgs = {
  input: CreateOneStoreInput;
};


export type MutationCreateManyStoresArgs = {
  input: CreateManyStoresInput;
};


export type MutationRemoveLinesFromStoreArgs = {
  input: RelationsInput;
};


export type MutationRemovePricesFromStoreArgs = {
  input: RelationsInput;
};


export type MutationRemoveSettlementsFromStoreArgs = {
  input: RelationsInput;
};


export type MutationRemoveSkusFromStoreArgs = {
  input: RelationsInput;
};


export type MutationRemoveBalanceFromStoreArgs = {
  input: RelationInput;
};


export type MutationRemoveCountryFromStoreArgs = {
  input: RelationInput;
};


export type MutationAddLinesToStoreArgs = {
  input: RelationsInput;
};


export type MutationAddPricesToStoreArgs = {
  input: RelationsInput;
};


export type MutationAddSettlementsToStoreArgs = {
  input: RelationsInput;
};


export type MutationAddSkusToStoreArgs = {
  input: RelationsInput;
};


export type MutationSetBalanceOnStoreArgs = {
  input: RelationInput;
};


export type MutationSetCountryOnStoreArgs = {
  input: RelationInput;
};


export type MutationCreateDefaultStoreArgs = {
  countryId: Scalars['String'];
  zipcode: Scalars['String'];
  streetAddress2: Scalars['String'];
  streetAddress1: Scalars['String'];
  GSTIN: Scalars['String'];
  officialemail: Scalars['String'];
  phoneNumber: Scalars['String'];
  storeName: Scalars['String'];
};


export type MutationDeleteOneTaxCategoryArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyTaxCategoriesArgs = {
  input: DeleteManyTaxCategoriesInput;
};


export type MutationUpdateOneTaxCategoryArgs = {
  input: UpdateOneTaxCategoryInput;
};


export type MutationUpdateManyTaxCategoriesArgs = {
  input: UpdateManyTaxCategoriesInput;
};


export type MutationCreateOneTaxCategoryArgs = {
  input: CreateOneTaxCategoryInput;
};


export type MutationCreateManyTaxCategoriesArgs = {
  input: CreateManyTaxCategoriesInput;
};


export type MutationRemoveRatesFromTaxCategoryArgs = {
  input: RelationsInput;
};


export type MutationAddRatesToTaxCategoryArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneTaxRateArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyTaxRatesArgs = {
  input: DeleteManyTaxRatesInput;
};


export type MutationUpdateOneTaxRateArgs = {
  input: UpdateOneTaxRateInput;
};


export type MutationUpdateManyTaxRatesArgs = {
  input: UpdateManyTaxRatesInput;
};


export type MutationCreateOneTaxRateArgs = {
  input: CreateOneTaxRateInput;
};


export type MutationCreateManyTaxRatesArgs = {
  input: CreateManyTaxRatesInput;
};


export type MutationRemoveVariantsFromTaxRateArgs = {
  input: RelationsInput;
};


export type MutationRemoveZoneFromTaxRateArgs = {
  input: RelationInput;
};


export type MutationRemoveCategoryFromTaxRateArgs = {
  input: RelationInput;
};


export type MutationAddVariantsToTaxRateArgs = {
  input: RelationsInput;
};


export type MutationSetZoneOnTaxRateArgs = {
  input: RelationInput;
};


export type MutationSetCategoryOnTaxRateArgs = {
  input: RelationInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationRemoveAddressFromUserArgs = {
  input: RelationInput;
};


export type MutationRemoveVendorFromUserArgs = {
  input: RelationInput;
};


export type MutationRemoveAdministratorFromUserArgs = {
  input: RelationInput;
};


export type MutationSetAddressOnUserArgs = {
  input: RelationInput;
};


export type MutationSetVendorOnUserArgs = {
  input: RelationInput;
};


export type MutationSetAdministratorOnUserArgs = {
  input: RelationInput;
};


export type MutationRemoveZipsFromVendorArgs = {
  input: RelationsInput;
};


export type MutationRemoveStoreFromVendorArgs = {
  input: RelationInput;
};


export type MutationRemoveLicenseFromVendorArgs = {
  input: RelationInput;
};


export type MutationRemoveUserFromVendorArgs = {
  input: RelationInput;
};


export type MutationAddZipsToVendorArgs = {
  input: RelationsInput;
};


export type MutationSetStoreOnVendorArgs = {
  input: RelationInput;
};


export type MutationSetLicenseOnVendorArgs = {
  input: RelationInput;
};


export type MutationSetUserOnVendorArgs = {
  input: RelationInput;
};


export type MutationLoginVendorArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterVendorArgs = {
  rentals: Scalars['Boolean'];
  streetAddress2: Scalars['String'];
  streetAddress1: Scalars['String'];
  zipcode: Scalars['String'];
  region: Scalars['ID'];
  officialEmail: Scalars['String'];
  storeNumber: Scalars['String'];
  storeName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  planID: Scalars['String'];
  email: Scalars['String'];
};


export type MutationDeleteOneZoneArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyZonesArgs = {
  input: DeleteManyZonesInput;
};


export type MutationUpdateOneZoneArgs = {
  input: UpdateOneZoneInput;
};


export type MutationUpdateManyZonesArgs = {
  input: UpdateManyZonesInput;
};


export type MutationCreateOneZoneArgs = {
  input: CreateOneZoneInput;
};


export type MutationCreateManyZonesArgs = {
  input: CreateManyZonesInput;
};


export type MutationRemoveMembersFromZoneArgs = {
  input: RelationsInput;
};


export type MutationRemoveStoresFromZoneArgs = {
  input: RelationsInput;
};


export type MutationRemoveTaxratesFromZoneArgs = {
  input: RelationsInput;
};


export type MutationAddMembersToZoneArgs = {
  input: RelationsInput;
};


export type MutationAddStoresToZoneArgs = {
  input: RelationsInput;
};


export type MutationAddTaxratesToZoneArgs = {
  input: RelationsInput;
};


export type MutationAddCountryToZoneArgs = {
  countryId: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationDeleteOneCountryArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCountriesArgs = {
  input: DeleteManyCountriesInput;
};


export type MutationUpdateOneCountryArgs = {
  input: UpdateOneCountryInput;
};


export type MutationUpdateManyCountriesArgs = {
  input: UpdateManyCountriesInput;
};


export type MutationCreateOneCountryArgs = {
  input: CreateOneCountryInput;
};


export type MutationCreateManyCountriesArgs = {
  input: CreateManyCountriesInput;
};


export type MutationRemoveStoresFromCountryArgs = {
  input: RelationsInput;
};


export type MutationRemoveZonesFromCountryArgs = {
  input: RelationsInput;
};


export type MutationAddStoresToCountryArgs = {
  input: RelationsInput;
};


export type MutationAddZonesToCountryArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneSeoArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManySeosArgs = {
  input: DeleteManySeosInput;
};


export type MutationUpdateOneSeoArgs = {
  input: UpdateOneSeoInput;
};


export type MutationUpdateManySeosArgs = {
  input: UpdateManySeosInput;
};


export type MutationCreateOneSeoArgs = {
  input: CreateOneSeoInput;
};


export type MutationCreateManySeosArgs = {
  input: CreateManySeosInput;
};


export type MutationRemoveVariantFromSeoArgs = {
  input: RelationInput;
};


export type MutationRemoveCollectionFromSeoArgs = {
  input: RelationInput;
};


export type MutationSetVariantOnSeoArgs = {
  input: RelationInput;
};


export type MutationSetCollectionOnSeoArgs = {
  input: RelationInput;
};


export type MutationCreateProductSeoArgs = {
  metadesc: Scalars['String'];
  metakeywords: Array<Scalars['String']>;
  metatitle: Scalars['String'];
  urlKey: Scalars['String'];
  variantId: Scalars['ID'];
};


export type MutationUpdateProductSeoArgs = {
  metadesc: Scalars['String'];
  metakeywords: Array<Scalars['String']>;
  metatitle: Scalars['String'];
  urlKey: Scalars['String'];
  seoId: Scalars['ID'];
};


export type MutationDeleteOneFacetArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyFacetsArgs = {
  input: DeleteManyFacetsInput;
};


export type MutationUpdateOneFacetArgs = {
  input: UpdateOneFacetInput;
};


export type MutationUpdateManyFacetsArgs = {
  input: UpdateManyFacetsInput;
};


export type MutationCreateOneFacetArgs = {
  input: CreateOneFacetInput;
};


export type MutationCreateManyFacetsArgs = {
  input: CreateManyFacetsInput;
};


export type MutationRemoveProductsFromFacetArgs = {
  input: RelationsInput;
};


export type MutationRemoveValuesFromFacetArgs = {
  input: RelationsInput;
};


export type MutationAddProductsToFacetArgs = {
  input: RelationsInput;
};


export type MutationAddValuesToFacetArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneFacetValueArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyFacetValuesArgs = {
  input: DeleteManyFacetValuesInput;
};


export type MutationUpdateOneFacetValueArgs = {
  input: UpdateOneFacetValueInput;
};


export type MutationUpdateManyFacetValuesArgs = {
  input: UpdateManyFacetValuesInput;
};


export type MutationCreateOneFacetValueArgs = {
  input: CreateOneFacetValueInput;
};


export type MutationCreateManyFacetValuesArgs = {
  input: CreateManyFacetValuesInput;
};


export type MutationRemoveProductsFromFacetValueArgs = {
  input: RelationsInput;
};


export type MutationRemoveFacetFromFacetValueArgs = {
  input: RelationInput;
};


export type MutationAddProductsToFacetValueArgs = {
  input: RelationsInput;
};


export type MutationSetFacetOnFacetValueArgs = {
  input: RelationInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyProductsArgs = {
  input: DeleteManyProductsInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};


export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};


export type MutationCreateOneProductArgs = {
  input: CreateOneProductInput;
};


export type MutationCreateManyProductsArgs = {
  input: CreateManyProductsInput;
};


export type MutationRemoveOptionsFromProductArgs = {
  input: RelationsInput;
};


export type MutationRemoveFacetsFromProductArgs = {
  input: RelationsInput;
};


export type MutationRemoveVariantsFromProductArgs = {
  input: RelationsInput;
};


export type MutationRemoveAssetsFromProductArgs = {
  input: RelationsInput;
};


export type MutationRemoveCollectionFromProductArgs = {
  input: RelationInput;
};


export type MutationRemoveFeaturedAssetFromProductArgs = {
  input: RelationInput;
};


export type MutationAddOptionsToProductArgs = {
  input: RelationsInput;
};


export type MutationAddFacetsToProductArgs = {
  input: RelationsInput;
};


export type MutationAddVariantsToProductArgs = {
  input: RelationsInput;
};


export type MutationAddAssetsToProductArgs = {
  input: RelationsInput;
};


export type MutationSetCollectionOnProductArgs = {
  input: RelationInput;
};


export type MutationSetFeaturedAssetOnProductArgs = {
  input: RelationInput;
};


export type MutationCreateProductArgs = {
  facet: Array<Scalars['String']>;
  asset: Array<Scalars['String']>;
  featured: Scalars['String'];
  slug: Scalars['String'];
  desc: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateProductCollectionArgs = {
  collectionId: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  facet: Array<Scalars['String']>;
  asset: Array<Scalars['String']>;
  featured: Scalars['String'];
  id: Scalars['ID'];
  desc: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteOneProductVariantArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyProductVariantsArgs = {
  input: DeleteManyProductVariantsInput;
};


export type MutationRemoveLinesFromProductVariantArgs = {
  input: RelationsInput;
};


export type MutationRemoveStocksFromProductVariantArgs = {
  input: RelationsInput;
};


export type MutationRemovePricesFromProductVariantArgs = {
  input: RelationsInput;
};


export type MutationRemoveSeoFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemoveSpecsFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemoveAssetFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemoveProductFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationAddLinesToProductVariantArgs = {
  input: RelationsInput;
};


export type MutationAddStocksToProductVariantArgs = {
  input: RelationsInput;
};


export type MutationAddPricesToProductVariantArgs = {
  input: RelationsInput;
};


export type MutationSetSeoOnProductVariantArgs = {
  input: RelationInput;
};


export type MutationSetSpecsOnProductVariantArgs = {
  input: RelationInput;
};


export type MutationSetAssetOnProductVariantArgs = {
  input: RelationInput;
};


export type MutationSetProductOnProductVariantArgs = {
  input: RelationInput;
};


export type MutationCreateProductVariantsArgs = {
  options: Scalars['String'];
  prodId: Scalars['ID'];
};


export type MutationCreateProductVariantSpecificationArgs = {
  specs: Scalars['JSON'];
  variantId: Scalars['ID'];
};


export type MutationUpdateProductVariantSpecificationArgs = {
  specs: Scalars['JSON'];
  id: Scalars['ID'];
};


export type MutationDeleteOneProductOptionArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyProductOptionsArgs = {
  input: DeleteManyProductOptionsInput;
};


export type MutationUpdateOneProductOptionArgs = {
  input: UpdateOneProductOptionInput;
};


export type MutationUpdateManyProductOptionsArgs = {
  input: UpdateManyProductOptionsInput;
};


export type MutationCreateOneProductOptionArgs = {
  input: CreateOneProductOptionInput;
};


export type MutationCreateManyProductOptionsArgs = {
  input: CreateManyProductOptionsInput;
};


export type MutationRemoveVariantsFromProductOptionArgs = {
  input: RelationsInput;
};


export type MutationRemoveGroupFromProductOptionArgs = {
  input: RelationInput;
};


export type MutationAddVariantsToProductOptionArgs = {
  input: RelationsInput;
};


export type MutationSetGroupOnProductOptionArgs = {
  input: RelationInput;
};


export type MutationDeleteOneProductOptionGroupArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyProductOptionGroupsArgs = {
  input: DeleteManyProductOptionGroupsInput;
};


export type MutationUpdateOneProductOptionGroupArgs = {
  input: UpdateOneProductOptionGroupInput;
};


export type MutationUpdateManyProductOptionGroupsArgs = {
  input: UpdateManyProductOptionGroupsInput;
};


export type MutationCreateOneProductOptionGroupArgs = {
  input: CreateOneProductOptionGroupInput;
};


export type MutationCreateManyProductOptionGroupsArgs = {
  input: CreateManyProductOptionGroupsInput;
};


export type MutationRemoveOptionsFromProductOptionGroupArgs = {
  input: RelationsInput;
};


export type MutationRemoveProductFromProductOptionGroupArgs = {
  input: RelationInput;
};


export type MutationAddOptionsToProductOptionGroupArgs = {
  input: RelationsInput;
};


export type MutationSetProductOnProductOptionGroupArgs = {
  input: RelationInput;
};


export type MutationDeleteOneProductVariantPriceArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyProductVariantPricesArgs = {
  input: DeleteManyProductVariantPricesInput;
};


export type MutationUpdateOneProductVariantPriceArgs = {
  input: UpdateOneProductVariantPriceInput;
};


export type MutationUpdateManyProductVariantPricesArgs = {
  input: UpdateManyProductVariantPricesInput;
};


export type MutationCreateOneProductVariantPriceArgs = {
  input: CreateOneProductVariantPriceInput;
};


export type MutationCreateManyProductVariantPricesArgs = {
  input: CreateManyProductVariantPricesInput;
};


export type MutationRemovePromopriceFromProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationRemoveStoreFromProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationRemoveTaxFromProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationRemoveVariantFromProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetPromopriceOnProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetStoreOnProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetTaxOnProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetVariantOnProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationCreateVariantPriceArgs = {
  storeId?: Maybe<Scalars['ID']>;
  taxIncluded: Scalars['Boolean'];
  taxId: Scalars['ID'];
  price: Scalars['Float'];
  variantId: Scalars['ID'];
};


export type MutationUpdateVariantPriceArgs = {
  taxIncluded: Scalars['Boolean'];
  taxId: Scalars['ID'];
  price: Scalars['Float'];
  variantPriceId: Scalars['ID'];
};


export type MutationRemoveAssetFromProductVariantAssetArgs = {
  input: RelationInput;
};


export type MutationRemoveVariantFromProductVariantAssetArgs = {
  input: RelationInput;
};


export type MutationSetAssetOnProductVariantAssetArgs = {
  input: RelationInput;
};


export type MutationSetVariantOnProductVariantAssetArgs = {
  input: RelationInput;
};


export type MutationCreateProductVariantAssetArgs = {
  assetId: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationDeleteOneProductAssetArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyProductAssetsArgs = {
  input: DeleteManyProductAssetsInput;
};


export type MutationUpdateOneProductAssetArgs = {
  input: UpdateOneProductAssetInput;
};


export type MutationUpdateManyProductAssetsArgs = {
  input: UpdateManyProductAssetsInput;
};


export type MutationCreateOneProductAssetArgs = {
  input: CreateOneProductAssetInput;
};


export type MutationCreateManyProductAssetsArgs = {
  input: CreateManyProductAssetsInput;
};


export type MutationRemoveAssetFromProductAssetArgs = {
  input: RelationInput;
};


export type MutationRemoveProductFromProductAssetArgs = {
  input: RelationInput;
};


export type MutationSetAssetOnProductAssetArgs = {
  input: RelationInput;
};


export type MutationSetProductOnProductAssetArgs = {
  input: RelationInput;
};


export type MutationRemoveLicencesFromVendorPlansArgs = {
  input: RelationsInput;
};


export type MutationAddLicencesToVendorPlansArgs = {
  input: RelationsInput;
};


export type MutationCreatePlanArgs = {
  tenureStrategy: VendorPlanTenure;
  priceStrategy: VendorPlanPrice;
  value: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationUpdatePlanArgs = {
  status: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationRemoveVendorFromVendorLicenseArgs = {
  input: RelationInput;
};


export type MutationSetVendorOnVendorLicenseArgs = {
  input: RelationInput;
};


export type MutationCreateBillingRequestArgs = {
  value: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateBillingRequestArgs = {
  value: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteOneStockKeepingArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyStockKeepingsArgs = {
  input: DeleteManyStockKeepingsInput;
};


export type MutationUpdateOneStockKeepingArgs = {
  input: UpdateOneStockKeepingInput;
};


export type MutationUpdateManyStockKeepingsArgs = {
  input: UpdateManyStockKeepingsInput;
};


export type MutationRemoveSalesFromStockKeepingArgs = {
  input: RelationsInput;
};


export type MutationRemoveCancelsFromStockKeepingArgs = {
  input: RelationsInput;
};


export type MutationRemoveMovementsFromStockKeepingArgs = {
  input: RelationsInput;
};


export type MutationRemoveStoreFromStockKeepingArgs = {
  input: RelationInput;
};


export type MutationRemoveVariantFromStockKeepingArgs = {
  input: RelationInput;
};


export type MutationAddSalesToStockKeepingArgs = {
  input: RelationsInput;
};


export type MutationAddCancelsToStockKeepingArgs = {
  input: RelationsInput;
};


export type MutationAddMovementsToStockKeepingArgs = {
  input: RelationsInput;
};


export type MutationSetStoreOnStockKeepingArgs = {
  input: RelationInput;
};


export type MutationSetVariantOnStockKeepingArgs = {
  input: RelationInput;
};


export type MutationCreateOrUpdateStockArgs = {
  type?: Maybe<StockKeepingType>;
  stockId?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
  stockstatus: Scalars['Boolean'];
  backorder: Scalars['Boolean'];
  multiple: Scalars['Boolean'];
  sku: Scalars['String'];
  threshold: Scalars['Float'];
  quantity: Scalars['Float'];
};


export type MutationDeleteOneSaleArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManySalesArgs = {
  input: DeleteManySalesInput;
};


export type MutationUpdateOneSaleArgs = {
  input: UpdateOneSaleInput;
};


export type MutationUpdateManySalesArgs = {
  input: UpdateManySalesInput;
};


export type MutationCreateOneSaleArgs = {
  input: CreateOneSaleInput;
};


export type MutationCreateManySalesArgs = {
  input: CreateManySalesInput;
};


export type MutationRemoveKeepingFromSaleArgs = {
  input: RelationInput;
};


export type MutationSetKeepingOnSaleArgs = {
  input: RelationInput;
};


export type MutationDeleteOneStockMovementArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyStockMovementsArgs = {
  input: DeleteManyStockMovementsInput;
};


export type MutationUpdateOneStockMovementArgs = {
  input: UpdateOneStockMovementInput;
};


export type MutationUpdateManyStockMovementsArgs = {
  input: UpdateManyStockMovementsInput;
};


export type MutationCreateOneStockMovementArgs = {
  input: CreateOneStockMovementInput;
};


export type MutationCreateManyStockMovementsArgs = {
  input: CreateManyStockMovementsInput;
};


export type MutationRemoveKeepingFromStockMovementArgs = {
  input: RelationInput;
};


export type MutationSetKeepingOnStockMovementArgs = {
  input: RelationInput;
};


export type MutationDeleteOneCancellationArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCancellationsArgs = {
  input: DeleteManyCancellationsInput;
};


export type MutationUpdateOneCancellationArgs = {
  input: UpdateOneCancellationInput;
};


export type MutationUpdateManyCancellationsArgs = {
  input: UpdateManyCancellationsInput;
};


export type MutationCreateOneCancellationArgs = {
  input: CreateOneCancellationInput;
};


export type MutationCreateManyCancellationsArgs = {
  input: CreateManyCancellationsInput;
};


export type MutationRemoveKeepingFromCancellationArgs = {
  input: RelationInput;
};


export type MutationSetKeepingOnCancellationArgs = {
  input: RelationInput;
};


export type MutationRemoveLinesFromOrderArgs = {
  input: RelationsInput;
};


export type MutationRemoveUserFromOrderArgs = {
  input: RelationInput;
};


export type MutationAddLinesToOrderArgs = {
  input: RelationsInput;
};


export type MutationSetUserOnOrderArgs = {
  input: RelationInput;
};


export type MutationCreateOrderAdminArgs = {
  orderLineDto: Array<OrderLineDto>;
  address: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationDeleteOneZipArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyZipsArgs = {
  input: DeleteManyZipsInput;
};


export type MutationUpdateOneZipArgs = {
  input: UpdateOneZipInput;
};


export type MutationUpdateManyZipsArgs = {
  input: UpdateManyZipsInput;
};


export type MutationCreateOneZipArgs = {
  input: CreateOneZipInput;
};


export type MutationCreateManyZipsArgs = {
  input: CreateManyZipsInput;
};


export type MutationRemoveVendorsFromZipArgs = {
  input: RelationsInput;
};


export type MutationAddVendorsToZipArgs = {
  input: RelationsInput;
};


export type MutationCreateZipToVendorArgs = {
  zips: Array<Scalars['ID']>;
  vendorId: Scalars['ID'];
};


export type MutationDeleteOneMenuArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyMenusArgs = {
  input: DeleteManyMenusInput;
};


export type MutationUpdateOneMenuArgs = {
  input: UpdateOneMenuInput;
};


export type MutationUpdateManyMenusArgs = {
  input: UpdateManyMenusInput;
};


export type MutationCreateOneMenuArgs = {
  input: CreateOneMenuInput;
};


export type MutationCreateManyMenusArgs = {
  input: CreateManyMenusInput;
};


export type MutationRemoveChildrenFromMenuArgs = {
  input: RelationsInput;
};


export type MutationRemoveParentFromMenuArgs = {
  input: RelationInput;
};


export type MutationAddChildrenToMenuArgs = {
  input: RelationsInput;
};


export type MutationSetParentOnMenuArgs = {
  input: RelationInput;
};


export type MutationCreateMenuChildNodeArgs = {
  target: Scalars['String'];
  targetId: Scalars['String'];
  title: Scalars['String'];
  nodeId: Scalars['ID'];
};


export type MutationDeleteOnePageArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyPagesArgs = {
  input: DeleteManyPagesInput;
};


export type MutationUpdateOnePageArgs = {
  input: UpdateOnePageInput;
};


export type MutationUpdateManyPagesArgs = {
  input: UpdateManyPagesInput;
};


export type MutationCreateOnePageArgs = {
  input: CreateOnePageInput;
};


export type MutationCreateManyPagesArgs = {
  input: CreateManyPagesInput;
};


export type MutationDeleteOneAddressArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyAddressesArgs = {
  input: DeleteManyAddressesInput;
};


export type MutationUpdateOneAddressArgs = {
  input: UpdateOneAddressInput;
};


export type MutationUpdateManyAddressesArgs = {
  input: UpdateManyAddressesInput;
};


export type MutationCreateOneAddressArgs = {
  input: CreateOneAddressInput;
};


export type MutationCreateManyAddressesArgs = {
  input: CreateManyAddressesInput;
};


export type MutationRemoveUsersFromAddressArgs = {
  input: RelationsInput;
};


export type MutationAddUsersToAddressArgs = {
  input: RelationsInput;
};


export type MutationRemoveStoreFromSettlementsArgs = {
  input: RelationInput;
};


export type MutationSetStoreOnSettlementsArgs = {
  input: RelationInput;
};


export type MutationUpdateOneOrderLineArgs = {
  input: UpdateOneOrderLineInput;
};


export type MutationUpdateManyOrderLinesArgs = {
  input: UpdateManyOrderLinesInput;
};


export type MutationRemoveStoreFromOrderLineArgs = {
  input: RelationInput;
};


export type MutationRemoveItemFromOrderLineArgs = {
  input: RelationInput;
};


export type MutationRemoveOrderFromOrderLineArgs = {
  input: RelationInput;
};


export type MutationSetStoreOnOrderLineArgs = {
  input: RelationInput;
};


export type MutationSetItemOnOrderLineArgs = {
  input: RelationInput;
};


export type MutationSetOrderOnOrderLineArgs = {
  input: RelationInput;
};


export type MutationRemoveLineFromOrderItemArgs = {
  input: RelationInput;
};


export type MutationRemoveTaxCategoryFromOrderItemArgs = {
  input: RelationInput;
};


export type MutationRemoveProductVariantFromOrderItemArgs = {
  input: RelationInput;
};


export type MutationSetLineOnOrderItemArgs = {
  input: RelationInput;
};


export type MutationSetTaxCategoryOnOrderItemArgs = {
  input: RelationInput;
};


export type MutationSetProductVariantOnOrderItemArgs = {
  input: RelationInput;
};


export type MutationDeleteOnePromotionVariantPriceArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyPromotionVariantPricesArgs = {
  input: DeleteManyPromotionVariantPricesInput;
};


export type MutationUpdateOnePromotionVariantPriceArgs = {
  input: UpdateOnePromotionVariantPriceInput;
};


export type MutationUpdateManyPromotionVariantPricesArgs = {
  input: UpdateManyPromotionVariantPricesInput;
};


export type MutationCreateOnePromotionVariantPriceArgs = {
  input: CreateOnePromotionVariantPriceInput;
};


export type MutationCreateManyPromotionVariantPricesArgs = {
  input: CreateManyPromotionVariantPricesInput;
};


export type MutationRemovePriceFromPromotionVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetPriceOnPromotionVariantPriceArgs = {
  input: RelationInput;
};


export type MutationDeleteOneCartPriceRulesArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCartPriceRulesArgs = {
  input: DeleteManyCartPriceRulesInput;
};


export type MutationUpdateOneCartPriceRulesArgs = {
  input: UpdateOneCartPriceRulesInput;
};


export type MutationUpdateManyCartPriceRulesArgs = {
  input: UpdateManyCartPriceRulesInput;
};


export type MutationCreateOneCartPriceRulesArgs = {
  input: CreateOneCartPriceRulesInput;
};


export type MutationCreateManyCartPriceRulesArgs = {
  input: CreateManyCartPriceRulesInput;
};


export type MutationRemoveCollectionFromCartPriceRulesArgs = {
  input: RelationInput;
};


export type MutationSetCollectionOnCartPriceRulesArgs = {
  input: RelationInput;
};

export type RelationsInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};


export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteManyCollectionsInput = {
  /** Filter to find records to delete */
  filter: CollectionDeleteFilter;
};

export type CollectionDeleteFilter = {
  and?: Maybe<Array<CollectionDeleteFilter>>;
  or?: Maybe<Array<CollectionDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isRoot?: Maybe<BooleanFieldComparison>;
  inMenu?: Maybe<BooleanFieldComparison>;
  position?: Maybe<NumberFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type UpdateOneCollectionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCollection;
};

export type UpdateCollection = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  inMenu?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Float']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateManyCollectionsInput = {
  /** Filter used to find fields to update */
  filter: CollectionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCollection;
};

export type CollectionUpdateFilter = {
  and?: Maybe<Array<CollectionUpdateFilter>>;
  or?: Maybe<Array<CollectionUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isRoot?: Maybe<BooleanFieldComparison>;
  inMenu?: Maybe<BooleanFieldComparison>;
  position?: Maybe<NumberFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type CreateOneCollectionInput = {
  /** The record to create */
  collection: CreateCollection;
};

export type CreateCollection = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  inMenu?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Float']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateManyCollectionsInput = {
  /** Array of records to create */
  collections: Array<CreateCollection>;
};

export type RelationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type DeleteManyChannelsInput = {
  /** Filter to find records to delete */
  filter: ChannelDeleteFilter;
};

export type ChannelDeleteFilter = {
  and?: Maybe<Array<ChannelDeleteFilter>>;
  or?: Maybe<Array<ChannelDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  token?: Maybe<StringFieldComparison>;
  defaultLanguageCode?: Maybe<StringFieldComparison>;
  currencyCode?: Maybe<StringFieldComparison>;
  pricesIncludeTax?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneChannelInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateChannel;
};

export type UpdateChannel = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyChannelsInput = {
  /** Filter used to find fields to update */
  filter: ChannelUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateChannel;
};

export type ChannelUpdateFilter = {
  and?: Maybe<Array<ChannelUpdateFilter>>;
  or?: Maybe<Array<ChannelUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  token?: Maybe<StringFieldComparison>;
  defaultLanguageCode?: Maybe<StringFieldComparison>;
  currencyCode?: Maybe<StringFieldComparison>;
  pricesIncludeTax?: Maybe<BooleanFieldComparison>;
};

export type CreateOneChannelInput = {
  /** The record to create */
  channel: CreateChannel;
};

export type CreateChannel = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  defaultLanguageCode?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
};

export type CreateManyChannelsInput = {
  /** Array of records to create */
  channels: Array<CreateChannel>;
};

export type DeleteManyStoresInput = {
  /** Filter to find records to delete */
  filter: StoreDeleteFilter;
};

export type StoreDeleteFilter = {
  and?: Maybe<Array<StoreDeleteFilter>>;
  or?: Maybe<Array<StoreDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneStoreInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateStore;
};

export type UpdateStore = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
  singleStore?: Maybe<Scalars['Boolean']>;
  rentalStore?: Maybe<Scalars['Boolean']>;
  channelMarkets?: Maybe<Scalars['Boolean']>;
  type?: Maybe<StoreTypeEnum>;
};

export type UpdateManyStoresInput = {
  /** Filter used to find fields to update */
  filter: StoreUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStore;
};

export type StoreUpdateFilter = {
  and?: Maybe<Array<StoreUpdateFilter>>;
  or?: Maybe<Array<StoreUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
};

export type CreateOneStoreInput = {
  /** The record to create */
  store: CreateStore;
};

export type CreateStore = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
  singleStore?: Maybe<Scalars['Boolean']>;
  rentalStore?: Maybe<Scalars['Boolean']>;
  channelMarkets?: Maybe<Scalars['Boolean']>;
  type?: Maybe<StoreTypeEnum>;
};

export type CreateManyStoresInput = {
  /** Array of records to create */
  stores: Array<CreateStore>;
};

export type DeleteManyTaxCategoriesInput = {
  /** Filter to find records to delete */
  filter: TaxCategoryDeleteFilter;
};

export type TaxCategoryDeleteFilter = {
  and?: Maybe<Array<TaxCategoryDeleteFilter>>;
  or?: Maybe<Array<TaxCategoryDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneTaxCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTaxCategory;
};

export type UpdateTaxCategory = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateManyTaxCategoriesInput = {
  /** Filter used to find fields to update */
  filter: TaxCategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaxCategory;
};

export type TaxCategoryUpdateFilter = {
  and?: Maybe<Array<TaxCategoryUpdateFilter>>;
  or?: Maybe<Array<TaxCategoryUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneTaxCategoryInput = {
  /** The record to create */
  taxCategory: CreateTaxCategory;
};

export type CreateTaxCategory = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateManyTaxCategoriesInput = {
  /** Array of records to create */
  taxCategories: Array<CreateTaxCategory>;
};

export type DeleteManyTaxRatesInput = {
  /** Filter to find records to delete */
  filter: TaxRateDeleteFilter;
};

export type TaxRateDeleteFilter = {
  and?: Maybe<Array<TaxRateDeleteFilter>>;
  or?: Maybe<Array<TaxRateDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneTaxRateInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTaxRate;
};

export type UpdateTaxRate = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyTaxRatesInput = {
  /** Filter used to find fields to update */
  filter: TaxRateUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaxRate;
};

export type TaxRateUpdateFilter = {
  and?: Maybe<Array<TaxRateUpdateFilter>>;
  or?: Maybe<Array<TaxRateUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type CreateOneTaxRateInput = {
  /** The record to create */
  taxRate: CreateTaxRate;
};

export type CreateTaxRate = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type CreateManyTaxRatesInput = {
  /** Array of records to create */
  taxRates: Array<CreateTaxRate>;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type UserDeleteFilter = {
  and?: Maybe<Array<UserDeleteFilter>>;
  or?: Maybe<Array<UserDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  verified?: Maybe<BooleanFieldComparison>;
  verificationToken?: Maybe<StringFieldComparison>;
  passwordResetToken?: Maybe<StringFieldComparison>;
  identifierChangeToken?: Maybe<StringFieldComparison>;
  pendingIdentifier?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
};

export type DeleteManyZonesInput = {
  /** Filter to find records to delete */
  filter: ZoneDeleteFilter;
};

export type ZoneDeleteFilter = {
  and?: Maybe<Array<ZoneDeleteFilter>>;
  or?: Maybe<Array<ZoneDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneZoneInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateZone;
};

export type UpdateZone = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateManyZonesInput = {
  /** Filter used to find fields to update */
  filter: ZoneUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateZone;
};

export type ZoneUpdateFilter = {
  and?: Maybe<Array<ZoneUpdateFilter>>;
  or?: Maybe<Array<ZoneUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneZoneInput = {
  /** The record to create */
  zone: CreateZone;
};

export type CreateZone = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateManyZonesInput = {
  /** Array of records to create */
  zones: Array<CreateZone>;
};

export type DeleteManyCountriesInput = {
  /** Filter to find records to delete */
  filter: CountryDeleteFilter;
};

export type CountryDeleteFilter = {
  and?: Maybe<Array<CountryDeleteFilter>>;
  or?: Maybe<Array<CountryDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneCountryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCountry;
};

export type UpdateCountry = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyCountriesInput = {
  /** Filter used to find fields to update */
  filter: CountryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCountry;
};

export type CountryUpdateFilter = {
  and?: Maybe<Array<CountryUpdateFilter>>;
  or?: Maybe<Array<CountryUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type CreateOneCountryInput = {
  /** The record to create */
  country: CreateCountry;
};

export type CreateCountry = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type CreateManyCountriesInput = {
  /** Array of records to create */
  countries: Array<CreateCountry>;
};

export type DeleteManySeosInput = {
  /** Filter to find records to delete */
  filter: SeoDeleteFilter;
};

export type SeoDeleteFilter = {
  and?: Maybe<Array<SeoDeleteFilter>>;
  or?: Maybe<Array<SeoDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  urlKey?: Maybe<StringFieldComparison>;
  metatitle?: Maybe<StringFieldComparison>;
};

export type UpdateOneSeoInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSeo;
};

export type UpdateSeo = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc?: Maybe<Scalars['String']>;
};

export type UpdateManySeosInput = {
  /** Filter used to find fields to update */
  filter: SeoUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSeo;
};

export type SeoUpdateFilter = {
  and?: Maybe<Array<SeoUpdateFilter>>;
  or?: Maybe<Array<SeoUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  urlKey?: Maybe<StringFieldComparison>;
  metatitle?: Maybe<StringFieldComparison>;
};

export type CreateOneSeoInput = {
  /** The record to create */
  seo: CreateSeo;
};

export type CreateSeo = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc?: Maybe<Scalars['String']>;
};

export type CreateManySeosInput = {
  /** Array of records to create */
  seos: Array<CreateSeo>;
};

export type DeleteManyFacetsInput = {
  /** Filter to find records to delete */
  filter: FacetDeleteFilter;
};

export type FacetDeleteFilter = {
  and?: Maybe<Array<FacetDeleteFilter>>;
  or?: Maybe<Array<FacetDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneFacetInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFacet;
};

export type UpdateFacet = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
};

export type UpdateManyFacetsInput = {
  /** Filter used to find fields to update */
  filter: FacetUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFacet;
};

export type FacetUpdateFilter = {
  and?: Maybe<Array<FacetUpdateFilter>>;
  or?: Maybe<Array<FacetUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type CreateOneFacetInput = {
  /** The record to create */
  facet: CreateFacet;
};

export type CreateFacet = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
};

export type CreateManyFacetsInput = {
  /** Array of records to create */
  facets: Array<CreateFacet>;
};

export type DeleteManyFacetValuesInput = {
  /** Filter to find records to delete */
  filter: FacetValueDeleteFilter;
};

export type FacetValueDeleteFilter = {
  and?: Maybe<Array<FacetValueDeleteFilter>>;
  or?: Maybe<Array<FacetValueDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneFacetValueInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFacetValue;
};

export type UpdateFacetValue = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type UpdateManyFacetValuesInput = {
  /** Filter used to find fields to update */
  filter: FacetValueUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFacetValue;
};

export type FacetValueUpdateFilter = {
  and?: Maybe<Array<FacetValueUpdateFilter>>;
  or?: Maybe<Array<FacetValueUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type CreateOneFacetValueInput = {
  /** The record to create */
  facetValue: CreateFacetValue;
};

export type CreateFacetValue = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
};

export type CreateManyFacetValuesInput = {
  /** Array of records to create */
  facetValues: Array<CreateFacetValue>;
};

export type DeleteManyProductsInput = {
  /** Filter to find records to delete */
  filter: ProductDeleteFilter;
};

export type ProductDeleteFilter = {
  and?: Maybe<Array<ProductDeleteFilter>>;
  or?: Maybe<Array<ProductDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  productName?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProduct;
};

export type UpdateProduct = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateManyProductsInput = {
  /** Filter used to find fields to update */
  filter: ProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProduct;
};

export type ProductUpdateFilter = {
  and?: Maybe<Array<ProductUpdateFilter>>;
  or?: Maybe<Array<ProductUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  productName?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: CreateProduct;
};

export type CreateProduct = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  productName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateManyProductsInput = {
  /** Array of records to create */
  products: Array<CreateProduct>;
};

export type DeleteManyProductVariantsInput = {
  /** Filter to find records to delete */
  filter: ProductVariantDeleteFilter;
};

export type ProductVariantDeleteFilter = {
  and?: Maybe<Array<ProductVariantDeleteFilter>>;
  or?: Maybe<Array<ProductVariantDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  dum_price?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  trackInventory?: Maybe<BooleanFieldComparison>;
};

export type DeleteManyProductOptionsInput = {
  /** Filter to find records to delete */
  filter: ProductOptionDeleteFilter;
};

export type ProductOptionDeleteFilter = {
  and?: Maybe<Array<ProductOptionDeleteFilter>>;
  or?: Maybe<Array<ProductOptionDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneProductOptionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductOption;
};

export type UpdateProductOption = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type UpdateManyProductOptionsInput = {
  /** Filter used to find fields to update */
  filter: ProductOptionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductOption;
};

export type ProductOptionUpdateFilter = {
  and?: Maybe<Array<ProductOptionUpdateFilter>>;
  or?: Maybe<Array<ProductOptionUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type CreateOneProductOptionInput = {
  /** The record to create */
  productOption: CreateProductOption;
};

export type CreateProductOption = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type CreateManyProductOptionsInput = {
  /** Array of records to create */
  productOptions: Array<CreateProductOption>;
};

export type DeleteManyProductOptionGroupsInput = {
  /** Filter to find records to delete */
  filter: ProductOptionGroupDeleteFilter;
};

export type ProductOptionGroupDeleteFilter = {
  and?: Maybe<Array<ProductOptionGroupDeleteFilter>>;
  or?: Maybe<Array<ProductOptionGroupDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneProductOptionGroupInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductOptionGroup;
};

export type UpdateProductOptionGroup = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type UpdateManyProductOptionGroupsInput = {
  /** Filter used to find fields to update */
  filter: ProductOptionGroupUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductOptionGroup;
};

export type ProductOptionGroupUpdateFilter = {
  and?: Maybe<Array<ProductOptionGroupUpdateFilter>>;
  or?: Maybe<Array<ProductOptionGroupUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type CreateOneProductOptionGroupInput = {
  /** The record to create */
  productOptionGroup: CreateProductOptionGroup;
};

export type CreateProductOptionGroup = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type CreateManyProductOptionGroupsInput = {
  /** Array of records to create */
  productOptionGroups: Array<CreateProductOptionGroup>;
};

export type DeleteManyProductVariantPricesInput = {
  /** Filter to find records to delete */
  filter: ProductVariantPriceDeleteFilter;
};

export type ProductVariantPriceDeleteFilter = {
  and?: Maybe<Array<ProductVariantPriceDeleteFilter>>;
  or?: Maybe<Array<ProductVariantPriceDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneProductVariantPriceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductVariantPrice;
};

export type UpdateProductVariantPrice = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
  taxIncluded?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyProductVariantPricesInput = {
  /** Filter used to find fields to update */
  filter: ProductVariantPriceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductVariantPrice;
};

export type ProductVariantPriceUpdateFilter = {
  and?: Maybe<Array<ProductVariantPriceUpdateFilter>>;
  or?: Maybe<Array<ProductVariantPriceUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
};

export type CreateOneProductVariantPriceInput = {
  /** The record to create */
  productVariantPrice: CreateProductVariantPrice;
};

export type CreateProductVariantPrice = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
  taxIncluded?: Maybe<Scalars['Boolean']>;
};

export type CreateManyProductVariantPricesInput = {
  /** Array of records to create */
  productVariantPrices: Array<CreateProductVariantPrice>;
};

export type DeleteManyProductAssetsInput = {
  /** Filter to find records to delete */
  filter: ProductAssetDeleteFilter;
};

export type ProductAssetDeleteFilter = {
  and?: Maybe<Array<ProductAssetDeleteFilter>>;
  or?: Maybe<Array<ProductAssetDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneProductAssetInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductAsset;
};

export type UpdateProductAsset = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateManyProductAssetsInput = {
  /** Filter used to find fields to update */
  filter: ProductAssetUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductAsset;
};

export type ProductAssetUpdateFilter = {
  and?: Maybe<Array<ProductAssetUpdateFilter>>;
  or?: Maybe<Array<ProductAssetUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreateOneProductAssetInput = {
  /** The record to create */
  productAsset: CreateProductAsset;
};

export type CreateProductAsset = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateManyProductAssetsInput = {
  /** Array of records to create */
  productAssets: Array<CreateProductAsset>;
};

export enum VendorPlanPrice {
  Flat = 'FLAT',
  Individualcollection = 'INDIVIDUALCOLLECTION',
  Commission = 'COMMISSION'
}

export type DeleteManyStockKeepingsInput = {
  /** Filter to find records to delete */
  filter: StockKeepingDeleteFilter;
};

export type StockKeepingDeleteFilter = {
  and?: Maybe<Array<StockKeepingDeleteFilter>>;
  or?: Maybe<Array<StockKeepingDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
  available_quantity?: Maybe<NumberFieldComparison>;
  threshold?: Maybe<NumberFieldComparison>;
  multiple?: Maybe<BooleanFieldComparison>;
  backorder?: Maybe<BooleanFieldComparison>;
  stockstatus?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
};

export type UpdateOneStockKeepingInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateStockKeeping;
};

export type UpdateStockKeeping = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
  available_quantity?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  multiple?: Maybe<Scalars['Boolean']>;
  backorder?: Maybe<Scalars['Boolean']>;
  stockstatus?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateManyStockKeepingsInput = {
  /** Filter used to find fields to update */
  filter: StockKeepingUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStockKeeping;
};

export type StockKeepingUpdateFilter = {
  and?: Maybe<Array<StockKeepingUpdateFilter>>;
  or?: Maybe<Array<StockKeepingUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
  available_quantity?: Maybe<NumberFieldComparison>;
  threshold?: Maybe<NumberFieldComparison>;
  multiple?: Maybe<BooleanFieldComparison>;
  backorder?: Maybe<BooleanFieldComparison>;
  stockstatus?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
};

export enum StockKeepingType {
  Global = 'GLOBAL',
  Vendor = 'VENDOR'
}

export type DeleteManySalesInput = {
  /** Filter to find records to delete */
  filter: SaleDeleteFilter;
};

export type SaleDeleteFilter = {
  and?: Maybe<Array<SaleDeleteFilter>>;
  or?: Maybe<Array<SaleDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneSaleInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSale;
};

export type UpdateSale = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type UpdateManySalesInput = {
  /** Filter used to find fields to update */
  filter: SaleUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSale;
};

export type SaleUpdateFilter = {
  and?: Maybe<Array<SaleUpdateFilter>>;
  or?: Maybe<Array<SaleUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type CreateOneSaleInput = {
  /** The record to create */
  sale: CreateSale;
};

export type CreateSale = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CreateManySalesInput = {
  /** Array of records to create */
  sales: Array<CreateSale>;
};

export type DeleteManyStockMovementsInput = {
  /** Filter to find records to delete */
  filter: StockMovementDeleteFilter;
};

export type StockMovementDeleteFilter = {
  and?: Maybe<Array<StockMovementDeleteFilter>>;
  or?: Maybe<Array<StockMovementDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneStockMovementInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateStockMovement;
};

export type UpdateStockMovement = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type UpdateManyStockMovementsInput = {
  /** Filter used to find fields to update */
  filter: StockMovementUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStockMovement;
};

export type StockMovementUpdateFilter = {
  and?: Maybe<Array<StockMovementUpdateFilter>>;
  or?: Maybe<Array<StockMovementUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type CreateOneStockMovementInput = {
  /** The record to create */
  stockMovement: CreateStockMovement;
};

export type CreateStockMovement = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CreateManyStockMovementsInput = {
  /** Array of records to create */
  stockMovements: Array<CreateStockMovement>;
};

export type DeleteManyCancellationsInput = {
  /** Filter to find records to delete */
  filter: CancellationDeleteFilter;
};

export type CancellationDeleteFilter = {
  and?: Maybe<Array<CancellationDeleteFilter>>;
  or?: Maybe<Array<CancellationDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneCancellationInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCancellation;
};

export type UpdateCancellation = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type UpdateManyCancellationsInput = {
  /** Filter used to find fields to update */
  filter: CancellationUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCancellation;
};

export type CancellationUpdateFilter = {
  and?: Maybe<Array<CancellationUpdateFilter>>;
  or?: Maybe<Array<CancellationUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type CreateOneCancellationInput = {
  /** The record to create */
  cancellation: CreateCancellation;
};

export type CreateCancellation = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CreateManyCancellationsInput = {
  /** Array of records to create */
  cancellations: Array<CreateCancellation>;
};

export type OrderLineDto = {
  priceId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type DeleteManyZipsInput = {
  /** Filter to find records to delete */
  filter: ZipDeleteFilter;
};

export type ZipDeleteFilter = {
  and?: Maybe<Array<ZipDeleteFilter>>;
  or?: Maybe<Array<ZipDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  code?: Maybe<NumberFieldComparison>;
};

export type UpdateOneZipInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateZip;
};

export type UpdateZip = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type UpdateManyZipsInput = {
  /** Filter used to find fields to update */
  filter: ZipUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateZip;
};

export type ZipUpdateFilter = {
  and?: Maybe<Array<ZipUpdateFilter>>;
  or?: Maybe<Array<ZipUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  code?: Maybe<NumberFieldComparison>;
};

export type CreateOneZipInput = {
  /** The record to create */
  zip: CreateZip;
};

export type CreateZip = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
};

export type CreateManyZipsInput = {
  /** Array of records to create */
  zips: Array<CreateZip>;
};

export type DeleteManyMenusInput = {
  /** Filter to find records to delete */
  filter: MenuDeleteFilter;
};

export type MenuDeleteFilter = {
  and?: Maybe<Array<MenuDeleteFilter>>;
  or?: Maybe<Array<MenuDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  target?: Maybe<StringFieldComparison>;
};

export type UpdateOneMenuInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateMenu;
};

export type UpdateMenu = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type UpdateManyMenusInput = {
  /** Filter used to find fields to update */
  filter: MenuUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateMenu;
};

export type MenuUpdateFilter = {
  and?: Maybe<Array<MenuUpdateFilter>>;
  or?: Maybe<Array<MenuUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  target?: Maybe<StringFieldComparison>;
};

export type CreateOneMenuInput = {
  /** The record to create */
  menu: CreateMenu;
};

export type CreateMenu = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type CreateManyMenusInput = {
  /** Array of records to create */
  menus: Array<CreateMenu>;
};

export type DeleteManyPagesInput = {
  /** Filter to find records to delete */
  filter: PageDeleteFilter;
};

export type PageDeleteFilter = {
  and?: Maybe<Array<PageDeleteFilter>>;
  or?: Maybe<Array<PageDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  pageType?: Maybe<PageTypeFilterComparison>;
  pageCategory?: Maybe<PageCategoryFilterComparison>;
};

export type UpdateOnePageInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePage;
};

export type UpdatePage = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  single?: Maybe<Scalars['JSON']>;
  list?: Maybe<Array<Scalars['String']>>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type UpdateManyPagesInput = {
  /** Filter used to find fields to update */
  filter: PageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePage;
};

export type PageUpdateFilter = {
  and?: Maybe<Array<PageUpdateFilter>>;
  or?: Maybe<Array<PageUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  pageType?: Maybe<PageTypeFilterComparison>;
  pageCategory?: Maybe<PageCategoryFilterComparison>;
};

export type CreateOnePageInput = {
  /** The record to create */
  page: CreatePage;
};

export type CreatePage = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  single?: Maybe<Scalars['JSON']>;
  list?: Maybe<Array<Scalars['String']>>;
  pageType?: Maybe<PageType>;
  pageCategory?: Maybe<PageCategory>;
};

export type CreateManyPagesInput = {
  /** Array of records to create */
  pages: Array<CreatePage>;
};

export type DeleteManyAddressesInput = {
  /** Filter to find records to delete */
  filter: AddressDeleteFilter;
};

export type AddressDeleteFilter = {
  and?: Maybe<Array<AddressDeleteFilter>>;
  or?: Maybe<Array<AddressDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fullName?: Maybe<StringFieldComparison>;
  addressLine?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  landmark?: Maybe<StringFieldComparison>;
  postalCode?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  alternatePhoneNumber?: Maybe<StringFieldComparison>;
  defaultShippingAddress?: Maybe<BooleanFieldComparison>;
  defaultBillingAddress?: Maybe<BooleanFieldComparison>;
  addressType?: Maybe<AddressTypeFilterComparison>;
};

export type UpdateOneAddressInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAddress;
};

export type UpdateAddress = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  addressType?: Maybe<AddressType>;
};

export type UpdateManyAddressesInput = {
  /** Filter used to find fields to update */
  filter: AddressUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAddress;
};

export type AddressUpdateFilter = {
  and?: Maybe<Array<AddressUpdateFilter>>;
  or?: Maybe<Array<AddressUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fullName?: Maybe<StringFieldComparison>;
  addressLine?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  landmark?: Maybe<StringFieldComparison>;
  postalCode?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  alternatePhoneNumber?: Maybe<StringFieldComparison>;
  defaultShippingAddress?: Maybe<BooleanFieldComparison>;
  defaultBillingAddress?: Maybe<BooleanFieldComparison>;
  addressType?: Maybe<AddressTypeFilterComparison>;
};

export type CreateOneAddressInput = {
  /** The record to create */
  address: CreateAddress;
};

export type CreateAddress = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  addressLine?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  alternatePhoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  addressType?: Maybe<AddressType>;
};

export type CreateManyAddressesInput = {
  /** Array of records to create */
  addresses: Array<CreateAddress>;
};

export type UpdateOneOrderLineInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOrderLine;
};

export type UpdateOrderLine = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceField?: Maybe<Scalars['JSON']>;
  stage?: Maybe<Scalars['String']>;
};

export type UpdateManyOrderLinesInput = {
  /** Filter used to find fields to update */
  filter: OrderLineUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateOrderLine;
};

export type OrderLineUpdateFilter = {
  and?: Maybe<Array<OrderLineUpdateFilter>>;
  or?: Maybe<Array<OrderLineUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  stage?: Maybe<StringFieldComparison>;
};

export type DeleteManyPromotionVariantPricesInput = {
  /** Filter to find records to delete */
  filter: PromotionVariantPriceDeleteFilter;
};

export type PromotionVariantPriceDeleteFilter = {
  and?: Maybe<Array<PromotionVariantPriceDeleteFilter>>;
  or?: Maybe<Array<PromotionVariantPriceDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  forever?: Maybe<BooleanFieldComparison>;
  startsAt?: Maybe<DateFieldComparison>;
  endsAt?: Maybe<DateFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type UpdateOnePromotionVariantPriceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePromotionVariantPrice;
};

export type UpdatePromotionVariantPrice = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  forever?: Maybe<Scalars['Boolean']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyPromotionVariantPricesInput = {
  /** Filter used to find fields to update */
  filter: PromotionVariantPriceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePromotionVariantPrice;
};

export type PromotionVariantPriceUpdateFilter = {
  and?: Maybe<Array<PromotionVariantPriceUpdateFilter>>;
  or?: Maybe<Array<PromotionVariantPriceUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  forever?: Maybe<BooleanFieldComparison>;
  startsAt?: Maybe<DateFieldComparison>;
  endsAt?: Maybe<DateFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type CreateOnePromotionVariantPriceInput = {
  /** The record to create */
  promotionVariantPrice: CreatePromotionVariantPrice;
};

export type CreatePromotionVariantPrice = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  forever?: Maybe<Scalars['Boolean']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type CreateManyPromotionVariantPricesInput = {
  /** Array of records to create */
  promotionVariantPrices: Array<CreatePromotionVariantPrice>;
};

export type DeleteManyCartPriceRulesInput = {
  /** Filter to find records to delete */
  filter: CartPriceRulesDeleteFilter;
};

export type CartPriceRulesDeleteFilter = {
  and?: Maybe<Array<CartPriceRulesDeleteFilter>>;
  or?: Maybe<Array<CartPriceRulesDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type UpdateOneCartPriceRulesInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCartPriceRules;
};

export type UpdateCartPriceRules = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type UpdateManyCartPriceRulesInput = {
  /** Filter used to find fields to update */
  filter: CartPriceRulesUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCartPriceRules;
};

export type CartPriceRulesUpdateFilter = {
  and?: Maybe<Array<CartPriceRulesUpdateFilter>>;
  or?: Maybe<Array<CartPriceRulesUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type CreateOneCartPriceRulesInput = {
  /** The record to create */
  cartPriceRules: CreateCartPriceRules;
};

export type CreateCartPriceRules = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CreateManyCartPriceRulesInput = {
  /** Array of records to create */
  cartPriceRules: Array<CreateCartPriceRules>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedOneAsset: AssetDeleteResponse;
  deletedManyAssets: DeleteManyResponse;
  updatedOneAsset: Asset;
  updatedManyAssets: UpdateManyResponse;
  createdAsset: Asset;
  deletedOneRole: RoleDeleteResponse;
  deletedManyRoles: DeleteManyResponse;
  updatedOneRole: Role;
  updatedManyRoles: UpdateManyResponse;
  createdRole: Role;
  deletedOneCollection: CollectionDeleteResponse;
  deletedManyCollections: DeleteManyResponse;
  updatedOneCollection: Collection;
  updatedManyCollections: UpdateManyResponse;
  createdCollection: Collection;
  deletedOneChannel: ChannelDeleteResponse;
  deletedManyChannels: DeleteManyResponse;
  updatedOneChannel: Channel;
  updatedManyChannels: UpdateManyResponse;
  createdChannel: Channel;
  deletedOneStore: StoreDeleteResponse;
  deletedManyStores: DeleteManyResponse;
  updatedOneStore: Store;
  updatedManyStores: UpdateManyResponse;
  createdStore: Store;
  deletedOneTaxCategory: TaxCategoryDeleteResponse;
  deletedManyTaxCategories: DeleteManyResponse;
  updatedOneTaxCategory: TaxCategory;
  updatedManyTaxCategories: UpdateManyResponse;
  createdTaxCategory: TaxCategory;
  deletedOneTaxRate: TaxRateDeleteResponse;
  deletedManyTaxRates: DeleteManyResponse;
  updatedOneTaxRate: TaxRate;
  updatedManyTaxRates: UpdateManyResponse;
  createdTaxRate: TaxRate;
  deletedOneUser: UserDeleteResponse;
  deletedManyUsers: DeleteManyResponse;
  updatedOneUser: User;
  updatedManyUsers: UpdateManyResponse;
  createdUser: User;
  deletedOneVendor: VendorDeleteResponse;
  deletedManyVendors: DeleteManyResponse;
  updatedOneVendor: Vendor;
  updatedManyVendors: UpdateManyResponse;
  createdVendor: Vendor;
  deletedOneZone: ZoneDeleteResponse;
  deletedManyZones: DeleteManyResponse;
  updatedOneZone: Zone;
  updatedManyZones: UpdateManyResponse;
  createdZone: Zone;
  deletedOneCountry: CountryDeleteResponse;
  deletedManyCountries: DeleteManyResponse;
  updatedOneCountry: Country;
  updatedManyCountries: UpdateManyResponse;
  createdCountry: Country;
  deletedOneSeo: SeoDeleteResponse;
  deletedManySeos: DeleteManyResponse;
  updatedOneSeo: Seo;
  updatedManySeos: UpdateManyResponse;
  createdSeo: Seo;
  deletedOneFacet: FacetDeleteResponse;
  deletedManyFacets: DeleteManyResponse;
  updatedOneFacet: Facet;
  updatedManyFacets: UpdateManyResponse;
  createdFacet: Facet;
  deletedOneFacetValue: FacetValueDeleteResponse;
  deletedManyFacetValues: DeleteManyResponse;
  updatedOneFacetValue: FacetValue;
  updatedManyFacetValues: UpdateManyResponse;
  createdFacetValue: FacetValue;
  deletedOneProduct: ProductDeleteResponse;
  deletedManyProducts: DeleteManyResponse;
  updatedOneProduct: Product;
  updatedManyProducts: UpdateManyResponse;
  createdProduct: Product;
  deletedOneProductVariant: ProductVariantDeleteResponse;
  deletedManyProductVariants: DeleteManyResponse;
  updatedOneProductVariant: ProductVariant;
  updatedManyProductVariants: UpdateManyResponse;
  createdProductVariant: ProductVariant;
  deletedOneProductOption: ProductOptionDeleteResponse;
  deletedManyProductOptions: DeleteManyResponse;
  updatedOneProductOption: ProductOption;
  updatedManyProductOptions: UpdateManyResponse;
  createdProductOption: ProductOption;
  deletedOneProductOptionGroup: ProductOptionGroupDeleteResponse;
  deletedManyProductOptionGroups: DeleteManyResponse;
  updatedOneProductOptionGroup: ProductOptionGroup;
  updatedManyProductOptionGroups: UpdateManyResponse;
  createdProductOptionGroup: ProductOptionGroup;
  deletedOneProductVariantPrice: ProductVariantPriceDeleteResponse;
  deletedManyProductVariantPrices: DeleteManyResponse;
  updatedOneProductVariantPrice: ProductVariantPrice;
  updatedManyProductVariantPrices: UpdateManyResponse;
  createdProductVariantPrice: ProductVariantPrice;
  deletedOneProductVariantAsset: ProductVariantAssetDeleteResponse;
  deletedManyProductVariantAssets: DeleteManyResponse;
  updatedOneProductVariantAsset: ProductVariantAsset;
  updatedManyProductVariantAssets: UpdateManyResponse;
  createdProductVariantAsset: ProductVariantAsset;
  deletedOneProductAsset: ProductAssetDeleteResponse;
  deletedManyProductAssets: DeleteManyResponse;
  updatedOneProductAsset: ProductAsset;
  updatedManyProductAssets: UpdateManyResponse;
  createdProductAsset: ProductAsset;
  deletedOneVendorPlans: VendorPlansDeleteResponse;
  deletedManyVendorPlans: DeleteManyResponse;
  updatedOneVendorPlans: VendorPlans;
  updatedManyVendorPlans: UpdateManyResponse;
  createdVendorPlans: VendorPlans;
  deletedOneVendorLicense: VendorLicenseDeleteResponse;
  deletedManyVendorLicenses: DeleteManyResponse;
  updatedOneVendorLicense: VendorLicense;
  updatedManyVendorLicenses: UpdateManyResponse;
  createdVendorLicense: VendorLicense;
  deletedOneStockKeeping: StockKeepingDeleteResponse;
  deletedManyStockKeepings: DeleteManyResponse;
  updatedOneStockKeeping: StockKeeping;
  updatedManyStockKeepings: UpdateManyResponse;
  createdStockKeeping: StockKeeping;
  deletedOneSale: SaleDeleteResponse;
  deletedManySales: DeleteManyResponse;
  updatedOneSale: Sale;
  updatedManySales: UpdateManyResponse;
  createdSale: Sale;
  deletedOneStockMovement: StockMovementDeleteResponse;
  deletedManyStockMovements: DeleteManyResponse;
  updatedOneStockMovement: StockMovement;
  updatedManyStockMovements: UpdateManyResponse;
  createdStockMovement: StockMovement;
  deletedOneCancellation: CancellationDeleteResponse;
  deletedManyCancellations: DeleteManyResponse;
  updatedOneCancellation: Cancellation;
  updatedManyCancellations: UpdateManyResponse;
  createdCancellation: Cancellation;
  deletedOneOrder: OrderDeleteResponse;
  deletedManyOrders: DeleteManyResponse;
  updatedOneOrder: Order;
  updatedManyOrders: UpdateManyResponse;
  createdOrder: Order;
  deletedOneZip: ZipDeleteResponse;
  deletedManyZips: DeleteManyResponse;
  updatedOneZip: Zip;
  updatedManyZips: UpdateManyResponse;
  createdZip: Zip;
  deletedOneMenu: MenuDeleteResponse;
  deletedManyMenus: DeleteManyResponse;
  updatedOneMenu: Menu;
  updatedManyMenus: UpdateManyResponse;
  createdMenu: Menu;
  deletedOnePage: PageDeleteResponse;
  deletedManyPages: DeleteManyResponse;
  updatedOnePage: Page;
  updatedManyPages: UpdateManyResponse;
  createdPage: Page;
  deletedOneAddress: AddressDeleteResponse;
  deletedManyAddresses: DeleteManyResponse;
  updatedOneAddress: Address;
  updatedManyAddresses: UpdateManyResponse;
  createdAddress: Address;
  deletedOneSettlements: SettlementsDeleteResponse;
  deletedManySettlements: DeleteManyResponse;
  updatedOneSettlements: Settlements;
  updatedManySettlements: UpdateManyResponse;
  createdSettlements: Settlements;
  deletedOneOrderLine: OrderLineDeleteResponse;
  deletedManyOrderLines: DeleteManyResponse;
  updatedOneOrderLine: OrderLine;
  updatedManyOrderLines: UpdateManyResponse;
  createdOrderLine: OrderLine;
  deletedOneOrderItem: OrderItemDeleteResponse;
  deletedManyOrderItems: DeleteManyResponse;
  updatedOneOrderItem: OrderItem;
  updatedManyOrderItems: UpdateManyResponse;
  createdOrderItem: OrderItem;
  deletedOnePromotionVariantPrice: PromotionVariantPriceDeleteResponse;
  deletedManyPromotionVariantPrices: DeleteManyResponse;
  updatedOnePromotionVariantPrice: PromotionVariantPrice;
  updatedManyPromotionVariantPrices: UpdateManyResponse;
  createdPromotionVariantPrice: PromotionVariantPrice;
  deletedOneCartPriceRules: CartPriceRulesDeleteResponse;
  deletedManyCartPriceRules: DeleteManyResponse;
  updatedOneCartPriceRules: CartPriceRules;
  updatedManyCartPriceRules: UpdateManyResponse;
  createdCartPriceRules: CartPriceRules;
};


export type SubscriptionDeletedOneAssetArgs = {
  input?: Maybe<DeleteOneAssetSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneAssetArgs = {
  input?: Maybe<UpdateOneAssetSubscriptionFilterInput>;
};


export type SubscriptionCreatedAssetArgs = {
  input?: Maybe<CreateAssetSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneRoleArgs = {
  input?: Maybe<DeleteOneRoleSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneRoleArgs = {
  input?: Maybe<UpdateOneRoleSubscriptionFilterInput>;
};


export type SubscriptionCreatedRoleArgs = {
  input?: Maybe<CreateRoleSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneCollectionArgs = {
  input?: Maybe<DeleteOneCollectionSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneCollectionArgs = {
  input?: Maybe<UpdateOneCollectionSubscriptionFilterInput>;
};


export type SubscriptionCreatedCollectionArgs = {
  input?: Maybe<CreateCollectionSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneChannelArgs = {
  input?: Maybe<DeleteOneChannelSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneChannelArgs = {
  input?: Maybe<UpdateOneChannelSubscriptionFilterInput>;
};


export type SubscriptionCreatedChannelArgs = {
  input?: Maybe<CreateChannelSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneStoreArgs = {
  input?: Maybe<DeleteOneStoreSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneStoreArgs = {
  input?: Maybe<UpdateOneStoreSubscriptionFilterInput>;
};


export type SubscriptionCreatedStoreArgs = {
  input?: Maybe<CreateStoreSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneTaxCategoryArgs = {
  input?: Maybe<DeleteOneTaxCategorySubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneTaxCategoryArgs = {
  input?: Maybe<UpdateOneTaxCategorySubscriptionFilterInput>;
};


export type SubscriptionCreatedTaxCategoryArgs = {
  input?: Maybe<CreateTaxCategorySubscriptionFilterInput>;
};


export type SubscriptionDeletedOneTaxRateArgs = {
  input?: Maybe<DeleteOneTaxRateSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneTaxRateArgs = {
  input?: Maybe<UpdateOneTaxRateSubscriptionFilterInput>;
};


export type SubscriptionCreatedTaxRateArgs = {
  input?: Maybe<CreateTaxRateSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneUserArgs = {
  input?: Maybe<DeleteOneUserSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneUserArgs = {
  input?: Maybe<UpdateOneUserSubscriptionFilterInput>;
};


export type SubscriptionCreatedUserArgs = {
  input?: Maybe<CreateUserSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneVendorArgs = {
  input?: Maybe<DeleteOneVendorSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneVendorArgs = {
  input?: Maybe<UpdateOneVendorSubscriptionFilterInput>;
};


export type SubscriptionCreatedVendorArgs = {
  input?: Maybe<CreateVendorSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneZoneArgs = {
  input?: Maybe<DeleteOneZoneSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneZoneArgs = {
  input?: Maybe<UpdateOneZoneSubscriptionFilterInput>;
};


export type SubscriptionCreatedZoneArgs = {
  input?: Maybe<CreateZoneSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneCountryArgs = {
  input?: Maybe<DeleteOneCountrySubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneCountryArgs = {
  input?: Maybe<UpdateOneCountrySubscriptionFilterInput>;
};


export type SubscriptionCreatedCountryArgs = {
  input?: Maybe<CreateCountrySubscriptionFilterInput>;
};


export type SubscriptionDeletedOneSeoArgs = {
  input?: Maybe<DeleteOneSeoSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneSeoArgs = {
  input?: Maybe<UpdateOneSeoSubscriptionFilterInput>;
};


export type SubscriptionCreatedSeoArgs = {
  input?: Maybe<CreateSeoSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneFacetArgs = {
  input?: Maybe<DeleteOneFacetSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneFacetArgs = {
  input?: Maybe<UpdateOneFacetSubscriptionFilterInput>;
};


export type SubscriptionCreatedFacetArgs = {
  input?: Maybe<CreateFacetSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneFacetValueArgs = {
  input?: Maybe<DeleteOneFacetValueSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneFacetValueArgs = {
  input?: Maybe<UpdateOneFacetValueSubscriptionFilterInput>;
};


export type SubscriptionCreatedFacetValueArgs = {
  input?: Maybe<CreateFacetValueSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductArgs = {
  input?: Maybe<DeleteOneProductSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductArgs = {
  input?: Maybe<UpdateOneProductSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductArgs = {
  input?: Maybe<CreateProductSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductVariantArgs = {
  input?: Maybe<DeleteOneProductVariantSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductVariantArgs = {
  input?: Maybe<UpdateOneProductVariantSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductVariantArgs = {
  input?: Maybe<CreateProductVariantSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductOptionArgs = {
  input?: Maybe<DeleteOneProductOptionSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductOptionArgs = {
  input?: Maybe<UpdateOneProductOptionSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductOptionArgs = {
  input?: Maybe<CreateProductOptionSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductOptionGroupArgs = {
  input?: Maybe<DeleteOneProductOptionGroupSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductOptionGroupArgs = {
  input?: Maybe<UpdateOneProductOptionGroupSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductOptionGroupArgs = {
  input?: Maybe<CreateProductOptionGroupSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductVariantPriceArgs = {
  input?: Maybe<DeleteOneProductVariantPriceSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductVariantPriceArgs = {
  input?: Maybe<UpdateOneProductVariantPriceSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductVariantPriceArgs = {
  input?: Maybe<CreateProductVariantPriceSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductVariantAssetArgs = {
  input?: Maybe<DeleteOneProductVariantAssetSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductVariantAssetArgs = {
  input?: Maybe<UpdateOneProductVariantAssetSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductVariantAssetArgs = {
  input?: Maybe<CreateProductVariantAssetSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProductAssetArgs = {
  input?: Maybe<DeleteOneProductAssetSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProductAssetArgs = {
  input?: Maybe<UpdateOneProductAssetSubscriptionFilterInput>;
};


export type SubscriptionCreatedProductAssetArgs = {
  input?: Maybe<CreateProductAssetSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneVendorPlansArgs = {
  input?: Maybe<DeleteOneVendorPlansSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneVendorPlansArgs = {
  input?: Maybe<UpdateOneVendorPlansSubscriptionFilterInput>;
};


export type SubscriptionCreatedVendorPlansArgs = {
  input?: Maybe<CreateVendorPlansSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneVendorLicenseArgs = {
  input?: Maybe<DeleteOneVendorLicenseSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneVendorLicenseArgs = {
  input?: Maybe<UpdateOneVendorLicenseSubscriptionFilterInput>;
};


export type SubscriptionCreatedVendorLicenseArgs = {
  input?: Maybe<CreateVendorLicenseSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneStockKeepingArgs = {
  input?: Maybe<DeleteOneStockKeepingSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneStockKeepingArgs = {
  input?: Maybe<UpdateOneStockKeepingSubscriptionFilterInput>;
};


export type SubscriptionCreatedStockKeepingArgs = {
  input?: Maybe<CreateStockKeepingSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneSaleArgs = {
  input?: Maybe<DeleteOneSaleSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneSaleArgs = {
  input?: Maybe<UpdateOneSaleSubscriptionFilterInput>;
};


export type SubscriptionCreatedSaleArgs = {
  input?: Maybe<CreateSaleSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneStockMovementArgs = {
  input?: Maybe<DeleteOneStockMovementSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneStockMovementArgs = {
  input?: Maybe<UpdateOneStockMovementSubscriptionFilterInput>;
};


export type SubscriptionCreatedStockMovementArgs = {
  input?: Maybe<CreateStockMovementSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneCancellationArgs = {
  input?: Maybe<DeleteOneCancellationSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneCancellationArgs = {
  input?: Maybe<UpdateOneCancellationSubscriptionFilterInput>;
};


export type SubscriptionCreatedCancellationArgs = {
  input?: Maybe<CreateCancellationSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneOrderArgs = {
  input?: Maybe<DeleteOneOrderSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneOrderArgs = {
  input?: Maybe<UpdateOneOrderSubscriptionFilterInput>;
};


export type SubscriptionCreatedOrderArgs = {
  input?: Maybe<CreateOrderSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneZipArgs = {
  input?: Maybe<DeleteOneZipSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneZipArgs = {
  input?: Maybe<UpdateOneZipSubscriptionFilterInput>;
};


export type SubscriptionCreatedZipArgs = {
  input?: Maybe<CreateZipSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneMenuArgs = {
  input?: Maybe<DeleteOneMenuSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneMenuArgs = {
  input?: Maybe<UpdateOneMenuSubscriptionFilterInput>;
};


export type SubscriptionCreatedMenuArgs = {
  input?: Maybe<CreateMenuSubscriptionFilterInput>;
};


export type SubscriptionDeletedOnePageArgs = {
  input?: Maybe<DeleteOnePageSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOnePageArgs = {
  input?: Maybe<UpdateOnePageSubscriptionFilterInput>;
};


export type SubscriptionCreatedPageArgs = {
  input?: Maybe<CreatePageSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneAddressArgs = {
  input?: Maybe<DeleteOneAddressSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneAddressArgs = {
  input?: Maybe<UpdateOneAddressSubscriptionFilterInput>;
};


export type SubscriptionCreatedAddressArgs = {
  input?: Maybe<CreateAddressSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneSettlementsArgs = {
  input?: Maybe<DeleteOneSettlementsSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneSettlementsArgs = {
  input?: Maybe<UpdateOneSettlementsSubscriptionFilterInput>;
};


export type SubscriptionCreatedSettlementsArgs = {
  input?: Maybe<CreateSettlementsSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneOrderLineArgs = {
  input?: Maybe<DeleteOneOrderLineSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneOrderLineArgs = {
  input?: Maybe<UpdateOneOrderLineSubscriptionFilterInput>;
};


export type SubscriptionCreatedOrderLineArgs = {
  input?: Maybe<CreateOrderLineSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneOrderItemArgs = {
  input?: Maybe<DeleteOneOrderItemSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneOrderItemArgs = {
  input?: Maybe<UpdateOneOrderItemSubscriptionFilterInput>;
};


export type SubscriptionCreatedOrderItemArgs = {
  input?: Maybe<CreateOrderItemSubscriptionFilterInput>;
};


export type SubscriptionDeletedOnePromotionVariantPriceArgs = {
  input?: Maybe<DeleteOnePromotionVariantPriceSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOnePromotionVariantPriceArgs = {
  input?: Maybe<UpdateOnePromotionVariantPriceSubscriptionFilterInput>;
};


export type SubscriptionCreatedPromotionVariantPriceArgs = {
  input?: Maybe<CreatePromotionVariantPriceSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneCartPriceRulesArgs = {
  input?: Maybe<DeleteOneCartPriceRulesSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneCartPriceRulesArgs = {
  input?: Maybe<UpdateOneCartPriceRulesSubscriptionFilterInput>;
};


export type SubscriptionCreatedCartPriceRulesArgs = {
  input?: Maybe<CreateCartPriceRulesSubscriptionFilterInput>;
};

export type DeleteOneAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AssetSubscriptionFilter;
};

export type AssetSubscriptionFilter = {
  and?: Maybe<Array<AssetSubscriptionFilter>>;
  or?: Maybe<Array<AssetSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
  mimeType?: Maybe<StringFieldComparison>;
  width?: Maybe<NumberFieldComparison>;
  height?: Maybe<NumberFieldComparison>;
  fileSize?: Maybe<NumberFieldComparison>;
  source?: Maybe<StringFieldComparison>;
  preview?: Maybe<StringFieldComparison>;
};

export type UpdateOneAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AssetSubscriptionFilter;
};

export type CreateAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AssetSubscriptionFilter;
};

export type DeleteOneRoleSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: RoleSubscriptionFilter;
};

export type RoleSubscriptionFilter = {
  and?: Maybe<Array<RoleSubscriptionFilter>>;
  or?: Maybe<Array<RoleSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type UpdateOneRoleSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: RoleSubscriptionFilter;
};

export type CreateRoleSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: RoleSubscriptionFilter;
};

export type DeleteOneCollectionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CollectionSubscriptionFilter;
};

export type CollectionSubscriptionFilter = {
  and?: Maybe<Array<CollectionSubscriptionFilter>>;
  or?: Maybe<Array<CollectionSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isRoot?: Maybe<BooleanFieldComparison>;
  inMenu?: Maybe<BooleanFieldComparison>;
  position?: Maybe<NumberFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type UpdateOneCollectionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CollectionSubscriptionFilter;
};

export type CreateCollectionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CollectionSubscriptionFilter;
};

export type DeleteOneChannelSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ChannelSubscriptionFilter;
};

export type ChannelSubscriptionFilter = {
  and?: Maybe<Array<ChannelSubscriptionFilter>>;
  or?: Maybe<Array<ChannelSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  token?: Maybe<StringFieldComparison>;
  defaultLanguageCode?: Maybe<StringFieldComparison>;
  currencyCode?: Maybe<StringFieldComparison>;
  pricesIncludeTax?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneChannelSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ChannelSubscriptionFilter;
};

export type CreateChannelSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ChannelSubscriptionFilter;
};

export type DeleteOneStoreSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StoreSubscriptionFilter;
};

export type StoreSubscriptionFilter = {
  and?: Maybe<Array<StoreSubscriptionFilter>>;
  or?: Maybe<Array<StoreSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  storeName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  officialemail?: Maybe<StringFieldComparison>;
  zipcode?: Maybe<StringFieldComparison>;
  streetAddress1?: Maybe<StringFieldComparison>;
  streetAddress2?: Maybe<StringFieldComparison>;
  GSTIN?: Maybe<StringFieldComparison>;
  singleStore?: Maybe<BooleanFieldComparison>;
  rentalStore?: Maybe<BooleanFieldComparison>;
  channelMarkets?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneStoreSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StoreSubscriptionFilter;
};

export type CreateStoreSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StoreSubscriptionFilter;
};

export type DeleteOneTaxCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaxCategorySubscriptionFilter;
};

export type TaxCategorySubscriptionFilter = {
  and?: Maybe<Array<TaxCategorySubscriptionFilter>>;
  or?: Maybe<Array<TaxCategorySubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneTaxCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaxCategorySubscriptionFilter;
};

export type CreateTaxCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaxCategorySubscriptionFilter;
};

export type DeleteOneTaxRateSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaxRateSubscriptionFilter;
};

export type TaxRateSubscriptionFilter = {
  and?: Maybe<Array<TaxRateSubscriptionFilter>>;
  or?: Maybe<Array<TaxRateSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneTaxRateSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaxRateSubscriptionFilter;
};

export type CreateTaxRateSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaxRateSubscriptionFilter;
};

export type DeleteOneUserSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: UserSubscriptionFilter;
};

export type UserSubscriptionFilter = {
  and?: Maybe<Array<UserSubscriptionFilter>>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  verified?: Maybe<BooleanFieldComparison>;
  verificationToken?: Maybe<StringFieldComparison>;
  passwordResetToken?: Maybe<StringFieldComparison>;
  identifierChangeToken?: Maybe<StringFieldComparison>;
  pendingIdentifier?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  firstName?: Maybe<StringFieldComparison>;
  lastName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
};

export type UpdateOneUserSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: UserSubscriptionFilter;
};

export type CreateUserSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: UserSubscriptionFilter;
};

export type DeleteOneVendorSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorSubscriptionFilter;
};

export type VendorSubscriptionFilter = {
  and?: Maybe<Array<VendorSubscriptionFilter>>;
  or?: Maybe<Array<VendorSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  vendorName?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneVendorSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorSubscriptionFilter;
};

export type CreateVendorSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorSubscriptionFilter;
};

export type DeleteOneZoneSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ZoneSubscriptionFilter;
};

export type ZoneSubscriptionFilter = {
  and?: Maybe<Array<ZoneSubscriptionFilter>>;
  or?: Maybe<Array<ZoneSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneZoneSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ZoneSubscriptionFilter;
};

export type CreateZoneSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ZoneSubscriptionFilter;
};

export type DeleteOneCountrySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CountrySubscriptionFilter;
};

export type CountrySubscriptionFilter = {
  and?: Maybe<Array<CountrySubscriptionFilter>>;
  or?: Maybe<Array<CountrySubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneCountrySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CountrySubscriptionFilter;
};

export type CreateCountrySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CountrySubscriptionFilter;
};

export type DeleteOneSeoSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SeoSubscriptionFilter;
};

export type SeoSubscriptionFilter = {
  and?: Maybe<Array<SeoSubscriptionFilter>>;
  or?: Maybe<Array<SeoSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  urlKey?: Maybe<StringFieldComparison>;
  metatitle?: Maybe<StringFieldComparison>;
};

export type UpdateOneSeoSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SeoSubscriptionFilter;
};

export type CreateSeoSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SeoSubscriptionFilter;
};

export type DeleteOneFacetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FacetSubscriptionFilter;
};

export type FacetSubscriptionFilter = {
  and?: Maybe<Array<FacetSubscriptionFilter>>;
  or?: Maybe<Array<FacetSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isPrivate?: Maybe<BooleanFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneFacetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FacetSubscriptionFilter;
};

export type CreateFacetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FacetSubscriptionFilter;
};

export type DeleteOneFacetValueSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FacetValueSubscriptionFilter;
};

export type FacetValueSubscriptionFilter = {
  and?: Maybe<Array<FacetValueSubscriptionFilter>>;
  or?: Maybe<Array<FacetValueSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneFacetValueSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FacetValueSubscriptionFilter;
};

export type CreateFacetValueSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FacetValueSubscriptionFilter;
};

export type DeleteOneProductSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductSubscriptionFilter;
};

export type ProductSubscriptionFilter = {
  and?: Maybe<Array<ProductSubscriptionFilter>>;
  or?: Maybe<Array<ProductSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  productName?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
};

export type UpdateOneProductSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductSubscriptionFilter;
};

export type CreateProductSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductSubscriptionFilter;
};

export type DeleteOneProductVariantSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantSubscriptionFilter;
};

export type ProductVariantSubscriptionFilter = {
  and?: Maybe<Array<ProductVariantSubscriptionFilter>>;
  or?: Maybe<Array<ProductVariantSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  dum_price?: Maybe<NumberFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  trackInventory?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneProductVariantSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantSubscriptionFilter;
};

export type CreateProductVariantSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantSubscriptionFilter;
};

export type DeleteOneProductOptionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductOptionSubscriptionFilter;
};

export type ProductOptionSubscriptionFilter = {
  and?: Maybe<Array<ProductOptionSubscriptionFilter>>;
  or?: Maybe<Array<ProductOptionSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneProductOptionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductOptionSubscriptionFilter;
};

export type CreateProductOptionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductOptionSubscriptionFilter;
};

export type DeleteOneProductOptionGroupSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductOptionGroupSubscriptionFilter;
};

export type ProductOptionGroupSubscriptionFilter = {
  and?: Maybe<Array<ProductOptionGroupSubscriptionFilter>>;
  or?: Maybe<Array<ProductOptionGroupSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
};

export type UpdateOneProductOptionGroupSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductOptionGroupSubscriptionFilter;
};

export type CreateProductOptionGroupSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductOptionGroupSubscriptionFilter;
};

export type DeleteOneProductVariantPriceSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantPriceSubscriptionFilter;
};

export type ProductVariantPriceSubscriptionFilter = {
  and?: Maybe<Array<ProductVariantPriceSubscriptionFilter>>;
  or?: Maybe<Array<ProductVariantPriceSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
};

export type UpdateOneProductVariantPriceSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantPriceSubscriptionFilter;
};

export type CreateProductVariantPriceSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantPriceSubscriptionFilter;
};

export type DeleteOneProductVariantAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantAssetSubscriptionFilter;
};

export type ProductVariantAssetSubscriptionFilter = {
  and?: Maybe<Array<ProductVariantAssetSubscriptionFilter>>;
  or?: Maybe<Array<ProductVariantAssetSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneProductVariantAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantAssetSubscriptionFilter;
};

export type CreateProductVariantAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductVariantAssetSubscriptionFilter;
};

export type DeleteOneProductAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductAssetSubscriptionFilter;
};

export type ProductAssetSubscriptionFilter = {
  and?: Maybe<Array<ProductAssetSubscriptionFilter>>;
  or?: Maybe<Array<ProductAssetSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateOneProductAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductAssetSubscriptionFilter;
};

export type CreateProductAssetSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProductAssetSubscriptionFilter;
};

export type DeleteOneVendorPlansSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorPlansSubscriptionFilter;
};

export type VendorPlansSubscriptionFilter = {
  and?: Maybe<Array<VendorPlansSubscriptionFilter>>;
  or?: Maybe<Array<VendorPlansSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  planValue?: Maybe<NumberFieldComparison>;
};

export type UpdateOneVendorPlansSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorPlansSubscriptionFilter;
};

export type CreateVendorPlansSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorPlansSubscriptionFilter;
};

export type DeleteOneVendorLicenseSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorLicenseSubscriptionFilter;
};

export type VendorLicenseSubscriptionFilter = {
  and?: Maybe<Array<VendorLicenseSubscriptionFilter>>;
  or?: Maybe<Array<VendorLicenseSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  tenureStart?: Maybe<DateFieldComparison>;
  tenureEnd?: Maybe<DateFieldComparison>;
};

export type UpdateOneVendorLicenseSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorLicenseSubscriptionFilter;
};

export type CreateVendorLicenseSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: VendorLicenseSubscriptionFilter;
};

export type DeleteOneStockKeepingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StockKeepingSubscriptionFilter;
};

export type StockKeepingSubscriptionFilter = {
  and?: Maybe<Array<StockKeepingSubscriptionFilter>>;
  or?: Maybe<Array<StockKeepingSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
  available_quantity?: Maybe<NumberFieldComparison>;
  threshold?: Maybe<NumberFieldComparison>;
  multiple?: Maybe<BooleanFieldComparison>;
  backorder?: Maybe<BooleanFieldComparison>;
  stockstatus?: Maybe<BooleanFieldComparison>;
  sku?: Maybe<StringFieldComparison>;
  type?: Maybe<StringFieldComparison>;
};

export type UpdateOneStockKeepingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StockKeepingSubscriptionFilter;
};

export type CreateStockKeepingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StockKeepingSubscriptionFilter;
};

export type DeleteOneSaleSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SaleSubscriptionFilter;
};

export type SaleSubscriptionFilter = {
  and?: Maybe<Array<SaleSubscriptionFilter>>;
  or?: Maybe<Array<SaleSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneSaleSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SaleSubscriptionFilter;
};

export type CreateSaleSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SaleSubscriptionFilter;
};

export type DeleteOneStockMovementSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StockMovementSubscriptionFilter;
};

export type StockMovementSubscriptionFilter = {
  and?: Maybe<Array<StockMovementSubscriptionFilter>>;
  or?: Maybe<Array<StockMovementSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneStockMovementSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StockMovementSubscriptionFilter;
};

export type CreateStockMovementSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: StockMovementSubscriptionFilter;
};

export type DeleteOneCancellationSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CancellationSubscriptionFilter;
};

export type CancellationSubscriptionFilter = {
  and?: Maybe<Array<CancellationSubscriptionFilter>>;
  or?: Maybe<Array<CancellationSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneCancellationSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CancellationSubscriptionFilter;
};

export type CreateCancellationSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CancellationSubscriptionFilter;
};

export type DeleteOneOrderSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderSubscriptionFilter;
};

export type OrderSubscriptionFilter = {
  and?: Maybe<Array<OrderSubscriptionFilter>>;
  or?: Maybe<Array<OrderSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  totalPrice?: Maybe<NumberFieldComparison>;
  address?: Maybe<StringFieldComparison>;
};

export type UpdateOneOrderSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderSubscriptionFilter;
};

export type CreateOrderSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderSubscriptionFilter;
};

export type DeleteOneZipSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ZipSubscriptionFilter;
};

export type ZipSubscriptionFilter = {
  and?: Maybe<Array<ZipSubscriptionFilter>>;
  or?: Maybe<Array<ZipSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  code?: Maybe<NumberFieldComparison>;
};

export type UpdateOneZipSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ZipSubscriptionFilter;
};

export type CreateZipSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ZipSubscriptionFilter;
};

export type DeleteOneMenuSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: MenuSubscriptionFilter;
};

export type MenuSubscriptionFilter = {
  and?: Maybe<Array<MenuSubscriptionFilter>>;
  or?: Maybe<Array<MenuSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  target?: Maybe<StringFieldComparison>;
};

export type UpdateOneMenuSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: MenuSubscriptionFilter;
};

export type CreateMenuSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: MenuSubscriptionFilter;
};

export type DeleteOnePageSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PageSubscriptionFilter;
};

export type PageSubscriptionFilter = {
  and?: Maybe<Array<PageSubscriptionFilter>>;
  or?: Maybe<Array<PageSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  title?: Maybe<StringFieldComparison>;
  targetId?: Maybe<StringFieldComparison>;
  pageType?: Maybe<PageTypeFilterComparison>;
  pageCategory?: Maybe<PageCategoryFilterComparison>;
};

export type UpdateOnePageSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PageSubscriptionFilter;
};

export type CreatePageSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PageSubscriptionFilter;
};

export type DeleteOneAddressSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AddressSubscriptionFilter;
};

export type AddressSubscriptionFilter = {
  and?: Maybe<Array<AddressSubscriptionFilter>>;
  or?: Maybe<Array<AddressSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  fullName?: Maybe<StringFieldComparison>;
  addressLine?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  landmark?: Maybe<StringFieldComparison>;
  postalCode?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  alternatePhoneNumber?: Maybe<StringFieldComparison>;
  defaultShippingAddress?: Maybe<BooleanFieldComparison>;
  defaultBillingAddress?: Maybe<BooleanFieldComparison>;
  addressType?: Maybe<AddressTypeFilterComparison>;
};

export type UpdateOneAddressSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AddressSubscriptionFilter;
};

export type CreateAddressSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AddressSubscriptionFilter;
};

export type DeleteOneSettlementsSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SettlementsSubscriptionFilter;
};

export type SettlementsSubscriptionFilter = {
  and?: Maybe<Array<SettlementsSubscriptionFilter>>;
  or?: Maybe<Array<SettlementsSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  amount?: Maybe<NumberFieldComparison>;
  taxamount?: Maybe<NumberFieldComparison>;
  finalamount?: Maybe<NumberFieldComparison>;
  transactionID?: Maybe<StringFieldComparison>;
  remarks?: Maybe<StringFieldComparison>;
  type?: Maybe<SettlementTypeFilterComparison>;
};

export type UpdateOneSettlementsSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SettlementsSubscriptionFilter;
};

export type CreateSettlementsSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: SettlementsSubscriptionFilter;
};

export type DeleteOneOrderLineSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderLineSubscriptionFilter;
};

export type OrderLineSubscriptionFilter = {
  and?: Maybe<Array<OrderLineSubscriptionFilter>>;
  or?: Maybe<Array<OrderLineSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  stage?: Maybe<StringFieldComparison>;
};

export type UpdateOneOrderLineSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderLineSubscriptionFilter;
};

export type CreateOrderLineSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderLineSubscriptionFilter;
};

export type DeleteOneOrderItemSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderItemSubscriptionFilter;
};

export type OrderItemSubscriptionFilter = {
  and?: Maybe<Array<OrderItemSubscriptionFilter>>;
  or?: Maybe<Array<OrderItemSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  quantity?: Maybe<NumberFieldComparison>;
};

export type UpdateOneOrderItemSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderItemSubscriptionFilter;
};

export type CreateOrderItemSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: OrderItemSubscriptionFilter;
};

export type DeleteOnePromotionVariantPriceSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PromotionVariantPriceSubscriptionFilter;
};

export type PromotionVariantPriceSubscriptionFilter = {
  and?: Maybe<Array<PromotionVariantPriceSubscriptionFilter>>;
  or?: Maybe<Array<PromotionVariantPriceSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
  forever?: Maybe<BooleanFieldComparison>;
  startsAt?: Maybe<DateFieldComparison>;
  endsAt?: Maybe<DateFieldComparison>;
  enabled?: Maybe<BooleanFieldComparison>;
};

export type UpdateOnePromotionVariantPriceSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PromotionVariantPriceSubscriptionFilter;
};

export type CreatePromotionVariantPriceSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: PromotionVariantPriceSubscriptionFilter;
};

export type DeleteOneCartPriceRulesSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CartPriceRulesSubscriptionFilter;
};

export type CartPriceRulesSubscriptionFilter = {
  and?: Maybe<Array<CartPriceRulesSubscriptionFilter>>;
  or?: Maybe<Array<CartPriceRulesSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  priceType?: Maybe<StringFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type UpdateOneCartPriceRulesSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CartPriceRulesSubscriptionFilter;
};

export type CreateCartPriceRulesSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CartPriceRulesSubscriptionFilter;
};

export type AdministratorLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AdministratorLoginMutation = (
  { __typename?: 'Mutation' }
  & { administratorLogin: (
    { __typename?: 'AdministratorDto' }
    & Pick<AdministratorDto, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'verified' | 'phoneNumber'>
      & { administrator?: Maybe<(
        { __typename?: 'Administrator' }
        & Pick<Administrator, 'id'>
      )> }
    ), store?: Maybe<(
      { __typename?: 'Store' }
      & Pick<Store, 'id'>
    )> }
  ) }
);

export type CreateDefaultStoreMutationVariables = Exact<{
  countryId: Scalars['String'];
  zipcode: Scalars['String'];
  streetAddress2: Scalars['String'];
  streetAddress1: Scalars['String'];
  GSTIN: Scalars['String'];
  officialemail: Scalars['String'];
  phoneNumber: Scalars['String'];
  storeName: Scalars['String'];
}>;


export type CreateDefaultStoreMutation = (
  { __typename?: 'Mutation' }
  & { CreateDefaultStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id'>
  ) }
);

export type CreateOneStoreMutationVariables = Exact<{
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  type?: Maybe<StoreTypeEnum>;
  GSTIN?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
}>;


export type CreateOneStoreMutation = (
  { __typename?: 'Mutation' }
  & { createOneStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id'>
  ) }
);

export type SetCountryOnStoreMutationVariables = Exact<{
  countryId: Scalars['ID'];
  storeId: Scalars['ID'];
}>;


export type SetCountryOnStoreMutation = (
  { __typename?: 'Mutation' }
  & { setCountryOnStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id'>
  ) }
);

export type CreateOneZoneMutationVariables = Exact<{
  zone?: Maybe<Scalars['String']>;
}>;


export type CreateOneZoneMutation = (
  { __typename?: 'Mutation' }
  & { createOneZone: (
    { __typename?: 'Zone' }
    & Pick<Zone, 'id'>
  ) }
);

export type UpdateOneStoreMutationVariables = Exact<{
  id: Scalars['ID'];
  storeName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  officialemail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  streetAddress1?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  GSTIN?: Maybe<Scalars['String']>;
  singleStore?: Maybe<Scalars['Boolean']>;
  rentalStore?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateOneStoreMutation = (
  { __typename?: 'Mutation' }
  & { updateOneStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id'>
  ) }
);

export type CreateTaxRuleMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type CreateTaxRuleMutation = (
  { __typename?: 'Mutation' }
  & { createOneTaxCategory: (
    { __typename?: 'TaxCategory' }
    & Pick<TaxCategory, 'id'>
  ) }
);

export type CreateTaxRateMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;


export type CreateTaxRateMutation = (
  { __typename?: 'Mutation' }
  & { createOneTaxRate: (
    { __typename?: 'TaxRate' }
    & Pick<TaxRate, 'id'>
  ) }
);

export type SetZoneOnTaxRateMutationVariables = Exact<{
  id: Scalars['ID'];
  zoneID: Scalars['ID'];
}>;


export type SetZoneOnTaxRateMutation = (
  { __typename?: 'Mutation' }
  & { setZoneOnTaxRate: (
    { __typename?: 'TaxRate' }
    & Pick<TaxRate, 'id'>
  ) }
);

export type SetCategoryOnTaxRateMutationVariables = Exact<{
  id: Scalars['ID'];
  categoryId: Scalars['ID'];
}>;


export type SetCategoryOnTaxRateMutation = (
  { __typename?: 'Mutation' }
  & { setCategoryOnTaxRate: (
    { __typename?: 'TaxRate' }
    & Pick<TaxRate, 'id'>
  ) }
);

export type CreateOneChannelMutationVariables = Exact<{
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
  defaultLanguageCode: Scalars['String'];
}>;


export type CreateOneChannelMutation = (
  { __typename?: 'Mutation' }
  & { createOneChannel: (
    { __typename?: 'Channel' }
    & Pick<Channel, 'id'>
  ) }
);

export type CreateOneCollectionMutationVariables = Exact<{
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
}>;


export type CreateOneCollectionMutation = (
  { __typename?: 'Mutation' }
  & { createOneCollection: (
    { __typename?: 'Collection' }
    & Pick<Collection, 'id'>
  ) }
);

export type AddParentToChildCollectionMutationVariables = Exact<{
  parentId: Scalars['String'];
  childId: Scalars['String'];
}>;


export type AddParentToChildCollectionMutation = (
  { __typename?: 'Mutation' }
  & { AddParentToChildCollection: (
    { __typename?: 'Collection' }
    & Pick<Collection, 'id'>
  ) }
);

export type CreateOneSeoMutationVariables = Exact<{
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
  metakeywords?: Maybe<Array<Scalars['String']>>;
  metadesc?: Maybe<Scalars['String']>;
}>;


export type CreateOneSeoMutation = (
  { __typename?: 'Mutation' }
  & { createOneSeo: (
    { __typename?: 'Seo' }
    & Pick<Seo, 'id'>
  ) }
);

export type SetSeoOnCollectionMutationVariables = Exact<{
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}>;


export type SetSeoOnCollectionMutation = (
  { __typename?: 'Mutation' }
  & { setSeoOnCollection: (
    { __typename?: 'Collection' }
    & Pick<Collection, 'id'>
  ) }
);

export type UpdateCollectionMutationVariables = Exact<{
  colId: Scalars['ID'];
  seoID: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  inMenu?: Maybe<Scalars['Boolean']>;
  desc?: Maybe<Scalars['String']>;
  urlKey?: Maybe<Scalars['String']>;
  metatitle?: Maybe<Scalars['String']>;
  metadesc?: Maybe<Scalars['String']>;
  metakeywords: Array<Scalars['String']>;
}>;


export type UpdateCollectionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCollection: (
    { __typename?: 'Collection' }
    & Pick<Collection, 'id'>
  ), updateOneSeo: (
    { __typename?: 'Seo' }
    & Pick<Seo, 'id'>
  ) }
);

export type CreateAssetMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type CreateAssetMutation = (
  { __typename?: 'Mutation' }
  & { createAsset: (
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'preview' | 'source' | 'fileSize'>
  ) }
);

export type CreateFacetMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
}>;


export type CreateFacetMutation = (
  { __typename?: 'Mutation' }
  & { createOneFacet: (
    { __typename?: 'Facet' }
    & Pick<Facet, 'id'>
  ) }
);

export type CreateFacetValueMutationVariables = Exact<{
  code?: Maybe<Scalars['String']>;
}>;


export type CreateFacetValueMutation = (
  { __typename?: 'Mutation' }
  & { createOneFacetValue: (
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id'>
  ) }
);

export type SetFacetOnValueMutationVariables = Exact<{
  id: Scalars['ID'];
  rel: Scalars['ID'];
}>;


export type SetFacetOnValueMutation = (
  { __typename?: 'Mutation' }
  & { setFacetOnFacetValue: (
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id'>
  ) }
);

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String'];
  slug: Scalars['String'];
  desc: Scalars['String'];
  facet: Array<Scalars['String']>;
  asset: Array<Scalars['String']>;
  featured: Scalars['String'];
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { CreateProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  ) }
);

export type UpdateProductMutationVariables = Exact<{
  name: Scalars['String'];
  id: Scalars['ID'];
  desc: Scalars['String'];
  facet: Array<Scalars['String']>;
  asset: Array<Scalars['String']>;
  featured: Scalars['String'];
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  ) }
);

export type CreatePlanMutationVariables = Exact<{
  value: Scalars['Float'];
  name: Scalars['String'];
  priceStrategy: VendorPlanPrice;
  tenureStrategy: VendorPlanTenure;
}>;


export type CreatePlanMutation = (
  { __typename?: 'Mutation' }
  & { CreatePlan: (
    { __typename?: 'VendorPlans' }
    & Pick<VendorPlans, 'id'>
  ) }
);

export type UpdatePlanMutationVariables = Exact<{
  id: Scalars['ID'];
  status: Scalars['Boolean'];
}>;


export type UpdatePlanMutation = (
  { __typename?: 'Mutation' }
  & { UpdatePlan: (
    { __typename?: 'VendorPlans' }
    & Pick<VendorPlans, 'id'>
  ) }
);

export type CreateProductVariantsMutationVariables = Exact<{
  prodId: Scalars['ID'];
  options: Scalars['String'];
}>;


export type CreateProductVariantsMutation = (
  { __typename?: 'Mutation' }
  & { CreateProductVariants: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id'>
  )> }
);

export type CreateVariantPriceMutationVariables = Exact<{
  taxId: Scalars['ID'];
  price: Scalars['Float'];
  variantId: Scalars['ID'];
  taxIncluded: Scalars['Boolean'];
  storeId?: Maybe<Scalars['ID']>;
}>;


export type CreateVariantPriceMutation = (
  { __typename?: 'Mutation' }
  & { CreateVariantPrice: (
    { __typename?: 'ProductVariantPrice' }
    & Pick<ProductVariantPrice, 'id'>
  ) }
);

export type UpdateVariantPriceMutationVariables = Exact<{
  taxId: Scalars['ID'];
  price: Scalars['Float'];
  variantPriceId: Scalars['ID'];
  taxIncluded: Scalars['Boolean'];
}>;


export type UpdateVariantPriceMutation = (
  { __typename?: 'Mutation' }
  & { UpdateVariantPrice: (
    { __typename?: 'ProductVariantPrice' }
    & Pick<ProductVariantPrice, 'id'>
  ) }
);

export type RegisterVendorMutationVariables = Exact<{
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  password: Scalars['String'];
  storeName: Scalars['String'];
  storeNumber: Scalars['String'];
  officialEmail: Scalars['String'];
  region: Scalars['ID'];
  zipcode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  rentals: Scalars['Boolean'];
  planID: Scalars['String'];
}>;


export type RegisterVendorMutation = (
  { __typename?: 'Mutation' }
  & { RegisterVendor: (
    { __typename?: 'VendorDto' }
    & Pick<VendorDto, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), vendor: (
      { __typename?: 'Vendor' }
      & Pick<Vendor, 'id'>
    ) }
  ) }
);

export type LoginVendorMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginVendorMutation = (
  { __typename?: 'Mutation' }
  & { LoginVendor: (
    { __typename?: 'VendorDto' }
    & Pick<VendorDto, 'token'>
    & { vendor: (
      { __typename?: 'Vendor' }
      & Pick<Vendor, 'id'>
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type CreateRoleMutationVariables = Exact<{
  roles: Array<Permission>;
  description: Scalars['String'];
  code: Scalars['String'];
}>;


export type CreateRoleMutation = (
  { __typename?: 'Mutation' }
  & { createRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'id'>
  ) }
);

export type UpdateRoleMutationVariables = Exact<{
  roles: Array<Permission>;
  description: Scalars['String'];
  id: Scalars['ID'];
}>;


export type UpdateRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateRole: (
    { __typename?: 'Role' }
    & Pick<Role, 'id'>
  ) }
);

export type CreateAdministratorMutationVariables = Exact<{
  type: AdministratorEnum;
  email: Scalars['String'];
  lname: Scalars['String'];
  fname: Scalars['String'];
  phone: Scalars['String'];
}>;


export type CreateAdministratorMutation = (
  { __typename?: 'Mutation' }
  & { createAdministrator: (
    { __typename?: 'Administrator' }
    & Pick<Administrator, 'id'>
  ) }
);

export type CreateProductVariantSpecificationMutationVariables = Exact<{
  specs: Scalars['JSON'];
  variantId: Scalars['ID'];
}>;


export type CreateProductVariantSpecificationMutation = (
  { __typename?: 'Mutation' }
  & { CreateProductVariantSpecification: (
    { __typename?: 'ProductVariantSpecs' }
    & Pick<ProductVariantSpecs, 'id' | 'specs'>
  ) }
);

export type UpdateProductVariantSpecificationMutationVariables = Exact<{
  specs: Scalars['JSON'];
  id: Scalars['ID'];
}>;


export type UpdateProductVariantSpecificationMutation = (
  { __typename?: 'Mutation' }
  & { UpdateProductVariantSpecification: (
    { __typename?: 'ProductVariantSpecs' }
    & Pick<ProductVariantSpecs, 'id' | 'specs'>
  ) }
);

export type UpdateProductCollectionMutationVariables = Exact<{
  id: Scalars['ID'];
  collectionId: Scalars['ID'];
}>;


export type UpdateProductCollectionMutation = (
  { __typename?: 'Mutation' }
  & { UpdateProductCollection: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  ) }
);

export type UpdateOneSeoMutationVariables = Exact<{
  id: Scalars['ID'];
  metatitle?: Maybe<Scalars['String']>;
  metakeywords: Array<Scalars['String']>;
  metadesc?: Maybe<Scalars['String']>;
}>;


export type UpdateOneSeoMutation = (
  { __typename?: 'Mutation' }
  & { updateOneSeo: (
    { __typename?: 'Seo' }
    & Pick<Seo, 'id'>
  ) }
);

export type CreateBillingRequestMutationVariables = Exact<{
  id: Scalars['String'];
  value: Scalars['String'];
}>;


export type CreateBillingRequestMutation = (
  { __typename?: 'Mutation' }
  & { CreateBillingRequest: (
    { __typename?: 'BillingAgreementRequest' }
    & Pick<BillingAgreementRequest, 'id'>
  ) }
);

export type UpdateBillingRequestMutationVariables = Exact<{
  id: Scalars['String'];
  value: Scalars['String'];
}>;


export type UpdateBillingRequestMutation = (
  { __typename?: 'Mutation' }
  & { UpdateBillingRequest: (
    { __typename?: 'BillingAgreementRequest' }
    & Pick<BillingAgreementRequest, 'id'>
  ) }
);

export type AddCountryToZoneMutationVariables = Exact<{
  id: Scalars['ID'];
  countryId: Scalars['ID'];
}>;


export type AddCountryToZoneMutation = (
  { __typename?: 'Mutation' }
  & { AddCountryToZone: (
    { __typename?: 'Zone' }
    & Pick<Zone, 'id' | 'name'>
  ) }
);

export type DeleteOneFacetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneFacetMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneFacet: (
    { __typename?: 'FacetDeleteResponse' }
    & Pick<FacetDeleteResponse, 'id'>
  ) }
);

export type DeleteOneFacetValueMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneFacetValueMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneFacetValue: (
    { __typename?: 'FacetValueDeleteResponse' }
    & Pick<FacetValueDeleteResponse, 'id'>
  ) }
);

export type CreateProductVariantAssetMutationVariables = Exact<{
  assetId: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type CreateProductVariantAssetMutation = (
  { __typename?: 'Mutation' }
  & { CreateProductVariantAsset: (
    { __typename?: 'ProductVariantAsset' }
    & Pick<ProductVariantAsset, 'id'>
  ) }
);

export type CreateProductSeoMutationVariables = Exact<{
  variantId: Scalars['ID'];
  metadesc: Scalars['String'];
  metakeywords: Array<Scalars['String']>;
  urlKey: Scalars['String'];
  metatitle: Scalars['String'];
}>;


export type CreateProductSeoMutation = (
  { __typename?: 'Mutation' }
  & { createProductSeo: (
    { __typename?: 'Seo' }
    & Pick<Seo, 'id'>
  ) }
);

export type UpdateProductSeoMutationVariables = Exact<{
  seoId: Scalars['ID'];
  metadesc: Scalars['String'];
  metakeywords: Array<Scalars['String']>;
  urlKey: Scalars['String'];
  metatitle: Scalars['String'];
}>;


export type UpdateProductSeoMutation = (
  { __typename?: 'Mutation' }
  & { updateProductSeo: (
    { __typename?: 'Seo' }
    & Pick<Seo, 'id'>
  ) }
);

export type CreateOrUpdateStockMutationVariables = Exact<{
  quantity: Scalars['Float'];
  threshold: Scalars['Float'];
  sku: Scalars['String'];
  multiple: Scalars['Boolean'];
  backorder: Scalars['Boolean'];
  stockstatus: Scalars['Boolean'];
  variantId?: Maybe<Scalars['ID']>;
  stockId?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
  type?: Maybe<StockKeepingType>;
}>;


export type CreateOrUpdateStockMutation = (
  { __typename?: 'Mutation' }
  & { createOrUpdateStock: (
    { __typename?: 'StockKeeping' }
    & Pick<StockKeeping, 'id'>
  ) }
);

export type CreateOneZipMutationVariables = Exact<{
  code: Scalars['Float'];
}>;


export type CreateOneZipMutation = (
  { __typename?: 'Mutation' }
  & { createOneZip: (
    { __typename?: 'Zip' }
    & Pick<Zip, 'id'>
  ) }
);

export type CreateOneMenuMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
}>;


export type CreateOneMenuMutation = (
  { __typename?: 'Mutation' }
  & { createOneMenu: (
    { __typename?: 'Menu' }
    & Pick<Menu, 'id'>
  ) }
);

export type CreateMenuChildNodeMutationVariables = Exact<{
  nodeId: Scalars['ID'];
  target: Scalars['String'];
  targetId: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreateMenuChildNodeMutation = (
  { __typename?: 'Mutation' }
  & { CreateMenuChildNode: (
    { __typename?: 'Menu' }
    & Pick<Menu, 'id'>
  ) }
);

export type CreateHomeMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
  single?: Maybe<Scalars['JSON']>;
  pageType?: Maybe<PageType>;
}>;


export type CreateHomeMutation = (
  { __typename?: 'Mutation' }
  & { createOnePage: (
    { __typename?: 'Page' }
    & Pick<Page, 'id'>
  ) }
);

export type UpdateHomeMutationVariables = Exact<{
  id: Scalars['ID'];
  single?: Maybe<Scalars['JSON']>;
}>;


export type UpdateHomeMutation = (
  { __typename?: 'Mutation' }
  & { updateOnePage: (
    { __typename?: 'Page' }
    & Pick<Page, 'id'>
  ) }
);

export type AddZipsToVendorMutationVariables = Exact<{
  id: Scalars['ID'];
  zips: Array<Scalars['ID']>;
}>;


export type AddZipsToVendorMutation = (
  { __typename?: 'Mutation' }
  & { addZipsToVendor: (
    { __typename?: 'Vendor' }
    & Pick<Vendor, 'id'>
  ) }
);

export type CreateZipToVendorMutationVariables = Exact<{
  zips: Array<Scalars['ID']>;
  vendorId: Scalars['ID'];
}>;


export type CreateZipToVendorMutation = (
  { __typename?: 'Mutation' }
  & { CreateZipToVendor: (
    { __typename?: 'Vendor' }
    & Pick<Vendor, 'id'>
  ) }
);

export type CreateOrderAdminMutationVariables = Exact<{
  orderLineDto: Array<OrderLineDto>;
  address: Scalars['String'];
  userId: Scalars['ID'];
}>;


export type CreateOrderAdminMutation = (
  { __typename?: 'Mutation' }
  & { createOrderAdmin: (
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
  ) }
);

export type UpdateOrderLineMutationVariables = Exact<{
  id: Scalars['ID'];
  stage?: Maybe<Scalars['String']>;
}>;


export type UpdateOrderLineMutation = (
  { __typename?: 'Mutation' }
  & { updateOneOrderLine: (
    { __typename?: 'OrderLine' }
    & Pick<OrderLine, 'id'>
  ) }
);

export type CreateOnePromotionVariantPriceMutationVariables = Exact<{
  priceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  startsAt?: Maybe<Scalars['DateTime']>;
}>;


export type CreateOnePromotionVariantPriceMutation = (
  { __typename?: 'Mutation' }
  & { createOnePromotionVariantPrice: (
    { __typename?: 'PromotionVariantPrice' }
    & Pick<PromotionVariantPrice, 'id'>
  ) }
);

export type SetPriceOnPromotionVariantPriceMutationVariables = Exact<{
  promo: Scalars['ID'];
  relan: Scalars['ID'];
}>;


export type SetPriceOnPromotionVariantPriceMutation = (
  { __typename?: 'Mutation' }
  & { setPriceOnPromotionVariantPrice: (
    { __typename?: 'PromotionVariantPrice' }
    & Pick<PromotionVariantPrice, 'id'>
  ) }
);

export type GetAdministratorDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdministratorDataQuery = (
  { __typename?: 'Query' }
  & { GetAdministratorData: (
    { __typename?: 'Administrator' }
    & Pick<Administrator, 'id' | 'firstName' | 'lastName' | 'emailAddress' | 'type'>
  ) }
);

export type GetVendorInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVendorInfoQuery = (
  { __typename?: 'Query' }
  & { GetVendorInfo?: Maybe<(
    { __typename?: 'Vendor' }
    & Pick<Vendor, 'id' | 'vendorName' | 'phoneNumber' | 'email'>
    & { store: (
      { __typename?: 'Store' }
      & Pick<Store, 'id' | 'storeName' | 'phoneNumber' | 'officialemail' | 'zipcode' | 'streetAddress1' | 'streetAddress2' | 'GSTIN' | 'singleStore' | 'rentalStore' | 'channelMarkets'>
      & { balance?: Maybe<(
        { __typename?: 'StoreBalance' }
        & Pick<StoreBalance, 'id' | 'balance' | 'updatedAt'>
      )> }
    ) }
  )> }
);

export type GetDefaultStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultStoreQuery = (
  { __typename?: 'Query' }
  & { GetDefaultStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id' | 'storeName' | 'phoneNumber' | 'officialemail' | 'zipcode' | 'streetAddress1' | 'streetAddress2' | 'GSTIN' | 'singleStore' | 'rentalStore' | 'channelMarkets'>
    & { balance?: Maybe<(
      { __typename?: 'StoreBalance' }
      & Pick<StoreBalance, 'id' | 'balance' | 'updatedAt'>
    )> }
  ) }
);

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = (
  { __typename?: 'Query' }
  & { GetAllCountries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'id' | 'code' | 'name' | 'enabled'>
  )> }
);

export type GetAllZonesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllZonesQuery = (
  { __typename?: 'Query' }
  & { zones: Array<(
    { __typename?: 'Zone' }
    & Pick<Zone, 'id' | 'name'>
  )> }
);

export type GetZoneAgreegateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetZoneAgreegateQuery = (
  { __typename?: 'Query' }
  & { zoneAggregate: (
    { __typename?: 'ZoneAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'ZoneCountAggregate' }
      & Pick<ZoneCountAggregate, 'id'>
    )> }
  ) }
);

export type GetTaxRulesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetTaxRulesQuery = (
  { __typename?: 'Query' }
  & { taxCategories: Array<(
    { __typename?: 'TaxCategory' }
    & Pick<TaxCategory, 'id' | 'name'>
  )> }
);

export type GetTaxCategoryAgreegateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaxCategoryAgreegateQuery = (
  { __typename?: 'Query' }
  & { taxCategoryAggregate: (
    { __typename?: 'TaxCategoryAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'TaxCategoryCountAggregate' }
      & Pick<TaxCategoryCountAggregate, 'id'>
    )> }
  ) }
);

export type GetTaxRatesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetTaxRatesQuery = (
  { __typename?: 'Query' }
  & { taxRates: Array<(
    { __typename?: 'TaxRate' }
    & Pick<TaxRate, 'id' | 'name' | 'value' | 'enabled'>
    & { zone: (
      { __typename?: 'Zone' }
      & Pick<Zone, 'id' | 'name'>
    ), category: (
      { __typename?: 'TaxCategory' }
      & Pick<TaxCategory, 'id' | 'name'>
    ) }
  )> }
);

export type GetTaxRateAgreegateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaxRateAgreegateQuery = (
  { __typename?: 'Query' }
  & { taxRateAggregate: (
    { __typename?: 'TaxRateAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'TaxRateCountAggregate' }
      & Pick<TaxRateCountAggregate, 'id'>
    )> }
  ) }
);

export type GetAllChannelsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: Array<(
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'code' | 'defaultLanguageCode' | 'currencyCode' | 'pricesIncludeTax'>
  )> }
);

export type GetallcollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallcollectionQuery = (
  { __typename?: 'Query' }
  & { GetCollectionTree: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'isRoot' | 'inMenu' | 'name' | 'description'>
    & { children: Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'isRoot' | 'inMenu' | 'name' | 'description'>
      & { children: Array<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'isRoot' | 'inMenu' | 'name' | 'description'>
      )> }
    )> }
  )> }
);

export type GetOneCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOneCollectionQuery = (
  { __typename?: 'Query' }
  & { collection?: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name' | 'isRoot' | 'inMenu' | 'description'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metadesc' | 'metatitle' | 'metakeywords'>
    )> }
  )> }
);

export type GetAllAssetsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllAssetsQuery = (
  { __typename?: 'Query' }
  & { assets: Array<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'createdAt' | 'name' | 'type' | 'mimeType' | 'source' | 'preview' | 'fileSize' | 'width' | 'height'>
  )> }
);

export type GetAssetsAggregateQueryVariables = Exact<{
  iLike?: Maybe<Scalars['String']>;
}>;


export type GetAssetsAggregateQuery = (
  { __typename?: 'Query' }
  & { assetAggregate: (
    { __typename?: 'AssetAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'AssetCountAggregate' }
      & Pick<AssetCountAggregate, 'id'>
    )> }
  ) }
);

export type GetAllFacetsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllFacetsQuery = (
  { __typename?: 'Query' }
  & { facets: Array<(
    { __typename?: 'Facet' }
    & Pick<Facet, 'id' | 'createdAt' | 'name' | 'isPrivate' | 'code'>
  )> }
);

export type GetFacetAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFacetAggregateQuery = (
  { __typename?: 'Query' }
  & { facetAggregate: (
    { __typename?: 'FacetAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'FacetCountAggregate' }
      & Pick<FacetCountAggregate, 'id'>
    )> }
  ) }
);

export type GetFacetValuesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetFacetValuesQuery = (
  { __typename?: 'Query' }
  & { facetValues: Array<(
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id' | 'code'>
    & { facet: (
      { __typename?: 'Facet' }
      & Pick<Facet, 'id' | 'code' | 'name'>
    ) }
  )> }
);

export type GetFacetValueAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFacetValueAggregateQuery = (
  { __typename?: 'Query' }
  & { facetValueAggregate: (
    { __typename?: 'FacetValueAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'FacetValueCountAggregate' }
      & Pick<FacetValueCountAggregate, 'id'>
    )> }
  ) }
);

export type GetAllProductsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'slug' | 'productName' | 'description'>
    & { featuredAsset: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'preview' | 'source'>
    ), facets: Array<(
      { __typename?: 'FacetValue' }
      & Pick<FacetValue, 'id' | 'code'>
      & { facet: (
        { __typename?: 'Facet' }
        & Pick<Facet, 'id' | 'name' | 'code'>
      ) }
    )>, assets: Array<(
      { __typename?: 'ProductAsset' }
      & Pick<ProductAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'name' | 'type' | 'mimeType' | 'preview' | 'source'>
      ) }
    )> }
  )> }
);

export type GetProductAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductAggregateQuery = (
  { __typename?: 'Query' }
  & { productAggregate: (
    { __typename?: 'ProductAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'ProductCountAggregate' }
      & Pick<ProductCountAggregate, 'id'>
    )> }
  ) }
);

export type GetFacetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFacetQuery = (
  { __typename?: 'Query' }
  & { facet?: Maybe<(
    { __typename?: 'Facet' }
    & Pick<Facet, 'id' | 'isPrivate' | 'name' | 'code'>
    & { values: Array<(
      { __typename?: 'FacetValue' }
      & Pick<FacetValue, 'id' | 'code'>
    )> }
  )> }
);

export type GetOneProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOneProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'productName' | 'slug' | 'description'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'description'>
    )>, featuredAsset: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'preview' | 'source'>
    ), facets: Array<(
      { __typename?: 'FacetValue' }
      & Pick<FacetValue, 'id' | 'code'>
      & { facet: (
        { __typename?: 'Facet' }
        & Pick<Facet, 'id' | 'name' | 'code'>
      ) }
    )>, assets: Array<(
      { __typename?: 'ProductAsset' }
      & Pick<ProductAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'source' | 'preview'>
      ) }
    )> }
  )> }
);

export type GetAllVendurePlansQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllVendurePlansQuery = (
  { __typename?: 'Query' }
  & { vendorPlans: Array<(
    { __typename?: 'VendorPlans' }
    & Pick<VendorPlans, 'id' | 'isActive' | 'name' | 'planValue' | 'priceStrategy' | 'tenureStrategy'>
  )> }
);

export type GetProductVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductVariantQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { variants: Array<(
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'name' | 'enabled' | 'sku' | 'trackInventory' | 'dum_price'>
      & { seo?: Maybe<(
        { __typename?: 'Seo' }
        & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metakeywords' | 'metadesc'>
      )>, specs?: Maybe<(
        { __typename?: 'ProductVariantSpecs' }
        & Pick<ProductVariantSpecs, 'id' | 'specs'>
      )>, asset?: Maybe<(
        { __typename?: 'ProductVariantAsset' }
        & Pick<ProductVariantAsset, 'id'>
        & { asset: (
          { __typename?: 'Asset' }
          & Pick<Asset, 'id' | 'preview'>
        ) }
      )> }
    )>, options: Array<(
      { __typename?: 'ProductOptionGroup' }
      & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
      & { options: Array<(
        { __typename?: 'ProductOption' }
        & Pick<ProductOption, 'id' | 'name' | 'code'>
      )> }
    )> }
  )> }
);

export type GetAllTaxRatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTaxRatesQuery = (
  { __typename?: 'Query' }
  & { GetAllTaxRates: Array<(
    { __typename?: 'TaxRate' }
    & Pick<TaxRate, 'id' | 'name' | 'value' | 'enabled'>
    & { category: (
      { __typename?: 'TaxCategory' }
      & Pick<TaxCategory, 'id' | 'name'>
    ), zone: (
      { __typename?: 'Zone' }
      & Pick<Zone, 'id' | 'name'>
    ) }
  )> }
);

export type ZoneFindManyQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoneFindManyQuery = (
  { __typename?: 'Query' }
  & { ZoneFindMany: Array<(
    { __typename?: 'Zone' }
    & Pick<Zone, 'id' | 'name'>
  )> }
);

export type FindAllVendorPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllVendorPlansQuery = (
  { __typename?: 'Query' }
  & { FindAllVendorPlans: Array<(
    { __typename?: 'VendorPlans' }
    & Pick<VendorPlans, 'id' | 'isActive' | 'name' | 'planValue' | 'priceStrategy'>
  )> }
);

export type GetAllRolesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllRolesQuery = (
  { __typename?: 'Query' }
  & { roles: Array<(
    { __typename?: 'Role' }
    & Pick<Role, 'id' | 'code' | 'description' | 'type'>
  )> }
);

export type GetRoleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRoleQuery = (
  { __typename?: 'Query' }
  & { role?: Maybe<(
    { __typename?: 'Role' }
    & Pick<Role, 'id' | 'code' | 'description' | 'permissions' | 'type'>
  )> }
);

export type GetAllAdministratorQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type GetAllAdministratorQuery = (
  { __typename?: 'Query' }
  & { GetAllAdministrator: Array<(
    { __typename?: 'Administrator' }
    & Pick<Administrator, 'id' | 'firstName' | 'lastName' | 'emailAddress' | 'type'>
  )> }
);

export type GetSingleProductVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleProductVariantQuery = (
  { __typename?: 'Query' }
  & { productVariant?: Maybe<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name' | 'dum_price' | 'enabled' | 'sku' | 'trackInventory'>
    & { specs?: Maybe<(
      { __typename?: 'ProductVariantSpecs' }
      & Pick<ProductVariantSpecs, 'id' | 'specs'>
    )> }
  )> }
);

export type GetBillingAgreementByVendorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBillingAgreementByVendorQuery = (
  { __typename?: 'Query' }
  & { GetBillingAgreementByVendor: Array<(
    { __typename?: 'BillingAgreement' }
    & Pick<BillingAgreement, 'id' | 'value' | 'type' | 'state'>
    & { request: Array<(
      { __typename?: 'BillingAgreementRequest' }
      & Pick<BillingAgreementRequest, 'id' | 'value' | 'state'>
    )>, collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'description' | 'isPrivate'>
      & { parent?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type GetAllSeoQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllSeoQuery = (
  { __typename?: 'Query' }
  & { seos: Array<(
    { __typename?: 'Seo' }
    & Pick<Seo, 'id' | 'urlKey' | 'metadesc' | 'metatitle' | 'metakeywords'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
    )>, variant?: Maybe<(
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'name'>
    )> }
  )> }
);

export type GetOneSeoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOneSeoQuery = (
  { __typename?: 'Query' }
  & { seo?: Maybe<(
    { __typename?: 'Seo' }
    & Pick<Seo, 'urlKey' | 'metadesc' | 'metatitle' | 'metakeywords'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
    )>, variant?: Maybe<(
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'name'>
    )> }
  )> }
);

export type GetSeoAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoAggregateQuery = (
  { __typename?: 'Query' }
  & { seoAggregate: (
    { __typename?: 'SeoAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'SeoCountAggregate' }
      & Pick<SeoCountAggregate, 'id'>
    )> }
  ) }
);

export type GetBillingAgreementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBillingAgreementQuery = (
  { __typename?: 'Query' }
  & { GetBillingAgreement: (
    { __typename?: 'BillingAgreement' }
    & Pick<BillingAgreement, 'id' | 'value' | 'type' | 'state' | 'createdAt' | 'updatedAt'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'description' | 'isPrivate'>
      & { parent?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      )> }
    )> }
  ) }
);

export type GetBillingRequestForAgreementQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBillingRequestForAgreementQuery = (
  { __typename?: 'Query' }
  & { GetBillingRequestForAgreement: Array<(
    { __typename?: 'BillingAgreementRequest' }
    & Pick<BillingAgreementRequest, 'id' | 'createdAt' | 'updatedAt' | 'value' | 'state'>
  )> }
);

export type ZoneFindOneQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ZoneFindOneQuery = (
  { __typename?: 'Query' }
  & { ZoneFindOne: (
    { __typename?: 'Zone' }
    & Pick<Zone, 'id' | 'name'>
    & { members: Array<(
      { __typename?: 'Country' }
      & Pick<Country, 'id' | 'code' | 'name' | 'enabled'>
    )> }
  ) }
);

export type GetAllTaxCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTaxCategoryQuery = (
  { __typename?: 'Query' }
  & { GetAllTaxCategory: Array<(
    { __typename?: 'TaxCategory' }
    & Pick<TaxCategory, 'id' | 'name'>
  )> }
);

export type GetStockKeepingVendorQueryVariables = Exact<{
  variantId: Scalars['ID'];
  vendorId?: Maybe<Scalars['ID']>;
}>;


export type GetStockKeepingVendorQuery = (
  { __typename?: 'Query' }
  & { getStockKeepingVendor?: Maybe<(
    { __typename?: 'StockKeeping' }
    & Pick<StockKeeping, 'id' | 'quantity' | 'threshold' | 'multiple' | 'backorder' | 'stockstatus' | 'sku'>
  )> }
);

export type FindAllZipQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllZipQuery = (
  { __typename?: 'Query' }
  & { findAllZip: Array<(
    { __typename?: 'Zip' }
    & Pick<Zip, 'id' | 'name' | 'slug' | 'code'>
  )> }
);

export type GetStockKeepingByStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStockKeepingByStoreQuery = (
  { __typename?: 'Query' }
  & { getStockKeepingByStore: Array<(
    { __typename?: 'StockKeeping' }
    & Pick<StockKeeping, 'id' | 'sku' | 'quantity' | 'threshold' | 'multiple' | 'backorder' | 'stockstatus'>
    & { variant: (
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'name'>
    ) }
  )> }
);

export type GetMenuTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuTreeQuery = (
  { __typename?: 'Query' }
  & { GetMenuTree: (
    { __typename?: 'MenuResponseTypes' }
    & Pick<MenuResponseTypes, 'menu'>
  ) }
);

export type SearchProductVariantsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type SearchProductVariantsQuery = (
  { __typename?: 'Query' }
  & { productVariants: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name' | 'enabled'>
    & { prices?: Maybe<Array<(
      { __typename?: 'ProductVariantPrice' }
      & Pick<ProductVariantPrice, 'id' | 'price' | 'taxIncluded'>
      & { store: (
        { __typename?: 'Store' }
        & Pick<Store, 'id' | 'storeName'>
      ), tax?: Maybe<(
        { __typename?: 'TaxRate' }
        & Pick<TaxRate, 'id' | 'value' | 'name'>
      )> }
    )>>, asset?: Maybe<(
      { __typename?: 'ProductVariantAsset' }
      & Pick<ProductVariantAsset, 'id'>
      & { asset: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview'>
      ) }
    )> }
  )> }
);

export type SearchCollectionQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type SearchCollectionQuery = (
  { __typename?: 'Query' }
  & { collections: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name'>
  )> }
);

export type SearchFacetValueQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type SearchFacetValueQuery = (
  { __typename?: 'Query' }
  & { facetValues: Array<(
    { __typename?: 'FacetValue' }
    & Pick<FacetValue, 'id' | 'code'>
    & { facet: (
      { __typename?: 'Facet' }
      & Pick<Facet, 'id' | 'name'>
    ) }
  )> }
);

export type GetAllUsersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName'>
    & { administrator?: Maybe<(
      { __typename?: 'Administrator' }
      & Pick<Administrator, 'id'>
    )>, vendor?: Maybe<(
      { __typename?: 'Vendor' }
      & Pick<Vendor, 'id'>
    )> }
  )> }
);

export type GetUsersAggregateQueryVariables = Exact<{
  iLike?: Maybe<Scalars['String']>;
}>;


export type GetUsersAggregateQuery = (
  { __typename?: 'Query' }
  & { userAggregate: (
    { __typename?: 'UserAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'UserCountAggregate' }
      & Pick<UserCountAggregate, 'id'>
    )> }
  ) }
);

export type GetUserInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserInfoQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'createdAt' | 'updatedAt' | 'email' | 'verified' | 'verificationToken' | 'pendingIdentifier' | 'firstName' | 'lastName' | 'phoneNumber'>
    & { address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'createdAt' | 'updatedAt' | 'fullName' | 'addressLine' | 'city' | 'state' | 'landmark' | 'postalCode' | 'phoneNumber' | 'alternatePhoneNumber' | 'defaultBillingAddress' | 'defaultShippingAddress' | 'addressType'>
    )>, administrator?: Maybe<(
      { __typename?: 'Administrator' }
      & Pick<Administrator, 'id' | 'firstName' | 'lastName'>
    )>, vendor?: Maybe<(
      { __typename?: 'Vendor' }
      & Pick<Vendor, 'id' | 'email'>
    )> }
  )> }
);

export type GetPriceForVariantQueryVariables = Exact<{
  prodId?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
}>;


export type GetPriceForVariantQuery = (
  { __typename?: 'Query' }
  & { GetPriceForVariant?: Maybe<(
    { __typename?: 'ProductVariantPrice' }
    & Pick<ProductVariantPrice, 'id' | 'price' | 'taxIncluded'>
    & { tax?: Maybe<(
      { __typename?: 'TaxRate' }
      & Pick<TaxRate, 'id' | 'name'>
    )>, promoprice?: Maybe<(
      { __typename?: 'PromotionVariantPrice' }
      & Pick<PromotionVariantPrice, 'id' | 'priceType' | 'value' | 'forever'>
    )> }
  )> }
);

export type GetAllVebdorsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllVebdorsQuery = (
  { __typename?: 'Query' }
  & { vendors: Array<(
    { __typename?: 'Vendor' }
    & Pick<Vendor, 'id' | 'vendorName' | 'email' | 'phoneNumber'>
    & { store: (
      { __typename?: 'Store' }
      & Pick<Store, 'id' | 'storeName'>
    ) }
  )> }
);

export type GetVendorAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVendorAggregateQuery = (
  { __typename?: 'Query' }
  & { vendorAggregate: (
    { __typename?: 'VendorAggregateResponse' }
    & { count?: Maybe<(
      { __typename?: 'VendorCountAggregate' }
      & Pick<VendorCountAggregate, 'id'>
    )> }
  ) }
);

export type GetQueryProductVariantQueryVariables = Exact<{
  iLike?: Maybe<Scalars['String']>;
}>;


export type GetQueryProductVariantQuery = (
  { __typename?: 'Query' }
  & { productVariants: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name'>
    & { seo?: Maybe<(
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey'>
    )> }
  )> }
);

export type GetCollectionForSearchQueryVariables = Exact<{
  iLike?: Maybe<Scalars['String']>;
}>;


export type GetCollectionForSearchQuery = (
  { __typename?: 'Query' }
  & { collections: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'name'>
  )> }
);

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = (
  { __typename?: 'Query' }
  & { getHomePage: (
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'targetId' | 'single' | 'list' | 'pageCategory'>
  ) }
);

export type GetSearchProdQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetSearchProdQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'productName'>
  )> }
);

export type GetSearchProductVariantQueryVariables = Exact<{
  iLike?: Maybe<Scalars['String']>;
}>;


export type GetSearchProductVariantQuery = (
  { __typename?: 'Query' }
  & { productVariants: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'name'>
  )> }
);

export type GetAllPagesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllPagesQuery = (
  { __typename?: 'Query' }
  & { pages: Array<(
    { __typename?: 'Page' }
    & Pick<Page, 'title' | 'targetId' | 'pageType' | 'pageCategory'>
  )> }
);

export type AllZipsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  vendor?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type AllZipsQuery = (
  { __typename?: 'Query' }
  & { zips: Array<(
    { __typename?: 'Zip' }
    & Pick<Zip, 'id' | 'name' | 'code' | 'slug'>
  )> }
);

export type SearchAllZipQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Float']>;
}>;


export type SearchAllZipQuery = (
  { __typename?: 'Query' }
  & { zips: Array<(
    { __typename?: 'Zip' }
    & Pick<Zip, 'id' | 'name' | 'code' | 'slug'>
  )> }
);

export type QueryUSerByEmailOrPhoneQueryVariables = Exact<{
  type?: Maybe<Scalars['String']>;
}>;


export type QueryUSerByEmailOrPhoneQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'phoneNumber'>
    & { address?: Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'fullName' | 'addressLine' | 'landmark' | 'city' | 'state' | 'postalCode'>
    )> }
  )> }
);

export type SearchAllOrdersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type SearchAllOrdersQuery = (
  { __typename?: 'Query' }
  & { orders: Array<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'totalPrice' | 'address' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ), lines: Array<(
      { __typename?: 'OrderLine' }
      & Pick<OrderLine, 'id' | 'priceField' | 'stage'>
      & { item: (
        { __typename?: 'OrderItem' }
        & Pick<OrderItem, 'id' | 'quantity'>
      ) }
    )> }
  )> }
);

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderByIdQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'totalPrice' | 'address' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ), lines: Array<(
      { __typename?: 'OrderLine' }
      & Pick<OrderLine, 'id' | 'stage' | 'priceField'>
      & { item: (
        { __typename?: 'OrderItem' }
        & Pick<OrderItem, 'id' | 'quantity'>
        & { productVariant: (
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name'>
        ) }
      ) }
    )> }
  )> }
);

export type GetOrderLinesQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetOrderLinesQuery = (
  { __typename?: 'Query' }
  & { orderLines: Array<(
    { __typename?: 'OrderLine' }
    & Pick<OrderLine, 'id' | 'priceField' | 'stage'>
    & { store: (
      { __typename?: 'Store' }
      & Pick<Store, 'id' | 'storeName' | 'phoneNumber'>
    ), item: (
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'id' | 'quantity'>
      & { productVariant: (
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'id' | 'name'>
      ) }
    ), order: (
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'totalPrice' | 'address'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName'>
      ) }
    ) }
  )> }
);

export type GetSingleOrderLineQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSingleOrderLineQuery = (
  { __typename?: 'Query' }
  & { orderLine?: Maybe<(
    { __typename?: 'OrderLine' }
    & Pick<OrderLine, 'id' | 'priceField' | 'stage'>
    & { store: (
      { __typename?: 'Store' }
      & Pick<Store, 'id' | 'storeName'>
    ), item: (
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'id' | 'quantity'>
      & { productVariant: (
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'id' | 'name'>
      ) }
    ), order: (
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'address' | 'createdAt'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'phoneNumber'>
      ) }
    ) }
  )> }
);


export const AdministratorLoginDocument = gql`
    mutation administratorLogin($email: String!, $password: String!) {
  administratorLogin(email: $email, password: $password) {
    user {
      firstName
      lastName
      verified
      phoneNumber
      administrator {
        id
      }
    }
    token
    store {
      id
    }
  }
}
    `;
export const CreateDefaultStoreDocument = gql`
    mutation CreateDefaultStore($countryId: String!, $zipcode: String!, $streetAddress2: String!, $streetAddress1: String!, $GSTIN: String!, $officialemail: String!, $phoneNumber: String!, $storeName: String!) {
  CreateDefaultStore(countryId: $countryId, zipcode: $zipcode, streetAddress2: $streetAddress2, streetAddress1: $streetAddress1, GSTIN: $GSTIN, officialemail: $officialemail, phoneNumber: $phoneNumber, storeName: $storeName) {
    id
  }
}
    `;
export const CreateOneStoreDocument = gql`
    mutation createOneStore($storeName: String, $phoneNumber: String, $officialemail: String, $type: StoreTypeEnum, $GSTIN: String, $streetAddress1: String, $streetAddress2: String, $zipcode: String) {
  createOneStore(input: {store: {storeName: $storeName, phoneNumber: $phoneNumber, officialemail: $officialemail, type: $type, GSTIN: $GSTIN, streetAddress1: $streetAddress1, streetAddress2: $streetAddress2, zipcode: $zipcode}}) {
    id
  }
}
    `;
export const SetCountryOnStoreDocument = gql`
    mutation setCountryOnStore($countryId: ID!, $storeId: ID!) {
  setCountryOnStore(input: {id: $storeId, relationId: $countryId}) {
    id
  }
}
    `;
export const CreateOneZoneDocument = gql`
    mutation createOneZone($zone: String) {
  createOneZone(input: {zone: {name: $zone}}) {
    id
  }
}
    `;
export const UpdateOneStoreDocument = gql`
    mutation updateOneStore($id: ID!, $storeName: String, $phoneNumber: String, $officialemail: String, $zipcode: String, $streetAddress1: String, $streetAddress2: String, $GSTIN: String, $singleStore: Boolean, $rentalStore: Boolean) {
  updateOneStore(input: {id: $id, update: {storeName: $storeName, phoneNumber: $phoneNumber, officialemail: $officialemail, zipcode: $zipcode, streetAddress1: $streetAddress1, streetAddress2: $streetAddress2, GSTIN: $GSTIN, singleStore: $singleStore, rentalStore: $rentalStore}}) {
    id
  }
}
    `;
export const CreateTaxRuleDocument = gql`
    mutation CreateTaxRule($name: String) {
  createOneTaxCategory(input: {taxCategory: {name: $name}}) {
    id
  }
}
    `;
export const CreateTaxRateDocument = gql`
    mutation CreateTaxRate($name: String, $value: Float, $enabled: Boolean) {
  createOneTaxRate(input: {taxRate: {name: $name, value: $value, enabled: $enabled}}) {
    id
  }
}
    `;
export const SetZoneOnTaxRateDocument = gql`
    mutation SetZoneOnTaxRate($id: ID!, $zoneID: ID!) {
  setZoneOnTaxRate(input: {id: $id, relationId: $zoneID}) {
    id
  }
}
    `;
export const SetCategoryOnTaxRateDocument = gql`
    mutation SetCategoryOnTaxRate($id: ID!, $categoryId: ID!) {
  setCategoryOnTaxRate(input: {id: $id, relationId: $categoryId}) {
    id
  }
}
    `;
export const CreateOneChannelDocument = gql`
    mutation CreateOneChannel($code: String, $token: String, $currencyCode: String, $pricesIncludeTax: Boolean, $defaultLanguageCode: String!) {
  createOneChannel(input: {channel: {code: $code, token: $token, defaultLanguageCode: $defaultLanguageCode, currencyCode: $currencyCode, pricesIncludeTax: $pricesIncludeTax}}) {
    id
  }
}
    `;
export const CreateOneCollectionDocument = gql`
    mutation CreateOneCollection($isRoot: Boolean, $name: String, $desc: String) {
  createOneCollection(input: {collection: {isRoot: $isRoot, name: $name, description: $desc}}) {
    id
  }
}
    `;
export const AddParentToChildCollectionDocument = gql`
    mutation AddParentToChildCollection($parentId: String!, $childId: String!) {
  AddParentToChildCollection(parentId: $parentId, childId: $childId) {
    id
  }
}
    `;
export const CreateOneSeoDocument = gql`
    mutation CreateOneSeo($urlKey: String, $metatitle: String, $metakeywords: [String!], $metadesc: String) {
  createOneSeo(input: {seo: {urlKey: $urlKey, metatitle: $metatitle, metakeywords: $metakeywords, metadesc: $metadesc}}) {
    id
  }
}
    `;
export const SetSeoOnCollectionDocument = gql`
    mutation SetSeoOnCollection($id: ID!, $relationId: ID!) {
  setSeoOnCollection(input: {id: $id, relationId: $relationId}) {
    id
  }
}
    `;
export const UpdateCollectionDocument = gql`
    mutation UpdateCollection($colId: ID!, $seoID: ID!, $name: String, $inMenu: Boolean, $desc: String, $urlKey: String, $metatitle: String, $metadesc: String, $metakeywords: [String!]!) {
  updateOneCollection(input: {id: $colId, update: {name: $name, inMenu: $inMenu, description: $desc}}) {
    id
  }
  updateOneSeo(input: {id: $seoID, update: {urlKey: $urlKey, metatitle: $metatitle, metadesc: $metadesc, metakeywords: $metakeywords}}) {
    id
  }
}
    `;
export const CreateAssetDocument = gql`
    mutation CreateAsset($file: Upload!) {
  createAsset(file: $file) {
    id
    preview
    source
    fileSize
  }
}
    `;
export const CreateFacetDocument = gql`
    mutation CreateFacet($name: String, $isPrivate: Boolean, $code: String) {
  createOneFacet(input: {facet: {name: $name, isPrivate: $isPrivate, code: $code}}) {
    id
  }
}
    `;
export const CreateFacetValueDocument = gql`
    mutation CreateFacetValue($code: String) {
  createOneFacetValue(input: {facetValue: {code: $code}}) {
    id
  }
}
    `;
export const SetFacetOnValueDocument = gql`
    mutation SetFacetOnValue($id: ID!, $rel: ID!) {
  setFacetOnFacetValue(input: {id: $id, relationId: $rel}) {
    id
  }
}
    `;
export const CreateProductDocument = gql`
    mutation CreateProduct($name: String!, $slug: String!, $desc: String!, $facet: [String!]!, $asset: [String!]!, $featured: String!) {
  CreateProduct(name: $name, slug: $slug, desc: $desc, facet: $facet, asset: $asset, featured: $featured) {
    id
  }
}
    `;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($name: String!, $id: ID!, $desc: String!, $facet: [String!]!, $asset: [String!]!, $featured: String!) {
  updateProduct(facet: $facet, asset: $asset, id: $id, desc: $desc, name: $name, featured: $featured) {
    id
  }
}
    `;
export const CreatePlanDocument = gql`
    mutation CreatePlan($value: Float!, $name: String!, $priceStrategy: VendorPlanPrice!, $tenureStrategy: VendorPlanTenure!) {
  CreatePlan(value: $value, name: $name, priceStrategy: $priceStrategy, tenureStrategy: $tenureStrategy) {
    id
  }
}
    `;
export const UpdatePlanDocument = gql`
    mutation UpdatePlan($id: ID!, $status: Boolean!) {
  UpdatePlan(id: $id, status: $status) {
    id
  }
}
    `;
export const CreateProductVariantsDocument = gql`
    mutation CreateProductVariants($prodId: ID!, $options: String!) {
  CreateProductVariants(prodId: $prodId, options: $options) {
    id
  }
}
    `;
export const CreateVariantPriceDocument = gql`
    mutation CreateVariantPrice($taxId: ID!, $price: Float!, $variantId: ID!, $taxIncluded: Boolean!, $storeId: ID) {
  CreateVariantPrice(taxId: $taxId, price: $price, variantId: $variantId, taxIncluded: $taxIncluded, storeId: $storeId) {
    id
  }
}
    `;
export const UpdateVariantPriceDocument = gql`
    mutation UpdateVariantPrice($taxId: ID!, $price: Float!, $variantPriceId: ID!, $taxIncluded: Boolean!) {
  UpdateVariantPrice(taxId: $taxId, price: $price, variantPriceId: $variantPriceId, taxIncluded: $taxIncluded) {
    id
  }
}
    `;
export const RegisterVendorDocument = gql`
    mutation RegisterVendor($firstname: String!, $lastname: String!, $email: String!, $phone: String!, $password: String!, $storeName: String!, $storeNumber: String!, $officialEmail: String!, $region: ID!, $zipcode: String!, $streetAddress1: String!, $streetAddress2: String!, $rentals: Boolean!, $planID: String!) {
  RegisterVendor(firstname: $firstname, lastname: $lastname, email: $email, phone: $phone, password: $password, storeName: $storeName, storeNumber: $storeNumber, officialEmail: $officialEmail, region: $region, zipcode: $zipcode, streetAddress1: $streetAddress1, streetAddress2: $streetAddress2, rentals: $rentals, planID: $planID) {
    user {
      id
    }
    vendor {
      id
    }
    token
  }
}
    `;
export const LoginVendorDocument = gql`
    mutation LoginVendor($email: String!, $password: String!) {
  LoginVendor(email: $email, password: $password) {
    vendor {
      id
    }
    token
    user {
      id
    }
  }
}
    `;
export const CreateRoleDocument = gql`
    mutation createRole($roles: [Permission!]!, $description: String!, $code: String!) {
  createRole(roles: $roles, description: $description, code: $code) {
    id
  }
}
    `;
export const UpdateRoleDocument = gql`
    mutation updateRole($roles: [Permission!]!, $description: String!, $id: ID!) {
  updateRole(roles: $roles, description: $description, id: $id) {
    id
  }
}
    `;
export const CreateAdministratorDocument = gql`
    mutation createAdministrator($type: AdministratorEnum!, $email: String!, $lname: String!, $fname: String!, $phone: String!) {
  createAdministrator(type: $type, email: $email, lname: $lname, fname: $fname, phone: $phone) {
    id
  }
}
    `;
export const CreateProductVariantSpecificationDocument = gql`
    mutation CreateProductVariantSpecification($specs: JSON!, $variantId: ID!) {
  CreateProductVariantSpecification(specs: $specs, variantId: $variantId) {
    id
    specs
  }
}
    `;
export const UpdateProductVariantSpecificationDocument = gql`
    mutation UpdateProductVariantSpecification($specs: JSON!, $id: ID!) {
  UpdateProductVariantSpecification(specs: $specs, id: $id) {
    id
    specs
  }
}
    `;
export const UpdateProductCollectionDocument = gql`
    mutation UpdateProductCollection($id: ID!, $collectionId: ID!) {
  UpdateProductCollection(id: $id, collectionId: $collectionId) {
    id
  }
}
    `;
export const UpdateOneSeoDocument = gql`
    mutation UpdateOneSeo($id: ID!, $metatitle: String, $metakeywords: [String!]!, $metadesc: String) {
  updateOneSeo(input: {id: $id, update: {metatitle: $metatitle, metakeywords: $metakeywords, metadesc: $metadesc}}) {
    id
  }
}
    `;
export const CreateBillingRequestDocument = gql`
    mutation CreateBillingRequest($id: String!, $value: String!) {
  CreateBillingRequest(id: $id, value: $value) {
    id
  }
}
    `;
export const UpdateBillingRequestDocument = gql`
    mutation UpdateBillingRequest($id: String!, $value: String!) {
  UpdateBillingRequest(id: $id, value: $value) {
    id
  }
}
    `;
export const AddCountryToZoneDocument = gql`
    mutation AddCountryToZone($id: ID!, $countryId: ID!) {
  AddCountryToZone(id: $id, countryId: $countryId) {
    id
    name
  }
}
    `;
export const DeleteOneFacetDocument = gql`
    mutation DeleteOneFacet($id: ID!) {
  deleteOneFacet(input: {id: $id}) {
    id
  }
}
    `;
export const DeleteOneFacetValueDocument = gql`
    mutation DeleteOneFacetValue($id: ID!) {
  deleteOneFacetValue(input: {id: $id}) {
    id
  }
}
    `;
export const CreateProductVariantAssetDocument = gql`
    mutation CreateProductVariantAsset($assetId: ID!, $id: ID!) {
  CreateProductVariantAsset(assetId: $assetId, id: $id) {
    id
  }
}
    `;
export const CreateProductSeoDocument = gql`
    mutation CreateProductSeo($variantId: ID!, $metadesc: String!, $metakeywords: [String!]!, $urlKey: String!, $metatitle: String!) {
  createProductSeo(variantId: $variantId, metadesc: $metadesc, metakeywords: $metakeywords, urlKey: $urlKey, metatitle: $metatitle) {
    id
  }
}
    `;
export const UpdateProductSeoDocument = gql`
    mutation updateProductSeo($seoId: ID!, $metadesc: String!, $metakeywords: [String!]!, $urlKey: String!, $metatitle: String!) {
  updateProductSeo(seoId: $seoId, metadesc: $metadesc, metakeywords: $metakeywords, urlKey: $urlKey, metatitle: $metatitle) {
    id
  }
}
    `;
export const CreateOrUpdateStockDocument = gql`
    mutation CreateOrUpdateStock($quantity: Float!, $threshold: Float!, $sku: String!, $multiple: Boolean!, $backorder: Boolean!, $stockstatus: Boolean!, $variantId: ID, $stockId: ID, $storeId: ID, $type: StockKeepingType) {
  createOrUpdateStock(quantity: $quantity, threshold: $threshold, sku: $sku, multiple: $multiple, backorder: $backorder, stockstatus: $stockstatus, variantId: $variantId, stockId: $stockId, storeId: $storeId, type: $type) {
    id
  }
}
    `;
export const CreateOneZipDocument = gql`
    mutation createOneZip($code: Float!) {
  createOneZip(input: {zip: {code: $code}}) {
    id
  }
}
    `;
export const CreateOneMenuDocument = gql`
    mutation createOneMenu($title: String, $targetId: String, $target: String) {
  createOneMenu(input: {menu: {title: $title, targetId: $targetId, target: $target}}) {
    id
  }
}
    `;
export const CreateMenuChildNodeDocument = gql`
    mutation CreateMenuChildNode($nodeId: ID!, $target: String!, $targetId: String!, $title: String!) {
  CreateMenuChildNode(nodeId: $nodeId, target: $target, title: $title, targetId: $targetId) {
    id
  }
}
    `;
export const CreateHomeDocument = gql`
    mutation CreateHome($title: String, $targetId: String, $single: JSON, $pageType: PageType) {
  createOnePage(input: {page: {title: $title, targetId: $targetId, single: $single, pageType: $pageType, pageCategory: HOME}}) {
    id
  }
}
    `;
export const UpdateHomeDocument = gql`
    mutation UpdateHome($id: ID!, $single: JSON) {
  updateOnePage(input: {id: $id, update: {single: $single}}) {
    id
  }
}
    `;
export const AddZipsToVendorDocument = gql`
    mutation addZipsToVendor($id: ID!, $zips: [ID!]!) {
  addZipsToVendor(input: {id: $id, relationIds: $zips}) {
    id
  }
}
    `;
export const CreateZipToVendorDocument = gql`
    mutation CreateZipToVendor($zips: [ID!]!, $vendorId: ID!) {
  CreateZipToVendor(zips: $zips, vendorId: $vendorId) {
    id
  }
}
    `;
export const CreateOrderAdminDocument = gql`
    mutation createOrderAdmin($orderLineDto: [OrderLineDto!]!, $address: String!, $userId: ID!) {
  createOrderAdmin(orderLineDto: $orderLineDto, address: $address, userId: $userId) {
    id
  }
}
    `;
export const UpdateOrderLineDocument = gql`
    mutation updateOrderLine($id: ID!, $stage: String) {
  updateOneOrderLine(input: {id: $id, update: {stage: $stage}}) {
    id
  }
}
    `;
export const CreateOnePromotionVariantPriceDocument = gql`
    mutation createOnePromotionVariantPrice($priceType: String, $value: Float, $startsAt: DateTime) {
  createOnePromotionVariantPrice(input: {promotionVariantPrice: {priceType: $priceType, value: $value, forever: true, startsAt: $startsAt, enabled: true}}) {
    id
  }
}
    `;
export const SetPriceOnPromotionVariantPriceDocument = gql`
    mutation setPriceOnPromotionVariantPrice($promo: ID!, $relan: ID!) {
  setPriceOnPromotionVariantPrice(input: {id: $promo, relationId: $relan}) {
    id
  }
}
    `;
export const GetAdministratorDataDocument = gql`
    query GetAdministratorData {
  GetAdministratorData {
    id
    firstName
    lastName
    emailAddress
    type
  }
}
    `;
export const GetVendorInfoDocument = gql`
    query GetVendorInfo {
  GetVendorInfo {
    id
    vendorName
    phoneNumber
    email
    store {
      id
      storeName
      phoneNumber
      officialemail
      zipcode
      streetAddress1
      streetAddress2
      GSTIN
      singleStore
      rentalStore
      channelMarkets
      balance {
        id
        balance
        updatedAt
      }
    }
  }
}
    `;
export const GetDefaultStoreDocument = gql`
    query GetDefaultStore {
  GetDefaultStore {
    id
    storeName
    phoneNumber
    officialemail
    zipcode
    streetAddress1
    streetAddress2
    GSTIN
    singleStore
    rentalStore
    channelMarkets
    balance {
      id
      balance
      updatedAt
    }
  }
}
    `;
export const GetAllCountriesDocument = gql`
    query GetAllCountries {
  GetAllCountries {
    id
    code
    name
    enabled
  }
}
    `;
export const GetAllZonesDocument = gql`
    query GetAllZones {
  zones {
    id
    name
  }
}
    `;
export const GetZoneAgreegateDocument = gql`
    query GetZoneAgreegate {
  zoneAggregate {
    count {
      id
    }
  }
}
    `;
export const GetTaxRulesDocument = gql`
    query GetTaxRules($limit: Int, $iLike: String, $offset: Int) {
  taxCategories(paging: {limit: $limit, offset: $offset}, filter: {name: {like: $iLike}}) {
    id
    name
  }
}
    `;
export const GetTaxCategoryAgreegateDocument = gql`
    query GetTaxCategoryAgreegate {
  taxCategoryAggregate {
    count {
      id
    }
  }
}
    `;
export const GetTaxRatesDocument = gql`
    query GetTaxRates($limit: Int, $iLike: String, $offset: Int) {
  taxRates(paging: {limit: $limit, offset: $offset}, filter: {name: {like: $iLike}}) {
    id
    name
    value
    enabled
    zone {
      id
      name
    }
    category {
      id
      name
    }
  }
}
    `;
export const GetTaxRateAgreegateDocument = gql`
    query GetTaxRateAgreegate {
  taxRateAggregate {
    count {
      id
    }
  }
}
    `;
export const GetAllChannelsDocument = gql`
    query GetAllChannels($limit: Int, $iLike: String, $offset: Int) {
  channels(paging: {limit: $limit, offset: $offset}, filter: {code: {like: $iLike}}, sorting: {field: createdAt, direction: DESC}) {
    id
    code
    defaultLanguageCode
    currencyCode
    pricesIncludeTax
  }
}
    `;
export const GetallcollectionDocument = gql`
    query getallcollection {
  GetCollectionTree {
    id
    isRoot
    inMenu
    name
    description
    children {
      id
      isRoot
      inMenu
      name
      description
      children {
        id
        isRoot
        inMenu
        name
        description
      }
    }
  }
}
    `;
export const GetOneCollectionDocument = gql`
    query GetOneCollection($id: ID!) {
  collection(id: $id) {
    id
    name
    isRoot
    inMenu
    description
    seo {
      id
      urlKey
      metadesc
      metatitle
      metakeywords
    }
  }
}
    `;
export const GetAllAssetsDocument = gql`
    query GetAllAssets($limit: Int, $iLike: String, $offset: Int) {
  assets(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {name: {like: $iLike}}) {
    id
    createdAt
    name
    type
    mimeType
    source
    preview
    fileSize
    width
    height
  }
}
    `;
export const GetAssetsAggregateDocument = gql`
    query GetAssetsAggregate($iLike: String) {
  assetAggregate(filter: {name: {like: $iLike}}) {
    count {
      id
    }
  }
}
    `;
export const GetAllFacetsDocument = gql`
    query GetAllFacets($limit: Int, $iLike: String, $offset: Int) {
  facets(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {name: {like: $iLike}}) {
    id
    createdAt
    name
    isPrivate
    code
  }
}
    `;
export const GetFacetAggregateDocument = gql`
    query GetFacetAggregate {
  facetAggregate {
    count {
      id
    }
  }
}
    `;
export const GetFacetValuesDocument = gql`
    query GetFacetValues($limit: Int, $iLike: String, $offset: Int) {
  facetValues(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {code: {like: $iLike}}) {
    id
    code
    facet {
      id
      code
      name
    }
  }
}
    `;
export const GetFacetValueAggregateDocument = gql`
    query GetFacetValueAggregate {
  facetValueAggregate {
    count {
      id
    }
  }
}
    `;
export const GetAllProductsDocument = gql`
    query GetAllProducts($limit: Int, $iLike: String, $offset: Int) {
  products(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {productName: {like: $iLike}}) {
    id
    slug
    productName
    description
    featuredAsset {
      id
      preview
      source
    }
    facets {
      id
      code
      facet {
        id
        name
        code
      }
    }
    assets {
      id
      asset {
        id
        name
        type
        mimeType
        preview
        source
      }
    }
  }
}
    `;
export const GetProductAggregateDocument = gql`
    query GetProductAggregate {
  productAggregate {
    count {
      id
    }
  }
}
    `;
export const GetFacetDocument = gql`
    query GetFacet($id: ID!) {
  facet(id: $id) {
    id
    isPrivate
    name
    code
    values {
      id
      code
    }
  }
}
    `;
export const GetOneProductDocument = gql`
    query GetOneProduct($id: ID!) {
  product(id: $id) {
    id
    productName
    slug
    description
    collection {
      id
      name
      description
    }
    featuredAsset {
      id
      preview
      source
    }
    facets {
      id
      code
      facet {
        id
        name
        code
      }
    }
    assets {
      id
      asset {
        id
        source
        preview
      }
    }
  }
}
    `;
export const GetAllVendurePlansDocument = gql`
    query GetAllVendurePlans($limit: Int, $iLike: String, $offset: Int) {
  vendorPlans(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {name: {like: $iLike}}) {
    id
    isActive
    name
    planValue
    priceStrategy
    tenureStrategy
  }
}
    `;
export const GetProductVariantDocument = gql`
    query GetProductVariant($id: ID!) {
  product(id: $id) {
    id
    variants {
      id
      name
      enabled
      sku
      trackInventory
      dum_price
      seo {
        id
        urlKey
        metatitle
        metakeywords
        metadesc
      }
      specs {
        id
        specs
      }
      asset {
        id
        asset {
          id
          preview
        }
      }
    }
    options {
      id
      name
      code
      options {
        id
        name
        code
      }
    }
  }
}
    `;
export const GetAllTaxRatesDocument = gql`
    query GetAllTaxRates {
  GetAllTaxRates {
    id
    name
    value
    enabled
    category {
      id
      name
    }
    zone {
      id
      name
    }
  }
}
    `;
export const ZoneFindManyDocument = gql`
    query ZoneFindMany {
  ZoneFindMany {
    id
    name
  }
}
    `;
export const FindAllVendorPlansDocument = gql`
    query FindAllVendorPlans {
  FindAllVendorPlans {
    id
    isActive
    name
    planValue
    priceStrategy
    priceStrategy
  }
}
    `;
export const GetAllRolesDocument = gql`
    query GetAllRoles($limit: Int, $iLike: String, $offset: Int) {
  roles(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {code: {like: $iLike}}) {
    id
    code
    description
    type
  }
}
    `;
export const GetRoleDocument = gql`
    query GetRole($id: ID!) {
  role(id: $id) {
    id
    code
    description
    permissions
    type
  }
}
    `;
export const GetAllAdministratorDocument = gql`
    query GetAllAdministrator($search: String) {
  GetAllAdministrator(search: $search) {
    id
    firstName
    lastName
    emailAddress
    type
  }
}
    `;
export const GetSingleProductVariantDocument = gql`
    query GetSingleProductVariant($id: ID!) {
  productVariant(id: $id) {
    id
    name
    dum_price
    enabled
    sku
    name
    trackInventory
    specs {
      id
      specs
    }
  }
}
    `;
export const GetBillingAgreementByVendorDocument = gql`
    query GetBillingAgreementByVendor {
  GetBillingAgreementByVendor {
    id
    value
    type
    state
    request {
      id
      value
      state
    }
    collection {
      id
      name
      description
      isPrivate
      parent {
        id
        name
      }
    }
  }
}
    `;
export const GetAllSeoDocument = gql`
    query GetAllSeo($limit: Int, $iLike: String, $offset: Int) {
  seos(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {metatitle: {like: $iLike}}) {
    id
    urlKey
    metadesc
    metatitle
    metakeywords
    collection {
      id
      name
    }
    variant {
      id
      name
    }
  }
}
    `;
export const GetOneSeoDocument = gql`
    query GetOneSeo($id: ID!) {
  seo(id: $id) {
    urlKey
    metadesc
    metatitle
    metakeywords
    collection {
      id
      name
    }
    variant {
      id
      name
    }
  }
}
    `;
export const GetSeoAggregateDocument = gql`
    query GetSeoAggregate {
  seoAggregate {
    count {
      id
    }
  }
}
    `;
export const GetBillingAgreementDocument = gql`
    query GetBillingAgreement($id: ID!) {
  GetBillingAgreement(id: $id) {
    id
    value
    type
    state
    createdAt
    updatedAt
    collection {
      id
      name
      description
      isPrivate
      parent {
        id
        name
      }
    }
  }
}
    `;
export const GetBillingRequestForAgreementDocument = gql`
    query GetBillingRequestForAgreement($id: String!) {
  GetBillingRequestForAgreement(id: $id) {
    id
    createdAt
    updatedAt
    value
    state
  }
}
    `;
export const ZoneFindOneDocument = gql`
    query ZoneFindOne($id: ID!) {
  ZoneFindOne(id: $id) {
    id
    name
    members {
      id
      code
      name
      enabled
    }
  }
}
    `;
export const GetAllTaxCategoryDocument = gql`
    query GetAllTaxCategory {
  GetAllTaxCategory {
    id
    name
  }
}
    `;
export const GetStockKeepingVendorDocument = gql`
    query GetStockKeepingVendor($variantId: ID!, $vendorId: ID) {
  getStockKeepingVendor(variantId: $variantId, vendorId: $vendorId) {
    id
    quantity
    threshold
    multiple
    backorder
    stockstatus
    sku
  }
}
    `;
export const FindAllZipDocument = gql`
    query FindAllZip {
  findAllZip {
    id
    name
    slug
    code
  }
}
    `;
export const GetStockKeepingByStoreDocument = gql`
    query GetStockKeepingByStore {
  getStockKeepingByStore {
    id
    sku
    variant {
      id
      name
    }
    quantity
    threshold
    multiple
    backorder
    stockstatus
  }
}
    `;
export const GetMenuTreeDocument = gql`
    query GetMenuTree {
  GetMenuTree {
    menu
  }
}
    `;
export const SearchProductVariantsDocument = gql`
    query SearchProductVariants($search: String) {
  productVariants(filter: {name: {like: $search}}) {
    id
    name
    enabled
    prices {
      id
      price
      store {
        id
        storeName
      }
      tax {
        id
        value
        name
      }
      taxIncluded
    }
    asset {
      id
      asset {
        id
        preview
      }
    }
  }
}
    `;
export const SearchCollectionDocument = gql`
    query SearchCollection($search: String) {
  collections(filter: {name: {like: $search}}) {
    id
    name
  }
}
    `;
export const SearchFacetValueDocument = gql`
    query SearchFacetValue($search: String) {
  facetValues(filter: {code: {like: $search}}) {
    id
    facet {
      id
      name
    }
    code
  }
}
    `;
export const GetAllUsersDocument = gql`
    query GetAllUsers($limit: Int, $iLike: String, $offset: Int) {
  users(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {or: [{email: {like: $iLike}}, {firstName: {like: $iLike}}, {lastName: {like: $iLike}}]}) {
    id
    email
    firstName
    lastName
    administrator {
      id
    }
    vendor {
      id
    }
  }
}
    `;
export const GetUsersAggregateDocument = gql`
    query GetUsersAggregate($iLike: String) {
  userAggregate(filter: {or: [{email: {like: $iLike}}, {firstName: {like: $iLike}}, {lastName: {like: $iLike}}]}) {
    count {
      id
    }
  }
}
    `;
export const GetUserInfoDocument = gql`
    query GetUserInfo($id: ID!) {
  user(id: $id) {
    createdAt
    updatedAt
    email
    verified
    verificationToken
    pendingIdentifier
    firstName
    lastName
    phoneNumber
    address {
      id
      createdAt
      updatedAt
      fullName
      addressLine
      city
      state
      landmark
      postalCode
      phoneNumber
      alternatePhoneNumber
      defaultBillingAddress
      defaultShippingAddress
      addressType
    }
    administrator {
      id
      firstName
      lastName
    }
    vendor {
      id
      email
    }
  }
}
    `;
export const GetPriceForVariantDocument = gql`
    query GetPriceForVariant($prodId: ID, $storeId: ID) {
  GetPriceForVariant(prodId: $prodId, storeId: $storeId) {
    id
    price
    taxIncluded
    tax {
      id
      name
    }
    promoprice {
      id
      priceType
      value
      forever
    }
  }
}
    `;
export const GetAllVebdorsDocument = gql`
    query GetAllVebdors($limit: Int, $iLike: String, $offset: Int) {
  vendors(paging: {limit: $limit, offset: $offset}, filter: {vendorName: {like: $iLike}}, sorting: {field: createdAt, direction: DESC}) {
    id
    vendorName
    email
    store {
      id
      storeName
    }
    phoneNumber
  }
}
    `;
export const GetVendorAggregateDocument = gql`
    query GetVendorAggregate {
  vendorAggregate {
    count {
      id
    }
  }
}
    `;
export const GetQueryProductVariantDocument = gql`
    query GetQueryProductVariant($iLike: String) {
  productVariants(filter: {name: {like: $iLike}}) {
    id
    name
    seo {
      id
      urlKey
    }
  }
}
    `;
export const GetCollectionForSearchDocument = gql`
    query GetCollectionForSearch($iLike: String) {
  collections(filter: {name: {like: $iLike}}) {
    id
    name
  }
}
    `;
export const GetHomePageDocument = gql`
    query getHomePage {
  getHomePage {
    id
    title
    targetId
    single
    list
    pageCategory
  }
}
    `;
export const GetSearchProdDocument = gql`
    query GetSearchProd($limit: Int, $iLike: String, $offset: Int) {
  products(paging: {limit: $limit, offset: $offset}, sorting: {field: createdAt, direction: DESC}, filter: {productName: {like: $iLike}}) {
    id
    productName
  }
}
    `;
export const GetSearchProductVariantDocument = gql`
    query GetSearchProductVariant($iLike: String) {
  productVariants(filter: {name: {like: $iLike}}) {
    id
    name
  }
}
    `;
export const GetAllPagesDocument = gql`
    query GetAllPages($limit: Int, $iLike: String, $offset: Int) {
  pages(paging: {limit: $limit, offset: $offset}, filter: {title: {like: $iLike}}, sorting: {field: createdAt, direction: DESC}) {
    title
    targetId
    pageType
    pageCategory
  }
}
    `;
export const AllZipsDocument = gql`
    query AllZips($limit: Int, $vendor: ID, $offset: Int) {
  zips(paging: {limit: $limit, offset: $offset}, filter: {vendors: {id: {eq: $vendor}}}, sorting: {field: createdAt, direction: DESC}) {
    id
    name
    code
    slug
  }
}
    `;
export const SearchAllZipDocument = gql`
    query SearchAllZip($limit: Int, $offset: Int, $code: Float) {
  zips(paging: {limit: $limit, offset: $offset}, filter: {code: {eq: $code}}, sorting: {field: createdAt, direction: DESC}) {
    id
    name
    code
    slug
  }
}
    `;
export const QueryUSerByEmailOrPhoneDocument = gql`
    query QueryUSerByEmailOrPhone($type: String) {
  users(filter: {or: [{email: {like: $type}}, {phoneNumber: {like: $type}}]}) {
    id
    email
    firstName
    lastName
    phoneNumber
    address {
      id
      fullName
      addressLine
      landmark
      city
      state
      postalCode
    }
  }
}
    `;
export const SearchAllOrdersDocument = gql`
    query SearchAllOrders($limit: Int, $offset: Int) {
  orders(paging: {limit: $limit, offset: $offset}) {
    id
    totalPrice
    address
    createdAt
    user {
      id
      firstName
      lastName
    }
    lines {
      id
      priceField
      stage
      item {
        id
        quantity
      }
    }
  }
}
    `;
export const GetOrderByIdDocument = gql`
    query GetOrderById($id: ID!) {
  order(id: $id) {
    id
    totalPrice
    address
    createdAt
    user {
      id
      firstName
      lastName
    }
    lines {
      id
      stage
      priceField
      item {
        id
        quantity
        productVariant {
          id
          name
        }
      }
    }
  }
}
    `;
export const GetOrderLinesDocument = gql`
    query GetOrderLines($id: ID, $limit: Int, $offset: Int) {
  orderLines(filter: {store: {id: {eq: $id}}}, paging: {limit: $limit, offset: $offset}) {
    id
    priceField
    stage
    store {
      id
      storeName
      phoneNumber
    }
    item {
      id
      quantity
      productVariant {
        id
        name
      }
    }
    order {
      id
      totalPrice
      address
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;
export const GetSingleOrderLineDocument = gql`
    query GetSingleOrderLine($id: ID!) {
  orderLine(id: $id) {
    id
    priceField
    stage
    store {
      id
      storeName
    }
    item {
      id
      quantity
      productVariant {
        id
        name
      }
    }
    order {
      id
      address
      createdAt
      user {
        id
        firstName
        lastName
        phoneNumber
      }
    }
  }
}
    `;