import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
