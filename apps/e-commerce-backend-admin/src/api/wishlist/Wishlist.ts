import { Product } from "../product/Product";
import { User } from "../user/User";

export type Wishlist = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  updatedAt: Date;
  user?: User | null;
};
