import {ProductVariant, ProductVariantPrice} from "~/gql";

export interface OrderCreateInterFace {
    prod: ProductVariant,
    price: ProductVariantPrice,
    quantity: number
}
