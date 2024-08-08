import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
