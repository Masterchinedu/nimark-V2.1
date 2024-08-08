import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
