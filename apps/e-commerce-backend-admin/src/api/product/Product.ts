import { Order } from "../order/Order";
import { Review } from "../review/Review";
import { Vendor } from "../vendor/Vendor";
import { Wishlist } from "../wishlist/Wishlist";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
  vendor?: Vendor | null;
  wishlists?: Array<Wishlist>;
};
