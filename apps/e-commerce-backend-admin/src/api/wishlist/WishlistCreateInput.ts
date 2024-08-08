import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistCreateInput = {
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
