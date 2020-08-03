
const menudata = [
    {
        id: "dashboard",
        icon: "dashboard",
        label: "Dashboard",
        to: "/app/dashboard",
    },
    {
        id: "sales-menu",
        icon: "receipt",
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
            {
                icon: "note_add",
                label: "menu.credit-memo",
                to: "/app/sales-menu/credit-memo"
            },
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
        id: "catalog-menu",
        icon: "toc",
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
        id: "stocks-management",
        label: "menu.stock-management",
        icon: 'insights',
        to: "/app/marketing-menu/seo-search",
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
        icon: "supervisor_account",
        label: "menu.customers",
        to: "/app/customers-menu",
        subs: [
            {
                icon: "iconsminds-mens",
                label: "menu.allsustomers",
                to: "/app/customers-menu/allustomers"
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
    {
        id: "marketing-menu",
        icon: "speaker",
        label: "menu.promotions",
        to: "/app/marketing-menu",
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
        ]
    },
    {
        id: "marketing-communications",
        label: "menu.communication",
        icon: "call_split",
        to: "/app/marketing-menu/communication",
        subs: [
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
    },
    {
        id: "marketing-seo-search",
        label: "menu.seo-search",
        icon: 'find_in_page',
        to: "/app/marketing-menu/seo-search",
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
        id: "marketing-user-content",
        label: "menu.user-content",
        icon: 'face',
        to: "/app/marketing-menu/user-content",
        subs: [
            {
                icon: " iconsminds-power-cable",
                label: "menu.all-reviews",
                to: "/app/marketing-menu/user-content/all-reviews"
            },
            {
                icon: "iconsminds-server-2",
                label: "menu.pending-reviews",
                to: "/app/marketing-menu/user-content/pending-reviews"
            }
        ]
    },
    {
        id: "content-menu",
        icon: "g_translate",
        label: "menu.content",
        to: "/app/content-menu",
        subs: [
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
            {
                icon: "iconsminds-record",
                label: "menu.widget",
                to: "/app/content-menu/elements/widget"
            },
            {
                icon: "iconsminds-receipt-4",
                label: "menu.menu-builder",
                to: "/app/content-menu/design/menubuilder"
            },
            {
                icon: "iconsminds-bowling",
                label: "menu.schedule",
                to: "/app/content-menu/design/schedule"
            }
            ]
    },
    {
        id: "stores-menu",
        icon: "store_mall_directory",
        label: "menu.stores",
        to: "/app/stores-menu",
        subs: [
            {
                label: "menu.channels",
                to: "/app/stores-menu/channels"
            },
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
        icon: "settings",
        label: "menu.system",
        to: "/app/system-menu",
        subs: [
            {
                label: "menu.system-config",
                to: "/app/system-menu/system-config"
            },
            {
                label: "menu.zone-config",
                to: "/app/system-menu/zone-config"
            },
            {
                label: "menu.country-config",
                to: "/app/system-menu/country-config"
            },
            {
                label: "menu.exchange-rates",
                to: "/app/system-menu/exchange-rates"
            },
        ]
    },
    {
        id: "administrator-menu",
        icon: "how_to_reg",
        label: "menu.administrator",
        to: "/app/administrator-menu",
        subs: [
            {
                label: "menu.admin-listing",
                to: "/app/administrator-menu/admins"
            },
            {
                label: "menu.roles-listing",
                to: "/app/administrator-menu/roles"
            },
            {
                label: "menu.vendor-listing",
                to: "/app/administrator-menu/vendors"
            },
            {
                label: "menu.vendor-plans",
                to: "/app/administrator-menu/plans"
            }
        ]
    },
];
export default menudata;
