export const ITEMS_PER_PAGE = 10;
export function discountedPrice(item){
    return Math.round(item.price*(1-item.discountPercentage/100),2)
}
