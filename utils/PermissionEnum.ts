export enum PermissionEnum {
    // Orders
    CreateOrder = 'CreateOrder',
    ReadOrder = 'ReadOrder',
    UpdateOrder = 'UpdateOrder',
    DeleteOrder = 'DeleteOrder',

    // Invoices
    CreateInvoices = 'CreateInvoices',
    ReadInvoices = 'ReadInvoices',
    UpdateInvoices = 'UpdateInvoice',
    DeleteInvoices = 'DeleteInvoices',

    // Catalog
    CreateCatalog = 'CreateCatalog',
    ReadCatalog = 'ReadCatalog',
    UpdateCatalog = 'UpdateCatalog',
    DeleteCatalog = 'DeleteCatalog',

    // Customer
    CreateCustomer = 'CreateCustomer',
    ReadCustomer = 'ReadCustomer',
    UpdateCustomer = 'UpdateCustomer',
    DeleteCustomer = 'DeleteCustomer',

    // Administrator
    CreateAdministrator = 'CreateAdministrator',
    ReadAdministrator = 'ReadAdministrator',
    UpdateAdministrator = 'UpdateAdministrator',
    DeleteAdministrator = 'DeleteAdministrator',

    // Promotions
    CreatePromotion = 'CreatePromotion',
    ReadPromotion = 'ReadPromotion',
    UpdatePromotion = 'UpdatePromotion',
    DeletePromotion = 'DeletePromotion',

    // Settings
    CreateSettings = 'CreateSettings',
    ReadSettings = 'ReadSettings',
    UpdateSettings = 'UpdateSettings',
    DeleteSettings = 'DeleteSettings',

    // Communications
    CreateCommunications = 'CreateCommunications',
    ReadCommunications = 'ReadCommunications',
    UpdateCommunications = 'UpdateCommunications',
    DeleteCommunications = 'DeleteCommunications',

    // Seo
    CreateSeo = 'CreateSeo',
    ReadSeo = 'ReadSeo',
    UpdateSeo = 'UpdateSeo',
    DeleteSeo = 'DeleteSeo'
}

export const PermissionArray = Object.values(PermissionEnum)

export enum RoleType {
    ADMINISTRATOR = 'ADMINISTRATOR',
    VENDOR = 'VENDOR',
    USER = 'USER',
    BASIC = 'BASIC'
}
