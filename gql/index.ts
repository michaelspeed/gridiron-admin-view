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
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
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
  featureds: ProductConnection;
  productAssets: ProductAssetConnection;
};


export type AssetFeaturedsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type AssetProductAssetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductAssetFilter>;
  sorting?: Maybe<Array<ProductAssetSort>>;
};


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
  children: CollectionConnection;
  products: ProductConnection;
  agreements: BillingAgreementConnection;
  parent?: Maybe<Collection>;
  seo: Seo;
};


export type CollectionChildrenArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CollectionFilter>;
  sorting?: Maybe<Array<CollectionSort>>;
};


export type CollectionProductsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type CollectionAgreementsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<BillingAgreementFilter>;
  sorting?: Maybe<Array<BillingAgreementSort>>;
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

export type Facet = {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  code: Scalars['String'];
  products: ProductConnection;
  values: FacetValueConnection;
};


export type FacetProductsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type FacetValuesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<FacetValueFilter>;
  sorting?: Maybe<Array<FacetValueSort>>;
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

export type FacetValue = {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  products: ProductConnection;
  facet: Facet;
};


export type FacetValueProductsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderPlacedAt: Scalars['DateTime'];
  totalPrice: Scalars['Float'];
  address: Scalars['String'];
  item: OrderLine;
};

export type OrderLine = {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productName: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  options: ProductOptionGroupConnection;
  facets: FacetValueConnection;
  variants: ProductVariantConnection;
  assets: ProductAssetConnection;
  collection?: Maybe<Collection>;
  featuredAsset: Asset;
};


export type ProductOptionsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductOptionGroupFilter>;
  sorting?: Maybe<Array<ProductOptionGroupSort>>;
};


export type ProductFacetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<FacetValueFilter>;
  sorting?: Maybe<Array<FacetValueSort>>;
};


export type ProductVariantsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductVariantFilter>;
  sorting?: Maybe<Array<ProductVariantSort>>;
};


export type ProductAssetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductAssetFilter>;
  sorting?: Maybe<Array<ProductAssetSort>>;
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

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  password: Scalars['String'];
  verified: Scalars['Boolean'];
  verificationToken: Scalars['String'];
  passwordResetToken: Scalars['String'];
  identifierChangeToken: Scalars['String'];
  pendingIdentifier?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  administrator: Administrator;
  vendor: Vendor;
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  vendorName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  store: Store;
  license: VendorLicense;
  user: User;
};

export type TaxCategory = {
  __typename?: 'TaxCategory';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  rates: TaxRateConnection;
};


export type TaxCategoryRatesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<TaxRateFilter>;
  sorting?: Maybe<Array<TaxRateSort>>;
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

export type TaxRate = {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  value: Scalars['Float'];
  enabled: Scalars['Boolean'];
  variants: ProductVariantPriceConnection;
  zone: Zone;
  category: TaxCategory;
};


export type TaxRateVariantsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductVariantPriceFilter>;
  sorting?: Maybe<Array<ProductVariantPriceSort>>;
};

export type ProductVariantPriceFilter = {
  and?: Maybe<Array<ProductVariantPriceFilter>>;
  or?: Maybe<Array<ProductVariantPriceFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  price?: Maybe<NumberFieldComparison>;
  taxIncluded?: Maybe<BooleanFieldComparison>;
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

export type Zone = {
  __typename?: 'Zone';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  members: CountryConnection;
  stores: StoreConnection;
  taxrates: TaxRateConnection;
};


export type ZoneMembersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CountryFilter>;
  sorting?: Maybe<Array<CountrySort>>;
};


export type ZoneStoresArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StoreFilter>;
  sorting?: Maybe<Array<StoreSort>>;
};


export type ZoneTaxratesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<TaxRateFilter>;
  sorting?: Maybe<Array<TaxRateSort>>;
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
  skus: StockKeepingConnection;
  country: Country;
  region: Zone;
};


export type StoreSkusArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StockKeepingFilter>;
  sorting?: Maybe<Array<StockKeepingSort>>;
};

export enum StoreTypeEnum {
  Default = 'DEFAULT',
  Vendor = 'VENDOR'
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
  collection?: Maybe<Collection>;
  variant?: Maybe<ProductVariant>;
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
  sales: SaleConnection;
  cancels: CancellationConnection;
  movements: StockMovementConnection;
  store: Store;
  variant: ProductVariant;
};


export type StockKeepingSalesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<SaleFilter>;
  sorting?: Maybe<Array<SaleSort>>;
};


export type StockKeepingCancelsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CancellationFilter>;
  sorting?: Maybe<Array<CancellationSort>>;
};


export type StockKeepingMovementsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StockMovementFilter>;
  sorting?: Maybe<Array<StockMovementSort>>;
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
  stocks: StockKeepingConnection;
  seo?: Maybe<Seo>;
  specs?: Maybe<ProductVariantSpecs>;
  price?: Maybe<ProductVariantPrice>;
  asset?: Maybe<ProductVariantAsset>;
  product: Product;
};


export type ProductVariantStocksArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StockKeepingFilter>;
  sorting?: Maybe<Array<StockKeepingSort>>;
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
  tax: TaxRate;
  variant: ProductVariant;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  variants: ProductVariantConnection;
  group: ProductOptionGroup;
};


export type ProductOptionVariantsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductVariantFilter>;
  sorting?: Maybe<Array<ProductVariantSort>>;
};

export type ProductOptionGroup = {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  options: ProductOptionConnection;
  product: Product;
};


export type ProductOptionGroupOptionsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductOptionFilter>;
  sorting?: Maybe<Array<ProductOptionSort>>;
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
  licences: VendorLicenseConnection;
};


export type VendorPlansLicencesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<VendorLicenseFilter>;
  sorting?: Maybe<Array<VendorLicenseSort>>;
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

export type VendorLicense = {
  __typename?: 'VendorLicense';
  id: Scalars['ID'];
  tenureStart: Scalars['DateTime'];
  tenureEnd: Scalars['DateTime'];
  vendor: Vendor;
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
};

export type Menu = {
  __typename?: 'Menu';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  targetId: Scalars['String'];
  target: Scalars['String'];
  children: MenuConnection;
  parent?: Maybe<Menu>;
};


export type MenuChildrenArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<MenuFilter>;
  sorting?: Maybe<Array<MenuSort>>;
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

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  zones: ZoneConnection;
};


export type CountryZonesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ZoneFilter>;
  sorting?: Maybe<Array<ZoneSort>>;
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

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The node containing the Asset */
  node: Asset;
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

export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<AssetEdge>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** The node containing the Product */
  node: Product;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductEdge>;
};

export type ProductAssetEdge = {
  __typename?: 'ProductAssetEdge';
  /** The node containing the ProductAsset */
  node: ProductAsset;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductAssetConnection = {
  __typename?: 'ProductAssetConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductAssetEdge>;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** The node containing the Role */
  node: Role;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<RoleEdge>;
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

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** The node containing the Collection */
  node: Collection;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<CollectionEdge>;
};

export type BillingAgreementEdge = {
  __typename?: 'BillingAgreementEdge';
  /** The node containing the BillingAgreement */
  node: BillingAgreement;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type BillingAgreementConnection = {
  __typename?: 'BillingAgreementConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<BillingAgreementEdge>;
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

export type ChannelEdge = {
  __typename?: 'ChannelEdge';
  /** The node containing the Channel */
  node: Channel;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ChannelConnection = {
  __typename?: 'ChannelConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ChannelEdge>;
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

export type StoreEdge = {
  __typename?: 'StoreEdge';
  /** The node containing the Store */
  node: Store;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type StoreConnection = {
  __typename?: 'StoreConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<StoreEdge>;
};

export type StockKeepingEdge = {
  __typename?: 'StockKeepingEdge';
  /** The node containing the StockKeeping */
  node: StockKeeping;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type StockKeepingConnection = {
  __typename?: 'StockKeepingConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<StockKeepingEdge>;
};

export type TaxCategoryDeleteResponse = {
  __typename?: 'TaxCategoryDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxCategoryEdge = {
  __typename?: 'TaxCategoryEdge';
  /** The node containing the TaxCategory */
  node: TaxCategory;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type TaxCategoryConnection = {
  __typename?: 'TaxCategoryConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<TaxCategoryEdge>;
};

export type TaxRateEdge = {
  __typename?: 'TaxRateEdge';
  /** The node containing the TaxRate */
  node: TaxRate;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type TaxRateConnection = {
  __typename?: 'TaxRateConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<TaxRateEdge>;
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

export type ProductVariantPriceEdge = {
  __typename?: 'ProductVariantPriceEdge';
  /** The node containing the ProductVariantPrice */
  node: ProductVariantPrice;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductVariantPriceConnection = {
  __typename?: 'ProductVariantPriceConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductVariantPriceEdge>;
};

export type VendorDto = {
  __typename?: 'VendorDto';
  user: User;
  token: Scalars['String'];
  vendor: Vendor;
};

export type VendorEdge = {
  __typename?: 'VendorEdge';
  /** The node containing the Vendor */
  node: Vendor;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type VendorConnection = {
  __typename?: 'VendorConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<VendorEdge>;
};

export type ZoneDeleteResponse = {
  __typename?: 'ZoneDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ZoneEdge = {
  __typename?: 'ZoneEdge';
  /** The node containing the Zone */
  node: Zone;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ZoneConnection = {
  __typename?: 'ZoneConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ZoneEdge>;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  /** The node containing the Country */
  node: Country;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<CountryEdge>;
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

export type SeoEdge = {
  __typename?: 'SeoEdge';
  /** The node containing the Seo */
  node: Seo;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type SeoConnection = {
  __typename?: 'SeoConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<SeoEdge>;
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

export type FacetEdge = {
  __typename?: 'FacetEdge';
  /** The node containing the Facet */
  node: Facet;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type FacetConnection = {
  __typename?: 'FacetConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<FacetEdge>;
};

export type FacetValueEdge = {
  __typename?: 'FacetValueEdge';
  /** The node containing the FacetValue */
  node: FacetValue;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type FacetValueConnection = {
  __typename?: 'FacetValueConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<FacetValueEdge>;
};

export type FacetValueDeleteResponse = {
  __typename?: 'FacetValueDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
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

export type ProductOptionGroupEdge = {
  __typename?: 'ProductOptionGroupEdge';
  /** The node containing the ProductOptionGroup */
  node: ProductOptionGroup;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductOptionGroupConnection = {
  __typename?: 'ProductOptionGroupConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductOptionGroupEdge>;
};

export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** The node containing the ProductVariant */
  node: ProductVariant;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductVariantEdge>;
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

export type ProductOptionDeleteResponse = {
  __typename?: 'ProductOptionDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductOptionEdge = {
  __typename?: 'ProductOptionEdge';
  /** The node containing the ProductOption */
  node: ProductOption;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductOptionConnection = {
  __typename?: 'ProductOptionConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductOptionEdge>;
};

export type ProductOptionGroupDeleteResponse = {
  __typename?: 'ProductOptionGroupDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type ProductVariantPriceDeleteResponse = {
  __typename?: 'ProductVariantPriceDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Float']>;
  taxIncluded?: Maybe<Scalars['Boolean']>;
};

export type ProductVariantAssetEdge = {
  __typename?: 'ProductVariantAssetEdge';
  /** The node containing the ProductVariantAsset */
  node: ProductVariantAsset;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ProductVariantAssetConnection = {
  __typename?: 'ProductVariantAssetConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ProductVariantAssetEdge>;
};

export type ProductAssetDeleteResponse = {
  __typename?: 'ProductAssetDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VendorPlansEdge = {
  __typename?: 'VendorPlansEdge';
  /** The node containing the VendorPlans */
  node: VendorPlans;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type VendorPlansConnection = {
  __typename?: 'VendorPlansConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<VendorPlansEdge>;
};

export type VendorLicenseEdge = {
  __typename?: 'VendorLicenseEdge';
  /** The node containing the VendorLicense */
  node: VendorLicense;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type VendorLicenseConnection = {
  __typename?: 'VendorLicenseConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<VendorLicenseEdge>;
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

export type SaleEdge = {
  __typename?: 'SaleEdge';
  /** The node containing the Sale */
  node: Sale;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type SaleConnection = {
  __typename?: 'SaleConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<SaleEdge>;
};

export type CancellationEdge = {
  __typename?: 'CancellationEdge';
  /** The node containing the Cancellation */
  node: Cancellation;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type CancellationConnection = {
  __typename?: 'CancellationConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<CancellationEdge>;
};

export type StockMovementEdge = {
  __typename?: 'StockMovementEdge';
  /** The node containing the StockMovement */
  node: StockMovement;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type StockMovementConnection = {
  __typename?: 'StockMovementConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<StockMovementEdge>;
};

export type SaleDeleteResponse = {
  __typename?: 'SaleDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type StockMovementDeleteResponse = {
  __typename?: 'StockMovementDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CancellationDeleteResponse = {
  __typename?: 'CancellationDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** The node containing the Order */
  node: Order;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<OrderEdge>;
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

export type ZipEdge = {
  __typename?: 'ZipEdge';
  /** The node containing the Zip */
  node: Zip;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type ZipConnection = {
  __typename?: 'ZipConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<ZipEdge>;
};

export type MenuResponseTypes = {
  __typename?: 'MenuResponseTypes';
  menu: Scalars['String'];
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

export type MenuEdge = {
  __typename?: 'MenuEdge';
  /** The node containing the Menu */
  node: Menu;
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
};

export type MenuConnection = {
  __typename?: 'MenuConnection';
  /** Paging information */
  pageInfo: PageInfo;
  /** Array of edges. */
  edges: Array<MenuEdge>;
};

export type Query = {
  __typename?: 'Query';
  GetAdministratorData: Administrator;
  GetAllAdministrator: Array<Administrator>;
  asset?: Maybe<Asset>;
  assets: AssetConnection;
  role?: Maybe<Role>;
  roles: RoleConnection;
  collection?: Maybe<Collection>;
  collections: CollectionConnection;
  GetCollectionTree: Array<Collection>;
  channel?: Maybe<Channel>;
  channels: ChannelConnection;
  store?: Maybe<Store>;
  stores: StoreConnection;
  GetDefaultStore: Store;
  taxCategory?: Maybe<TaxCategory>;
  taxCategories: TaxCategoryConnection;
  taxRate?: Maybe<TaxRate>;
  taxRates: TaxRateConnection;
  GetAllTaxRates: Array<TaxRate>;
  GetAllTaxCategory: Array<TaxCategory>;
  GetCurrentUser: User;
  vendor?: Maybe<Vendor>;
  vendors: VendorConnection;
  GetVendorInfo?: Maybe<Vendor>;
  zone?: Maybe<Zone>;
  zones: ZoneConnection;
  ZoneFindMany: Array<Zone>;
  ZoneFindOne: Zone;
  country?: Maybe<Country>;
  countries: CountryConnection;
  GetAllCountries: Array<Country>;
  seo?: Maybe<Seo>;
  seos: SeoConnection;
  facet?: Maybe<Facet>;
  facets: FacetConnection;
  facetValue?: Maybe<FacetValue>;
  facetValues: FacetValueConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
  productVariant?: Maybe<ProductVariant>;
  productVariants: ProductVariantConnection;
  productOption?: Maybe<ProductOption>;
  productOptions: ProductOptionConnection;
  productOptionGroup?: Maybe<ProductOptionGroup>;
  productOptionGroups: ProductOptionGroupConnection;
  productVariantPrice?: Maybe<ProductVariantPrice>;
  productVariantPrices: ProductVariantPriceConnection;
  productVariantAsset?: Maybe<ProductVariantAsset>;
  productVariantAssets: ProductVariantAssetConnection;
  productAsset?: Maybe<ProductAsset>;
  productAssets: ProductAssetConnection;
  vendorPlans: VendorPlansConnection;
  FindAllVendorPlans: Array<VendorPlans>;
  GetVendorPlansForRegistration: Array<VendorPlans>;
  vendorLicense?: Maybe<VendorLicense>;
  vendorLicenses: VendorLicenseConnection;
  GetBillingAgreementByVendor: Array<BillingAgreement>;
  GetBillingAgreement: BillingAgreement;
  GetBillingRequestForAgreement: Array<BillingAgreementRequest>;
  stockKeeping?: Maybe<StockKeeping>;
  stockKeepings: StockKeepingConnection;
  getStockKeepingVendor?: Maybe<StockKeeping>;
  getStockKeepingByStore: Array<StockKeeping>;
  sale?: Maybe<Sale>;
  sales: SaleConnection;
  stockMovement?: Maybe<StockMovement>;
  stockMovements: StockMovementConnection;
  cancellation?: Maybe<Cancellation>;
  cancellations: CancellationConnection;
  order?: Maybe<Order>;
  orders: OrderConnection;
  zip?: Maybe<Zip>;
  zips: ZipConnection;
  findAllZip: Array<Zip>;
  menu?: Maybe<Menu>;
  menus: MenuConnection;
  GetMenuTree: MenuResponseTypes;
};


export type QueryGetAllAdministratorArgs = {
  search?: Maybe<Scalars['String']>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<AssetFilter>;
  sorting?: Maybe<Array<AssetSort>>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<RoleFilter>;
  sorting?: Maybe<Array<RoleSort>>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CollectionFilter>;
  sorting?: Maybe<Array<CollectionSort>>;
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ChannelFilter>;
  sorting?: Maybe<Array<ChannelSort>>;
};


export type QueryStoreArgs = {
  id: Scalars['ID'];
};


export type QueryStoresArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StoreFilter>;
  sorting?: Maybe<Array<StoreSort>>;
};


export type QueryTaxCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryTaxCategoriesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<TaxCategoryFilter>;
  sorting?: Maybe<Array<TaxCategorySort>>;
};


export type QueryTaxRateArgs = {
  id: Scalars['ID'];
};


export type QueryTaxRatesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<TaxRateFilter>;
  sorting?: Maybe<Array<TaxRateSort>>;
};


export type QueryVendorArgs = {
  id: Scalars['ID'];
};


export type QueryVendorsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<VendorFilter>;
  sorting?: Maybe<Array<VendorSort>>;
};


export type QueryZoneArgs = {
  id: Scalars['ID'];
};


export type QueryZonesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ZoneFilter>;
  sorting?: Maybe<Array<ZoneSort>>;
};


export type QueryZoneFindOneArgs = {
  id: Scalars['ID'];
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryCountriesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CountryFilter>;
  sorting?: Maybe<Array<CountrySort>>;
};


export type QuerySeoArgs = {
  id: Scalars['ID'];
};


export type QuerySeosArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<SeoFilter>;
  sorting?: Maybe<Array<SeoSort>>;
};


export type QueryFacetArgs = {
  id: Scalars['ID'];
};


export type QueryFacetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<FacetFilter>;
  sorting?: Maybe<Array<FacetSort>>;
};


export type QueryFacetValueArgs = {
  id: Scalars['ID'];
};


export type QueryFacetValuesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<FacetValueFilter>;
  sorting?: Maybe<Array<FacetValueSort>>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductFilter>;
  sorting?: Maybe<Array<ProductSort>>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductVariantFilter>;
  sorting?: Maybe<Array<ProductVariantSort>>;
};


export type QueryProductOptionArgs = {
  id: Scalars['ID'];
};


export type QueryProductOptionsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductOptionFilter>;
  sorting?: Maybe<Array<ProductOptionSort>>;
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryProductOptionGroupsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductOptionGroupFilter>;
  sorting?: Maybe<Array<ProductOptionGroupSort>>;
};


export type QueryProductVariantPriceArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantPricesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductVariantPriceFilter>;
  sorting?: Maybe<Array<ProductVariantPriceSort>>;
};


export type QueryProductVariantAssetArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantAssetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductVariantAssetFilter>;
  sorting?: Maybe<Array<ProductVariantAssetSort>>;
};


export type QueryProductAssetArgs = {
  id: Scalars['ID'];
};


export type QueryProductAssetsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ProductAssetFilter>;
  sorting?: Maybe<Array<ProductAssetSort>>;
};


export type QueryVendorPlansArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<VendorPlansFilter>;
  sorting?: Maybe<Array<VendorPlansSort>>;
};


export type QueryVendorLicenseArgs = {
  id: Scalars['ID'];
};


export type QueryVendorLicensesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<VendorLicenseFilter>;
  sorting?: Maybe<Array<VendorLicenseSort>>;
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
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StockKeepingFilter>;
  sorting?: Maybe<Array<StockKeepingSort>>;
};


export type QueryGetStockKeepingVendorArgs = {
  vendorId?: Maybe<Scalars['ID']>;
  variantId: Scalars['ID'];
};


export type QuerySaleArgs = {
  id: Scalars['ID'];
};


export type QuerySalesArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<SaleFilter>;
  sorting?: Maybe<Array<SaleSort>>;
};


export type QueryStockMovementArgs = {
  id: Scalars['ID'];
};


export type QueryStockMovementsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<StockMovementFilter>;
  sorting?: Maybe<Array<StockMovementSort>>;
};


export type QueryCancellationArgs = {
  id: Scalars['ID'];
};


export type QueryCancellationsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<CancellationFilter>;
  sorting?: Maybe<Array<CancellationSort>>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<OrderFilter>;
  sorting?: Maybe<Array<OrderSort>>;
};


export type QueryZipArgs = {
  id: Scalars['ID'];
};


export type QueryZipsArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<ZipFilter>;
  sorting?: Maybe<Array<ZipSort>>;
};


export type QueryMenuArgs = {
  id: Scalars['ID'];
};


export type QueryMenusArgs = {
  paging?: Maybe<CursorPaging>;
  filter?: Maybe<MenuFilter>;
  sorting?: Maybe<Array<MenuSort>>;
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

export type OrderFilter = {
  and?: Maybe<Array<OrderFilter>>;
  or?: Maybe<Array<OrderFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  orderPlacedAt?: Maybe<DateFieldComparison>;
  totalPrice?: Maybe<NumberFieldComparison>;
  address?: Maybe<StringFieldComparison>;
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
  OrderPlacedAt = 'orderPlacedAt',
  TotalPrice = 'totalPrice',
  Address = 'address'
}

export type ZipFilter = {
  and?: Maybe<Array<ZipFilter>>;
  or?: Maybe<Array<ZipFilter>>;
  id?: Maybe<IdFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  slug?: Maybe<StringFieldComparison>;
  code?: Maybe<NumberFieldComparison>;
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
  removeParentFromCollection: Collection;
  removeSeoFromCollection: Collection;
  addChildrenToCollection: Collection;
  addProductsToCollection: Collection;
  addAgreementsToCollection: Collection;
  setParentOnCollection: Collection;
  setSeoOnCollection: Collection;
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
  removeSkusFromStore: Store;
  removeRegionFromStore: Store;
  addSkusToStore: Store;
  setCountryOnStore: Store;
  setRegionOnStore: Store;
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
  removeStoreFromVendor: Vendor;
  removeLicenseFromVendor: Vendor;
  removeUserFromVendor: Vendor;
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
  removeZonesFromCountry: Country;
  addZonesToCountry: Country;
  deleteOneSeo: SeoDeleteResponse;
  deleteManySeos: DeleteManyResponse;
  updateOneSeo: Seo;
  updateManySeos: UpdateManyResponse;
  createOneSeo: Seo;
  createManySeos: Array<Seo>;
  removeCollectionFromSeo: Seo;
  removeVariantFromSeo: Seo;
  setCollectionOnSeo: Seo;
  setVariantOnSeo: Seo;
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
  updateOneProductVariant: ProductVariant;
  updateManyProductVariants: UpdateManyResponse;
  createOneProductVariant: ProductVariant;
  createManyProductVariants: Array<ProductVariant>;
  removeStocksFromProductVariant: ProductVariant;
  removeSeoFromProductVariant: ProductVariant;
  removeSpecsFromProductVariant: ProductVariant;
  removePriceFromProductVariant: ProductVariant;
  removeAssetFromProductVariant: ProductVariant;
  removeProductFromProductVariant: ProductVariant;
  addStocksToProductVariant: ProductVariant;
  setSeoOnProductVariant: ProductVariant;
  setSpecsOnProductVariant: ProductVariant;
  setPriceOnProductVariant: ProductVariant;
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
  removeTaxFromProductVariantPrice: ProductVariantPrice;
  removeVariantFromProductVariantPrice: ProductVariantPrice;
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
  deleteOneOrder: OrderDeleteResponse;
  deleteManyOrders: DeleteManyResponse;
  updateOneOrder: Order;
  updateManyOrders: UpdateManyResponse;
  createOneOrder: Order;
  createManyOrders: Array<Order>;
  removeItemFromOrder: Order;
  setItemOnOrder: Order;
  deleteOneZip: ZipDeleteResponse;
  deleteManyZips: DeleteManyResponse;
  updateOneZip: Zip;
  updateManyZips: UpdateManyResponse;
  createOneZip: Zip;
  createManyZips: Array<Zip>;
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


export type MutationRemoveParentFromCollectionArgs = {
  input: RelationInput;
};


export type MutationRemoveSeoFromCollectionArgs = {
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


export type MutationSetParentOnCollectionArgs = {
  input: RelationInput;
};


export type MutationSetSeoOnCollectionArgs = {
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


export type MutationRemoveSkusFromStoreArgs = {
  input: RelationsInput;
};


export type MutationRemoveRegionFromStoreArgs = {
  input: RelationInput;
};


export type MutationAddSkusToStoreArgs = {
  input: RelationsInput;
};


export type MutationSetCountryOnStoreArgs = {
  input: RelationInput;
};


export type MutationSetRegionOnStoreArgs = {
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


export type MutationRemoveStoreFromVendorArgs = {
  input: RelationInput;
};


export type MutationRemoveLicenseFromVendorArgs = {
  input: RelationInput;
};


export type MutationRemoveUserFromVendorArgs = {
  input: RelationInput;
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


export type MutationRemoveZonesFromCountryArgs = {
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


export type MutationRemoveCollectionFromSeoArgs = {
  input: RelationInput;
};


export type MutationRemoveVariantFromSeoArgs = {
  input: RelationInput;
};


export type MutationSetCollectionOnSeoArgs = {
  input: RelationInput;
};


export type MutationSetVariantOnSeoArgs = {
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


export type MutationUpdateOneProductVariantArgs = {
  input: UpdateOneProductVariantInput;
};


export type MutationUpdateManyProductVariantsArgs = {
  input: UpdateManyProductVariantsInput;
};


export type MutationCreateOneProductVariantArgs = {
  input: CreateOneProductVariantInput;
};


export type MutationCreateManyProductVariantsArgs = {
  input: CreateManyProductVariantsInput;
};


export type MutationRemoveStocksFromProductVariantArgs = {
  input: RelationsInput;
};


export type MutationRemoveSeoFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemoveSpecsFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemovePriceFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemoveAssetFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationRemoveProductFromProductVariantArgs = {
  input: RelationInput;
};


export type MutationAddStocksToProductVariantArgs = {
  input: RelationsInput;
};


export type MutationSetSeoOnProductVariantArgs = {
  input: RelationInput;
};


export type MutationSetSpecsOnProductVariantArgs = {
  input: RelationInput;
};


export type MutationSetPriceOnProductVariantArgs = {
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


export type MutationRemoveTaxFromProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationRemoveVariantFromProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetTaxOnProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationSetVariantOnProductVariantPriceArgs = {
  input: RelationInput;
};


export type MutationCreateVariantPriceArgs = {
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


export type MutationDeleteOneOrderArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyOrdersArgs = {
  input: DeleteManyOrdersInput;
};


export type MutationUpdateOneOrderArgs = {
  input: UpdateOneOrderInput;
};


export type MutationUpdateManyOrdersArgs = {
  input: UpdateManyOrdersInput;
};


export type MutationCreateOneOrderArgs = {
  input: CreateOneOrderInput;
};


export type MutationCreateManyOrdersArgs = {
  input: CreateManyOrdersInput;
};


export type MutationRemoveItemFromOrderArgs = {
  input: RelationInput;
};


export type MutationSetItemOnOrderArgs = {
  input: RelationInput;
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
  filter: CollectionFilter;
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
  filter: CollectionFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCollection;
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
  filter: ChannelFilter;
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
  filter: ChannelFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateChannel;
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
  filter: StoreFilter;
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
  filter: StoreFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStore;
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
  filter: TaxCategoryFilter;
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
  filter: TaxCategoryFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaxCategory;
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
  filter: TaxRateFilter;
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
  filter: TaxRateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaxRate;
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

export type DeleteManyZonesInput = {
  /** Filter to find records to delete */
  filter: ZoneFilter;
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
  filter: ZoneFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateZone;
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
  filter: CountryFilter;
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
  filter: CountryFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCountry;
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
  filter: SeoFilter;
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
  filter: SeoFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSeo;
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
  filter: FacetFilter;
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
  filter: FacetFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFacet;
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
  filter: FacetValueFilter;
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
  filter: FacetValueFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFacetValue;
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
  filter: ProductFilter;
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
  filter: ProductFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProduct;
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
  filter: ProductVariantFilter;
};

export type UpdateOneProductVariantInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductVariant;
};

export type UpdateProductVariant = {
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

export type UpdateManyProductVariantsInput = {
  /** Filter used to find fields to update */
  filter: ProductVariantFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductVariant;
};

export type CreateOneProductVariantInput = {
  /** The record to create */
  productVariant: CreateProductVariant;
};

export type CreateProductVariant = {
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

export type CreateManyProductVariantsInput = {
  /** Array of records to create */
  productVariants: Array<CreateProductVariant>;
};

export type DeleteManyProductOptionsInput = {
  /** Filter to find records to delete */
  filter: ProductOptionFilter;
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
  filter: ProductOptionFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductOption;
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
  filter: ProductOptionGroupFilter;
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
  filter: ProductOptionGroupFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductOptionGroup;
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
  filter: ProductVariantPriceFilter;
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
  filter: ProductVariantPriceFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductVariantPrice;
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
  filter: ProductAssetFilter;
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
  filter: ProductAssetFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductAsset;
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
  filter: StockKeepingFilter;
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
  filter: StockKeepingFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStockKeeping;
};

export enum StockKeepingType {
  Global = 'GLOBAL',
  Vendor = 'VENDOR'
}

export type DeleteManySalesInput = {
  /** Filter to find records to delete */
  filter: SaleFilter;
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
  filter: SaleFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSale;
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
  filter: StockMovementFilter;
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
  filter: StockMovementFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStockMovement;
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
  filter: CancellationFilter;
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
  filter: CancellationFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCancellation;
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

export type DeleteManyOrdersInput = {
  /** Filter to find records to delete */
  filter: OrderFilter;
};

export type UpdateOneOrderInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOrder;
};

export type UpdateOrder = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type UpdateManyOrdersInput = {
  /** Filter used to find fields to update */
  filter: OrderFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateOrder;
};

export type CreateOneOrderInput = {
  /** The record to create */
  order: CreateOrder;
};

export type CreateOrder = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  totalPrice?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
};

export type CreateManyOrdersInput = {
  /** Array of records to create */
  orders: Array<CreateOrder>;
};

export type DeleteManyZipsInput = {
  /** Filter to find records to delete */
  filter: ZipFilter;
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
  filter: ZipFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateZip;
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
  filter: MenuFilter;
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
  filter: MenuFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateMenu;
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
      & Pick<User, 'firstName' | 'lastName' | 'verified' | 'phoneNumber' | 'address'>
      & { administrator: (
        { __typename?: 'Administrator' }
        & Pick<Administrator, 'id'>
      ) }
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
    & Pick<Asset, 'id' | 'source' | 'preview'>
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
      & Pick<Store, 'id' | 'storeName' | 'rentalStore' | 'GSTIN'>
    ) }
  )> }
);

export type GetDefaultStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultStoreQuery = (
  { __typename?: 'Query' }
  & { GetDefaultStore: (
    { __typename?: 'Store' }
    & Pick<Store, 'id' | 'storeName' | 'phoneNumber' | 'officialemail' | 'zipcode' | 'streetAddress1' | 'streetAddress2' | 'GSTIN' | 'singleStore' | 'rentalStore' | 'channelMarkets'>
    & { country: (
      { __typename?: 'Country' }
      & Pick<Country, 'id' | 'name'>
    ) }
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
  & { zones: (
    { __typename?: 'ZoneConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'ZoneEdge' }
      & { node: (
        { __typename?: 'Zone' }
        & Pick<Zone, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type GetTaxRulesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  iLike?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ConnectionCursor']>;
}>;


export type GetTaxRulesQuery = (
  { __typename?: 'Query' }
  & { taxCategories: (
    { __typename?: 'TaxCategoryConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'TaxCategoryEdge' }
      & { node: (
        { __typename?: 'TaxCategory' }
        & Pick<TaxCategory, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type GetTaxRatesQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type GetTaxRatesQuery = (
  { __typename?: 'Query' }
  & { taxRates: (
    { __typename?: 'TaxRateConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'endCursor' | 'startCursor'>
    ), edges: Array<(
      { __typename?: 'TaxRateEdge' }
      & { node: (
        { __typename?: 'TaxRate' }
        & Pick<TaxRate, 'id' | 'name' | 'value' | 'enabled'>
        & { zone: (
          { __typename?: 'Zone' }
          & Pick<Zone, 'id' | 'name'>
        ), category: (
          { __typename?: 'TaxCategory' }
          & Pick<TaxCategory, 'id' | 'name'>
        ) }
      ) }
    )> }
  ) }
);

export type GetAllChannelsQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetAllChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: (
    { __typename?: 'ChannelConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'endCursor' | 'startCursor'>
    ), edges: Array<(
      { __typename?: 'ChannelEdge' }
      & { node: (
        { __typename?: 'Channel' }
        & Pick<Channel, 'id' | 'code' | 'defaultLanguageCode' | 'currencyCode' | 'pricesIncludeTax'>
      ) }
    )> }
  ) }
);

export type GetallcollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetallcollectionQuery = (
  { __typename?: 'Query' }
  & { GetCollectionTree: Array<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'isRoot' | 'inMenu' | 'name' | 'description'>
    & { children: (
      { __typename?: 'CollectionConnection' }
      & { edges: Array<(
        { __typename?: 'CollectionEdge' }
        & { node: (
          { __typename?: 'Collection' }
          & Pick<Collection, 'id' | 'isRoot' | 'inMenu' | 'name' | 'description'>
          & { children: (
            { __typename?: 'CollectionConnection' }
            & { edges: Array<(
              { __typename?: 'CollectionEdge' }
              & { node: (
                { __typename?: 'Collection' }
                & Pick<Collection, 'id' | 'isRoot' | 'inMenu' | 'name' | 'description'>
              ) }
            )> }
          ) }
        ) }
      )> }
    ) }
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
    & { seo: (
      { __typename?: 'Seo' }
      & Pick<Seo, 'id' | 'urlKey' | 'metadesc' | 'metatitle' | 'metakeywords'>
    ) }
  )> }
);

export type GetAllAssetsQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type GetAllAssetsQuery = (
  { __typename?: 'Query' }
  & { assets: (
    { __typename?: 'AssetConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'AssetEdge' }
      & { node: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'createdAt' | 'name' | 'type' | 'mimeType' | 'source' | 'preview' | 'fileSize' | 'width' | 'height'>
      ) }
    )> }
  ) }
);

export type GetAllFacetsQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type GetAllFacetsQuery = (
  { __typename?: 'Query' }
  & { facets: (
    { __typename?: 'FacetConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'FacetEdge' }
      & { node: (
        { __typename?: 'Facet' }
        & Pick<Facet, 'id' | 'createdAt' | 'name' | 'isPrivate' | 'code'>
      ) }
    )> }
  ) }
);

export type GetFacetValuesQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetFacetValuesQuery = (
  { __typename?: 'Query' }
  & { facetValues: (
    { __typename?: 'FacetValueConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'FacetValueEdge' }
      & { node: (
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'name' | 'code'>
        ) }
      ) }
    )> }
  ) }
);

export type GetAllProductsQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type GetAllProductsQuery = (
  { __typename?: 'Query' }
  & { products: (
    { __typename?: 'ProductConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'ProductEdge' }
      & { node: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'slug' | 'productName' | 'description'>
        & { featuredAsset: (
          { __typename?: 'Asset' }
          & Pick<Asset, 'id' | 'preview' | 'source'>
        ), facets: (
          { __typename?: 'FacetValueConnection' }
          & { edges: Array<(
            { __typename?: 'FacetValueEdge' }
            & { node: (
              { __typename?: 'FacetValue' }
              & Pick<FacetValue, 'id' | 'code'>
              & { facet: (
                { __typename?: 'Facet' }
                & Pick<Facet, 'id' | 'name' | 'code'>
              ) }
            ) }
          )> }
        ), assets: (
          { __typename?: 'ProductAssetConnection' }
          & { edges: Array<(
            { __typename?: 'ProductAssetEdge' }
            & { node: (
              { __typename?: 'ProductAsset' }
              & Pick<ProductAsset, 'id'>
              & { asset: (
                { __typename?: 'Asset' }
                & Pick<Asset, 'id' | 'name' | 'type' | 'mimeType' | 'preview' | 'source'>
              ) }
            ) }
          )> }
        ) }
      ) }
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
    & { values: (
      { __typename?: 'FacetValueConnection' }
      & { edges: Array<(
        { __typename?: 'FacetValueEdge' }
        & { node: (
          { __typename?: 'FacetValue' }
          & Pick<FacetValue, 'id' | 'code'>
        ) }
      )> }
    ) }
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
    ), facets: (
      { __typename?: 'FacetValueConnection' }
      & { edges: Array<(
        { __typename?: 'FacetValueEdge' }
        & { node: (
          { __typename?: 'FacetValue' }
          & Pick<FacetValue, 'id' | 'code'>
          & { facet: (
            { __typename?: 'Facet' }
            & Pick<Facet, 'id' | 'name' | 'code'>
          ) }
        ) }
      )> }
    ), assets: (
      { __typename?: 'ProductAssetConnection' }
      & { edges: Array<(
        { __typename?: 'ProductAssetEdge' }
        & { node: (
          { __typename?: 'ProductAsset' }
          & Pick<ProductAsset, 'id'>
          & { asset: (
            { __typename?: 'Asset' }
            & Pick<Asset, 'id' | 'source' | 'preview'>
          ) }
        ) }
      )> }
    ) }
  )> }
);

export type GetAllVendurePlansQueryVariables = Exact<{
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type GetAllVendurePlansQuery = (
  { __typename?: 'Query' }
  & { vendorPlans: (
    { __typename?: 'VendorPlansConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'VendorPlansEdge' }
      & { node: (
        { __typename?: 'VendorPlans' }
        & Pick<VendorPlans, 'id' | 'isActive' | 'name' | 'planValue' | 'priceStrategy' | 'tenureStrategy'>
      ) }
    )> }
  ) }
);

export type GetProductVariantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductVariantQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { variants: (
      { __typename?: 'ProductVariantConnection' }
      & { edges: Array<(
        { __typename?: 'ProductVariantEdge' }
        & { node: (
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name' | 'enabled' | 'sku' | 'trackInventory' | 'dum_price'>
          & { seo?: Maybe<(
            { __typename?: 'Seo' }
            & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metakeywords' | 'metadesc'>
          )>, specs?: Maybe<(
            { __typename?: 'ProductVariantSpecs' }
            & Pick<ProductVariantSpecs, 'id' | 'specs'>
          )>, price?: Maybe<(
            { __typename?: 'ProductVariantPrice' }
            & Pick<ProductVariantPrice, 'id' | 'price' | 'taxIncluded'>
            & { tax: (
              { __typename?: 'TaxRate' }
              & Pick<TaxRate, 'id' | 'value'>
            ) }
          )>, asset?: Maybe<(
            { __typename?: 'ProductVariantAsset' }
            & Pick<ProductVariantAsset, 'id'>
            & { asset: (
              { __typename?: 'Asset' }
              & Pick<Asset, 'id' | 'preview'>
            ) }
          )> }
        ) }
      )> }
    ), options: (
      { __typename?: 'ProductOptionGroupConnection' }
      & { edges: Array<(
        { __typename?: 'ProductOptionGroupEdge' }
        & { node: (
          { __typename?: 'ProductOptionGroup' }
          & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
          & { options: (
            { __typename?: 'ProductOptionConnection' }
            & { edges: Array<(
              { __typename?: 'ProductOptionEdge' }
              & { node: (
                { __typename?: 'ProductOption' }
                & Pick<ProductOption, 'id' | 'name' | 'code'>
              ) }
            )> }
          ) }
        ) }
      )> }
    ) }
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

export type GetAllRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRolesQuery = (
  { __typename?: 'Query' }
  & { roles: (
    { __typename?: 'RoleConnection' }
    & { edges: Array<(
      { __typename?: 'RoleEdge' }
      & { node: (
        { __typename?: 'Role' }
        & Pick<Role, 'id' | 'code' | 'description' | 'type'>
      ) }
    )> }
  ) }
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
  before?: Maybe<Scalars['ConnectionCursor']>;
  after?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type GetAllSeoQuery = (
  { __typename?: 'Query' }
  & { seos: (
    { __typename?: 'SeoConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'SeoEdge' }
      & { node: (
        { __typename?: 'Seo' }
        & Pick<Seo, 'id' | 'urlKey' | 'metatitle' | 'metadesc' | 'metakeywords'>
        & { collection?: Maybe<(
          { __typename?: 'Collection' }
          & Pick<Collection, 'id' | 'name'>
        )>, variant?: Maybe<(
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'name'>
        )> }
      ) }
    )> }
  ) }
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

export type GetBillingAgreementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBillingAgreementQuery = (
  { __typename?: 'Query' }
  & { GetBillingAgreement: (
    { __typename?: 'BillingAgreement' }
    & Pick<BillingAgreement, 'id' | 'value' | 'type' | 'state' | 'createdAt' | 'updatedAt'>
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
    & { members: (
      { __typename?: 'CountryConnection' }
      & { edges: Array<(
        { __typename?: 'CountryEdge' }
        & { node: (
          { __typename?: 'Country' }
          & Pick<Country, 'id' | 'code' | 'name' | 'enabled'>
        ) }
      )> }
    ) }
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
  & { productVariants: (
    { __typename?: 'ProductVariantConnection' }
    & { edges: Array<(
      { __typename?: 'ProductVariantEdge' }
      & { node: (
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'id' | 'name' | 'enabled'>
      ) }
    )> }
  ) }
);

export type SearchCollectionQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type SearchCollectionQuery = (
  { __typename?: 'Query' }
  & { collections: (
    { __typename?: 'CollectionConnection' }
    & { edges: Array<(
      { __typename?: 'CollectionEdge' }
      & { node: (
        { __typename?: 'Collection' }
        & Pick<Collection, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type SearchFacetValueQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type SearchFacetValueQuery = (
  { __typename?: 'Query' }
  & { facetValues: (
    { __typename?: 'FacetValueConnection' }
    & { edges: Array<(
      { __typename?: 'FacetValueEdge' }
      & { node: (
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'name'>
        ) }
      ) }
    )> }
  ) }
);


export const AdministratorLoginDocument = gql`
    mutation administratorLogin($email: String!, $password: String!) {
  administratorLogin(email: $email, password: $password) {
    user {
      firstName
      lastName
      verified
      phoneNumber
      address
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
    source
    preview
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
    mutation CreateVariantPrice($taxId: ID!, $price: Float!, $variantId: ID!, $taxIncluded: Boolean!) {
  CreateVariantPrice(taxId: $taxId, price: $price, variantId: $variantId, taxIncluded: $taxIncluded) {
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
      rentalStore
      GSTIN
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
    country {
      id
      name
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
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;
export const GetTaxRulesDocument = gql`
    query GetTaxRules($first: Int, $iLike: String, $after: ConnectionCursor, $last: Int, $before: ConnectionCursor) {
  taxCategories(paging: {first: $first, after: $after, last: $last, before: $before}, filter: {name: {like: $iLike}}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;
export const GetTaxRatesDocument = gql`
    query GetTaxRates($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int) {
  taxRates(paging: {before: $before, after: $after, first: $first, last: $last}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
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
  }
}
    `;
export const GetAllChannelsDocument = gql`
    query GetAllChannels($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int, $search: String) {
  channels(filter: {code: {like: $search}}, paging: {before: $before, after: $after, first: $first, last: $last}, sorting: {field: createdAt, direction: DESC}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        id
        code
        defaultLanguageCode
        currencyCode
        pricesIncludeTax
      }
    }
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
      edges {
        node {
          id
          isRoot
          inMenu
          name
          description
          children {
            edges {
              node {
                id
                isRoot
                inMenu
                name
                description
              }
            }
          }
        }
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
    query GetAllAssets($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int) {
  assets(paging: {before: $before, after: $after, first: $first, last: $last}, sorting: {field: createdAt, direction: DESC}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
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
  }
}
    `;
export const GetAllFacetsDocument = gql`
    query GetAllFacets($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int) {
  facets(paging: {before: $before, after: $after, first: $first, last: $last}, sorting: {field: createdAt, direction: DESC}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        createdAt
        name
        isPrivate
        code
      }
    }
  }
}
    `;
export const GetFacetValuesDocument = gql`
    query GetFacetValues($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int, $search: String) {
  facetValues(paging: {before: $before, after: $after, first: $first, last: $last}, sorting: {direction: ASC, field: code}, filter: {code: {like: $search}}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        code
        facet {
          id
          name
          code
        }
      }
    }
  }
}
    `;
export const GetAllProductsDocument = gql`
    query GetAllProducts($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int) {
  products(paging: {before: $before, after: $after, first: $first, last: $last}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
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
          edges {
            node {
              id
              code
              facet {
                id
                name
                code
              }
            }
          }
        }
        assets {
          edges {
            node {
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
      }
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
      edges {
        node {
          id
          code
        }
      }
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
      edges {
        node {
          id
          code
          facet {
            id
            name
            code
          }
        }
      }
    }
    assets {
      edges {
        node {
          id
          asset {
            id
            source
            preview
          }
        }
      }
    }
  }
}
    `;
export const GetAllVendurePlansDocument = gql`
    query GetAllVendurePlans($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int) {
  vendorPlans(paging: {before: $before, after: $after, first: $first, last: $last}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        isActive
        name
        planValue
        priceStrategy
        tenureStrategy
      }
    }
  }
}
    `;
export const GetProductVariantDocument = gql`
    query GetProductVariant($id: ID!) {
  product(id: $id) {
    id
    variants {
      edges {
        node {
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
          price {
            id
            price
            tax {
              id
              value
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
    }
    options {
      edges {
        node {
          id
          name
          code
          options {
            edges {
              node {
                id
                name
                code
              }
            }
          }
        }
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
    query GetAllRoles {
  roles(sorting: {field: createdAt, direction: DESC}) {
    edges {
      node {
        id
        code
        description
        type
      }
    }
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
    query GetAllSeo($before: ConnectionCursor, $after: ConnectionCursor, $first: Int, $last: Int) {
  seos(paging: {before: $before, after: $after, first: $first, last: $last}, sorting: {field: createdAt, direction: DESC}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        urlKey
        metatitle
        metadesc
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
export const GetBillingAgreementDocument = gql`
    query GetBillingAgreement($id: ID!) {
  GetBillingAgreement(id: $id) {
    id
    value
    type
    state
    createdAt
    updatedAt
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
      edges {
        node {
          id
          code
          name
          enabled
        }
      }
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
    edges {
      node {
        id
        name
        enabled
      }
    }
  }
}
    `;
export const SearchCollectionDocument = gql`
    query SearchCollection($search: String) {
  collections(filter: {name: {like: $search}}) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;
export const SearchFacetValueDocument = gql`
    query SearchFacetValue($search: String) {
  facetValues(filter: {code: {like: $search}}) {
    edges {
      node {
        id
        facet {
          id
          name
        }
        code
      }
    }
  }
}
    `;