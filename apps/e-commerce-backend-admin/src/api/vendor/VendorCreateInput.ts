import { ProductCreateNestedManyWithoutVendorsInput } from "./ProductCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  email?: string | null;
  isApproved?: boolean | null;
  password?: string | null;
  products?: ProductCreateNestedManyWithoutVendorsInput;
};
