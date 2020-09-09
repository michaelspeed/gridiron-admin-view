const menudata = [
    {
        id: "dashboard",
        icon: "fas fa-align-justify",
        label: "menu.dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "fas fa-receipt",
        label: "menu.sales",
        to: "/app/sales-menu",
        subs: [
            {
                icon: "toc",
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
                icon: "iconsminds-jet",
                label: "menu.shipment",
                to: "/app/sales-menu/shipments"
            },
            {
                icon: "iconsminds-handshake",
                label: "menu.billing-agreement",
                to: "/app/sales-menu/billing-agreement"
            },
            {
                icon: "iconsminds-pound-sign-2",
                label: "menu.transaction",
                to: "/app/sales-menu/transaction"
            },
        ]
    },
    {
        id: "catalog",
        icon: "fas fa-database",
        label: "menu.catalog",
        to: "/app/catalog",
        subs: [
            {
                icon: "iconsminds-books",
                label: "menu.products",
                to: "/app/catalog/products"
            },
            {
                icon: "iconsminds-files",
                label: "menu.collections",
                to: "/app/catalog/collections"
            },
            {
                icon: "iconsminds-tag",
                label: "menu.facets",
                to: "/app/catalog/facets"
            },
            {
                icon: "iconsminds-picasa",
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
                icon: "iconsminds-pen",
                label: "menu.stock-mana",
                to: "/app/stocks/stocks-management"
            },
            {
                icon: "iconsminds-magnifi-glass",
                label: "menu.stock-back",
                to: "/app/stocks/stocks-backorders"
            }
        ]
    },
    {
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
        icon: "fas fa-align-justify",
        label: "menu.dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "fas fa-receipt",
        label: "menu.sales",
        to: "/app/sales-menu",
        subs: [
            {
                icon: "toc",
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
                icon: "iconsminds-jet",
                label: "menu.shipment",
                to: "/app/sales-menu/shipments"
            },
            {
                icon: "iconsminds-handshake",
                label: "menu.billing-agreement",
                to: "/app/sales-menu/billing-agreement"
            },
            {
                icon: "iconsminds-pound-sign-2",
                label: "menu.transaction",
                to: "/app/sales-menu/transaction"
            },
        ]
    },
    {
        id: "catalog",
        icon: "fas fa-database",
        label: "menu.catalog",
        to: "/app/catalog",
        subs: [
            {
                icon: "iconsminds-books",
                label: "menu.products",
                to: "/app/catalog/products"
            },
            {
                icon: "iconsminds-files",
                label: "menu.collections",
                to: "/app/catalog/collections"
            },
            {
                icon: "iconsminds-tag",
                label: "menu.facets",
                to: "/app/catalog/facets"
            },
            {
                icon: "iconsminds-picasa",
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
                icon: "iconsminds-pen",
                label: "menu.stock-mana",
                to: "/app/stocks/stocks-management"
            },
            {
                icon: "iconsminds-magnifi-glass",
                label: "menu.stock-back",
                to: "/app/stocks/stocks-backorders"
            }
        ]
    },
    {
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
            }
        ]
    },
    {
        id: "delivery-menu",
        icon: "fas fa-truck-loading",
        label: "menu.delivery",
        to: "/app/delivery-menu",
        subs: [
            {
                icon: "iconsminds-mens",
                label: "menu.delivery-guys",
                to: "/app/delivery-menu/guys"
            },
            {
                icon: "iconsminds-assistant",
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
            /*{
                icon: "iconsminds-server-2",
                label: "menu.pending-reviews",
                to: "/app/content-menu/user-content/pending-reviews"
            },*/
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
            /*{
                label: "menu.store-config",
                to: "/app/stores-menu/store-configuration"
            },*/
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
const vendorMenuData = [
    {
        id: "dashboard",
        icon: "fas fa-align-justify",
        label: "menu.dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "fas fa-receipt",
        label: "menu.sales",
        to: "/app/sales-menu",
        subs: [
            {
                icon: "toc",
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
                icon: "iconsminds-jet",
                label: "menu.shipment",
                to: "/app/sales-menu/shipments"
            },
            {
                icon: "iconsminds-handshake",
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
        icon: "fas fa-database",
        label: "menu.catalog",
        to: "/app/catalog",
        subs: [
            {
                icon: "iconsminds-books",
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
                icon: "iconsminds-picasa",
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
                icon: "iconsminds-pen",
                label: "menu.stock-mana",
                to: "/app/stocks/stocks-management"
            },
            {
                icon: "iconsminds-magnifi-glass",
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
