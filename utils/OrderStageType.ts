export enum OrderStageType {
    CREATED = "CREATED",
    PACKAGED = "PACKAGED",
    PROCESSED = "PROCESSED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    RETURNINITIATED = "RETURNINITIATED",
    RETURNED = "RETURNED",
    RETURNEDREFUNDED = "RETURNEDREFUNDED"
}

export enum PricePromoType {
    FLAT = "FLAT",
    PERCENTAGE = "PERCENTAGE"
}

export function checkOrderProgress(stage: OrderStageType) {
    switch (stage) {
        case 'CREATED': {
            return 20
        }
            break;
        case 'PACKAGED': {
            return 40
        }
            break;
        case 'PROCESSED': {
            return 60
        }
            break;
        case 'SHIPPED': {
            return 80
        }
            break;
        case 'DELIVERED': {
            return 100
        }
            break;
        case 'RETURNINITIATED': {
            return 30
        }
            break;
        case 'RETURNED': {
            return 90
        }
            break;
        case 'RETURNEDREFUNDED': {
            return 100
        }
            break;
        default: {
            return 10
        }
    }
}
