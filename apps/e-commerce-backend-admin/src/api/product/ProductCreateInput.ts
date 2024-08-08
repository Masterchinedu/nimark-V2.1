import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";
import { WishlistCreateNestedManyWithoutProductsInput } from "./WishlistCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  vendor?: VendorWhereUniqueInput | null;
  wishlists?: WishlistCreateNestedManyWithoutProductsInput;
};
