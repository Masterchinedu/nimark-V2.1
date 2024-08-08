import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type VendorWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isApproved?: BooleanNullableFilter;
  password?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
