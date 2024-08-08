import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isApproved?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
};
