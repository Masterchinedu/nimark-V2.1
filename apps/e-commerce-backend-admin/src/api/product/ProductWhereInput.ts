import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  vendor?: VendorWhereUniqueInput;
  wishlists?: WishlistListRelationFilter;
};
