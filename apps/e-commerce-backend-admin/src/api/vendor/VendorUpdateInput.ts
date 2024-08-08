import { ProductUpdateManyWithoutVendorsInput } from "./ProductUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  email?: string | null;
  isApproved?: boolean | null;
  password?: string | null;
  products?: ProductUpdateManyWithoutVendorsInput;
};
