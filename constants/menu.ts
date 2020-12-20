const menudata = [
    {
        id: "dashboard",
        icon: "desktop-mac-dashboard",
        label: "menu.dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "point-of-sale",
        label: "menu.sales",
        to: "/app/sales-menu",
        subs: [
            {
                icon: "paper-roll",
                label: "menu.orders",
                to: "/app/sales-menu/orders"
            },
            {
                icon: "receipt",
                label: "menu.invoices",
                to: "/app/sales-menu/invoices"
            },
            /*{
                icon: "note_add",
                label: "menu.credit-memo",
                to: "/app/sales-menu/credit-memo"
            },*/
            {
                icon: "cash-usd",
                label: "menu.settlements",
                to: "/app/sales-menu/settlements"
            },
            {
                icon: "file-document-edit",
                label: "menu.billing-agreement",
                to: "/app/sales-menu/billing-agreement"
            },
            {
                icon: "credit-card-settings-outline",
                label: "menu.transaction",
                to: "/app/sales-menu/transaction"
            },
        ]
    },
    {
        id: "catalog",
        icon: "format-list-checks",
        label: "menu.catalog",
        to: "/app/catalog",
        subs: [
            {
                icon: "sitemap",
                label: "menu.products",
                to: "/app/catalog/products"
            },
            {
                icon: "database-settings-outline",
                label: "menu.collections",
                to: "/app/catalog/collections"
            },
            {
                icon: "harddisk",
                label: "menu.services",
                to: "/app/catalog/services"
            },
            {
                icon: "pound",
                label: "menu.facets",
                to: "/app/catalog/facets"
            },
            {
                icon: "image-multiple",
                label: "menu.assets",
                to: "/app/catalog/assets"
            },
        ]
    },
    {
        id: "stocks",
        label: "menu.stock-management",
        icon: 'fas fa-layer-group',
        to: "/app/stocks",
        subs: [
            {
                icon: "package-variant",
                label: "menu.stock-mana",
                to: "/app/stocks/stocks-management"
            },
            {
                icon: "package-down",
                label: "menu.stock-back",
                to: "/app/stocks/stocks-backorders"
            }
        ]
    },
    {
        id: "customers-menu",
        icon: "account-group",
        label: "menu.customers",
        to: "/app/customers-menu",
        subs: [
            {
                icon: "account-group-outline",
                label: "menu.allsustomers",
                to: "/app/customers-menu/allcustomers"
            },
            {
                icon: "target-account",
                label: "menu.nowonline",
                to: "/app/customers-menu/nowonline"
            },
            {
                icon: "account-network",
                label: "menu.customer-group",
                to: "/app/customers-menu/customer-groups"
            },
        ]
    },
    /*{
        id: "marketing-menu",
        label: "menu.communication",
        icon: "fas fa-ad",
        to: "/app/marketing-menu/communication",
        subs: [
            {
                icon: "simple-icon-notebook",
                label: "menu.cat-price-rule",
                to: "/app/marketing-menu/promotions/cat-price-rule"
            },
            {
                icon: "simple-icon-puzzle",
                label: "menu.cart-price-rule",
                to: "/app/marketing-menu/promotions/cart-price-rule"
            },
            {
                icon: "iconsminds-email",
                label: "menu.email-template",
                to: "/app/marketing-menu/communication/cat-price-rule"
            },
            {
                icon: "iconsminds-newspaper",
                label: "menu.newsletter-template",
                to: "/app/marketing-menu/communication/cart-price-rule"
            },
            {
                icon: "iconsminds-data-center",
                label: "menu.newsletter-queue",
                to: "/app/marketing-menu/communication/cart-price-rule"
            },
            {
                icon: "iconsminds-gear",
                label: "menu.newsletter-subscribers",
                to: "/app/marketing-menu/communication/cart-price-rule"
            }
        ]
    },*/
    {
        id: "seo-menu",
        label: "menu.seo-search",
        icon: 'link-box',
        to: "/app/seo-menu",
        subs: [
            {
                icon: "link-variant",
                label: "menu.url-rewrites",
                to: "/app/seo-menu/url-rewrites"
            },
            {
                icon: "satellite-uplink",
                label: "menu.search-terms",
                to: "/app/seo-menu/search-terms"
            }
        ]
    },
    {
        id: "content-menu",
        label: "menu.user-content",
        icon: 'fab fa-centercode',
        to: "/app/content-menu",
        subs: [
            {
                icon: " iconsminds-power-cable",
                label: "menu.all-reviews",
                to: "/app/content-menu/user-content/all-reviews"
            },
            {
                icon: "iconsminds-server-2",
                label: "menu.pending-reviews",
                to: "/app/content-menu/user-content/pending-reviews"
            },
            {
                icon: "iconsminds-stop-2",
                label: "menu.pages",
                to: "/app/content-menu/elements/pages"
            },
            /*{
                icon: "iconsminds-empty-box",
                label: "menu.blocks",
                to: "/app/content-menu/elements/blocks"
            },*/
            /*{
                icon: "iconsminds-record",
                label: "menu.widget",
                to: "/app/content-menu/elements/widget"
            },*/
            {
                icon: "iconsminds-receipt-4",
                label: "menu.menu-builder",
                to: "/app/content-menu/design/menubuilder"
            },
            /*{
                icon: "iconsminds-bowling",
                label: "menu.schedule",
                to: "/app/content-menu/design/schedule"
            }*/
        ]
    },
    {
        id: "stores-menu",
        icon: "fas fa-store",
        label: "menu.stores",
        to: "/app/stores-menu",
        subs: [
            /*{
              label: "menu.channels",
              to: "/app/stores-menu/channels"
            },*/
            {
                label: "menu.store-config",
                to: "/app/stores-menu/store-configuration"
            },
            {
                label: "menu.tax-rules",
                to: "/app/stores-menu/tax-rules"
            },
            {
                label: "menu.tax-rates",
                to: "/app/stores-menu/tax-rates"
            },
        ]
    },
    {
        id: "system-menu",
        icon: "fas fa-cogs",
        label: "menu.administrator",
        to: "/app/system-menu",
        state: 'admin',
        subs: [
            {
                label: "menu.system-config",
                to: "/app/system-menu/system-config",
                state: 'admin',
            },
            {
                label: "menu.zone-config",
                to: "/app/system-menu/zone-config",
                state: 'admin',
            },
            {
                label: "menu.country-config",
                to: "/app/system-menu/country-config",
                state: 'admin',
            },
            /*{
              label: "menu.exchange-rates",
              to: "/app/system-menu/exchange-rates"
            },*/
            {
                label: "menu.admin-listing",
                to: "/app/system-menu/admins",
                state: 'admin',
            },
            {
                label: "menu.roles-listing",
                to: "/app/system-menu/roles",
                state: 'admin',
            },
            {
                label: "menu.vendor-listing",
                to: "/app/system-menu/vendors",
                state: 'admin',
            },
            {
                label: "menu.vendor-plans",
                to: "/app/system-menu/plans",
                state: 'admin',
            }
        ]
    },
];
const adminMenuData = [
    {
        id: "dashboard",
        icon: "desktop-mac-dashboard",
        label: "menu.dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "point-of-sale",
        label: "menu.sales",
        to: "/app/sales-menu",
        subs: [
            {
                icon: "paper-roll",
                label: "menu.orders",
                to: "/app/sales-menu/orders"
            },
            {
                icon: "receipt",
                label: "menu.invoices",
                to: "/app/sales-menu/invoices"
            },
            /*{
                icon: "note_add",
                label: "menu.credit-memo",
                to: "/app/sales-menu/credit-memo"
            },*/
            {
                icon: "cash-usd",
                label: "menu.settlements",
                to: "/app/sales-menu/settlements"
            },
            {
                icon: "file-document-edit",
                label: "menu.billing-agreement",
                to: "/app/sales-menu/billing-agreement"
            },
            {
                icon: "credit-card-settings-outline",
                label: "menu.transaction",
                to: "/app/sales-menu/transaction"
            },
        ]
    },
    {
        id: "catalog",
        icon: "format-list-checks",
        label: "menu.catalog",
        to: "/app/catalog",
        subs: [
            {
                icon: "sitemap",
                label: "menu.products",
                to: "/app/catalog/products"
            },
            {
                icon: "database-settings-outline",
                label: "menu.collections",
                to: "/app/catalog/collections"
            },
            {
                icon: "harddisk",
                label: "menu.services",
                to: "/app/catalog/services"
            },
            {
                icon: "pound",
                label: "menu.facets",
                to: "/app/catalog/facets"
            },
            {
                icon: "image-multiple",
                label: "menu.assets",
                to: "/app/catalog/assets"
            },
        ]
    },
    {
        id: "stocks",
        label: "menu.stock-management",
        icon: 'package-variant',
        to: "/app/stocks",
        subs: [
            {
                icon: "package-variant",
                label: "menu.stock-mana",
                to: "/app/stocks/stocks-management"
            },
            {
                icon: "package-down",
                label: "menu.stock-back",
                to: "/app/stocks/stocks-backorders"
            }
        ]
    },
    {
        id: "customers-menu",
        icon: "account-group",
        label: "menu.customers",
        to: "/app/customers-menu",
        subs: [
            {
                icon: "account-group-outline",
                label: "menu.allsustomers",
                to: "/app/customers-menu/allcustomers"
            },
            {
                icon: "target-account",
                label: "menu.nowonline",
                to: "/app/customers-menu/nowonline"
            }
        ]
    },
    {
        id: "delivery-menu",
        icon: "moped",
        label: "menu.delivery",
        to: "/app/delivery-menu",
        subs: [
            {
                icon: "truck-delivery",
                label: "menu.delivery-guys",
                to: "/app/delivery-menu/guys"
            },
            {
                icon: "truck-delivery-outline",
                label: "menu.delivery-manager",
                to: "/app/delivery-menu/manager"
            }
        ]
    },
    /*{
        id: "marketing-menu",
        label: "menu.communication",
        icon: "fas fa-ad",
        to: "/app/marketing-menu/communication",
        subs: [
            {
                icon: "simple-icon-notebook",
                label: "menu.cat-price-rule",
                to: "/app/marketing-menu/promotions/cat-price-rule"
            },
            {
                icon: "simple-icon-puzzle",
                label: "menu.cart-price-rule",
                to: "/app/marketing-menu/promotions/cart-price-rule"
            },
            {
                icon: "iconsminds-email",
                label: "menu.email-template",
                to: "/app/marketing-menu/communication/cat-price-rule"
            },
            {
                icon: "iconsminds-newspaper",
                label: "menu.newsletter-template",
                to: "/app/marketing-menu/communication/cart-price-rule"
            },
            {
                icon: "iconsminds-data-center",
                label: "menu.newsletter-queue",
                to: "/app/marketing-menu/communication/cart-price-rule"
            },
            {
                icon: "iconsminds-gear",
                label: "menu.newsletter-subscribers",
                to: "/app/marketing-menu/communication/cart-price-rule"
            }
        ]
    },*/
    {
        id: "seo-menu",
        label: "menu.seo-search",
        icon: 'link-variant',
        to: "/app/seo-menu",
        subs: [
            {
                icon: "link-box",
                label: "menu.url-rewrites",
                to: "/app/seo-menu/url-rewrites"
            },
            /*{
                icon: "iconsminds-magnifi-glass",
                label: "menu.search-terms",
                to: "/app/seo-menu/search-terms"
            }*/
        ]
    },
    {
        id: "content-menu",
        label: "menu.user-content",
        icon: 'book-open-page-variant',
        to: "/app/content-menu",
        subs: [
            /*{
                icon: " iconsminds-power-cable",
                label: "menu.all-reviews",
                to: "/app/content-menu/user-content/all-reviews"
            },*/
            /*{
                icon: "iconsminds-server-2",
                label: "menu.pending-reviews",
                to: "/app/content-menu/user-content/pending-reviews"
            },*/
            {
                icon: "book-open-page-variant-outline",
                label: "menu.pages",
                to: "/app/content-menu/elements/pages"
            },
            /*{
                icon: "iconsminds-empty-box",
                label: "menu.blocks",
                to: "/app/content-menu/elements/blocks"
            },*/
            /*{
                icon: "iconsminds-record",
                label: "menu.widget",
                to: "/app/content-menu/elements/widget"
            },*/
            {
                icon: "page-next-outline",
                label: "menu.menu-builder",
                to: "/app/content-menu/design/menubuilder"
            },
            /*{
                icon: "iconsminds-bowling",
                label: "menu.schedule",
                to: "/app/content-menu/design/schedule"
            }*/
        ]
    },
    {
        id: "stores-menu",
        icon: "alpha-a-circle",
        label: "menu.stores",
        to: "/app/stores-menu",
        subs: [
            /*{
              label: "menu.channels",
              to: "/app/stores-menu/channels"
            },*/
            /*{
                label: "menu.store-config",
                to: "/app/stores-menu/store-configuration"
            },*/
            {
                icon: "alpha-a-circle",
                label: "menu.tax-rules",
                to: "/app/stores-menu/tax-rules"
            },
            {
                icon: "alpha-a-circle",
                label: "menu.tax-rates",
                to: "/app/stores-menu/tax-rates"
            },
        ]
    },
    {
        id: "system-menu",
        icon: "alpha-a-circle",
        label: "menu.administrator",
        to: "/app/system-menu",
        state: 'admin',
        subs: [
            {
                icon: "alpha-a-circle",
                label: "menu.system-config",
                to: "/app/system-menu/system-config",
                state: 'admin',
            },
            {
                icon: "alpha-a-circle",
                label: "menu.zone-config",
                to: "/app/system-menu/zone-config",
                state: 'admin',
            },
            {
                icon: "alpha-a-circle",
                label: "menu.country-config",
                to: "/app/system-menu/country-config",
                state: 'admin',
            },
            /*{
              label: "menu.exchange-rates",
              to: "/app/system-menu/exchange-rates"
            },*/
            {
                icon: "alpha-a-circle",
                label: "menu.admin-listing",
                to: "/app/system-menu/admins",
                state: 'admin',
            },
            /*{
                label: "menu.roles-listing",
                to: "/app/system-menu/roles",
                state: 'admin',
            },*/
            {
                icon: "alpha-a-circle",
                label: "menu.vendor-listing",
                to: "/app/system-menu/vendors",
                state: 'admin',
            },
            {
                icon: "alpha-a-circle",
                label: "menu.vendor-plans",
                to: "/app/system-menu/plans",
                state: 'admin',
            }
        ]
    },
];
const vendorMenuData = [
    {
        id: "dashboard",
        icon: "alpha-a-circle",
        label: "menu.dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "alpha-a-circle",
        label: "menu.sales",
        to: "/app/sales-menu",
        subs: [
            {
                icon: "alpha-a-circle",
                label: "menu.orders",
                to: "/app/sales-menu/orders"
            },
            {
                icon: "alpha-a-circle",
                label: "menu.invoices",
                to: "/app/sales-menu/invoices"
            },
            /*{
                icon: "note_add",
                label: "menu.credit-memo",
                to: "/app/sales-menu/credit-memo"
            },
            {
                icon: "iconsminds-jet",
                label: "menu.shipment",
                to: "/app/sales-menu/shipments"
            },*/
            {
                icon: "alpha-a-circle",
                label: "menu.billing-agreement",
                to: "/app/sales-menu/billing-agreement"
            },
            /*{
                icon: "iconsminds-pound-sign-2",
                label: "menu.transaction",
                to: "/app/sales-menu/transaction"
            },*/
        ]
    },
    {
        id: "catalog",
        icon: "alpha-a-circle",
        label: "menu.catalog",
        to: "/app/catalog",
        subs: [
            {
                icon: "alpha-a-circle",
                label: "menu.products",
                to: "/app/catalog/products"
            },
            /*{
                icon: "iconsminds-files",
                label: "menu.collections",
                to: "/app/catalog/collections"
            },
            {
                icon: "iconsminds-tag",
                label: "menu.facets",
                to: "/app/catalog/facets"
            },*/
            {
                icon: "alpha-a-circle",
                label: "menu.assets",
                to: "/app/catalog/assets"
            },
        ]
    },
    {
        id: "stocks",
        label: "menu.stock-management",
        icon: "alpha-a-circle",
        to: "/app/stocks",
        subs: [
            {
                icon: "alpha-a-circle",
                label: "menu.stock-mana",
                to: "/app/stocks/stocks-management"
            },
            {
                icon: "alpha-a-circle",
                label: "menu.stock-back",
                to: "/app/stocks/stocks-backorders"
            }
        ]
    },
    /*{
        id: "customers-menu",
        icon: "fas fa-restroom",
        label: "menu.customers",
        to: "/app/customers-menu",
        subs: [
            {
                icon: "iconsminds-mens",
                label: "menu.allsustomers",
                to: "/app/customers-menu/allcustomers"
            },
            {
                icon: "iconsminds-assistant",
                label: "menu.nowonline",
                to: "/app/customers-menu/nowonline"
            },
            {
                icon: "iconsminds-assistant",
                label: "menu.customer-group",
                to: "/app/customers-menu/customer-groups"
            },
        ]
    },*/
    /*{
        id: "marketing-menu",
        label: "menu.communication",
        icon: "fas fa-ad",
        to: "/app/marketing-menu/communication",
        subs: [
            {
                icon: "simple-icon-notebook",
                label: "menu.cat-price-rule",
                to: "/app/marketing-menu/promotions/cat-price-rule"
            },
            {
                icon: "simple-icon-puzzle",
                label: "menu.cart-price-rule",
                to: "/app/marketing-menu/promotions/cart-price-rule"
            },
            {
                icon: "iconsminds-email",
                label: "menu.email-template",
                to: "/app/marketing-menu/communication/cat-price-rule"
            },
            {
                icon: "iconsminds-newspaper",
                label: "menu.newsletter-template",
                to: "/app/marketing-menu/communication/cart-price-rule"
            },
            {
                icon: "iconsminds-data-center",
                label: "menu.newsletter-queue",
                to: "/app/marketing-menu/communication/cart-price-rule"
            },
            {
                icon: "iconsminds-gear",
                label: "menu.newsletter-subscribers",
                to: "/app/marketing-menu/communication/cart-price-rule"
            }
        ]
    },*/
    /*{
        id: "seo-menu",
        label: "menu.seo-search",
        icon: 'fas fa-at',
        to: "/app/seo-menu",
        subs: [
            {
                icon: "iconsminds-pen",
                label: "menu.url-rewrites",
                to: "/app/seo-menu/url-rewrites"
            },
            {
                icon: "iconsminds-magnifi-glass",
                label: "menu.search-terms",
                to: "/app/seo-menu/search-terms"
            }
        ]
    },*/
    /*{
        id: "content-menu",
        label: "menu.user-content",
        icon: 'fab fa-centercode',
        to: "/app/content-menu",
        subs: [
            {
                icon: " iconsminds-power-cable",
                label: "menu.all-reviews",
                to: "/app/content-menu/user-content/all-reviews"
            },
            {
                icon: "iconsminds-server-2",
                label: "menu.pending-reviews",
                to: "/app/content-menu/user-content/pending-reviews"
            },
            {
                icon: "iconsminds-stop-2",
                label: "menu.pages",
                to: "/app/content-menu/elements/pages"
            },
            {
                icon: "iconsminds-empty-box",
                label: "menu.blocks",
                to: "/app/content-menu/elements/blocks"
            },
            /!*{
                icon: "iconsminds-record",
                label: "menu.widget",
                to: "/app/content-menu/elements/widget"
            },*!/
            {
                icon: "iconsminds-receipt-4",
                label: "menu.menu-builder",
                to: "/app/content-menu/design/menubuilder"
            },
            /!*{
                icon: "iconsminds-bowling",
                label: "menu.schedule",
                to: "/app/content-menu/design/schedule"
            }*!/
        ]
    },*/
    {
        id: "stores-menu",
        icon: "alpha-a-circle",
        label: "menu.stores",
        to: "/app/stores-menu",
        subs: [
            /*{
              label: "menu.channels",
              to: "/app/stores-menu/channels"
            },*/
            {
                icon: "alpha-a-circle",
                label: "menu.store-config",
                to: "/app/stores-menu/store-configuration"
            },
            /*{
                label: "menu.tax-rules",
                to: "/app/stores-menu/tax-rules"
            },
            {
                label: "menu.tax-rates",
                to: "/app/stores-menu/tax-rates"
            },*/
        ]
    },
    /*{
        id: "system-menu",
        icon: "fas fa-cogs",
        label: "menu.administrator",
        to: "/app/system-menu",
        state: 'admin',
        subs: [
            {
                label: "menu.system-config",
                to: "/app/system-menu/system-config",
                state: 'admin',
            },
            {
                label: "menu.zone-config",
                to: "/app/system-menu/zone-config",
                state: 'admin',
            },
            {
                label: "menu.country-config",
                to: "/app/system-menu/country-config",
                state: 'admin',
            },
            /!*{
              label: "menu.exchange-rates",
              to: "/app/system-menu/exchange-rates"
            },*!/
            {
                label: "menu.admin-listing",
                to: "/app/system-menu/admins",
                state: 'admin',
            },
            {
                label: "menu.roles-listing",
                to: "/app/system-menu/roles",
                state: 'admin',
            },
            {
                label: "menu.vendor-listing",
                to: "/app/system-menu/vendors",
                state: 'admin',
            },
            {
                label: "menu.vendor-plans",
                to: "/app/system-menu/plans",
                state: 'admin',
            }
        ]
    },*/
];
export {menudata, adminMenuData, vendorMenuData};
