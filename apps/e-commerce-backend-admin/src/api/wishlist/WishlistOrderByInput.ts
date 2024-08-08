import { SortOrder } from "../../util/SortOrder";

export type WishlistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
