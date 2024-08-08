import { Product } from "../product/Product";

export type Vendor = {
  createdAt: Date;
  email: string | null;
  id: string;
  isApproved: boolean | null;
  password: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
