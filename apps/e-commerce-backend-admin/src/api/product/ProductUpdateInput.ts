import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";
import { WishlistUpdateManyWithoutProductsInput } from "./WishlistUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  vendor?: VendorWhereUniqueInput | null;
  wishlists?: WishlistUpdateManyWithoutProductsInput;
};
