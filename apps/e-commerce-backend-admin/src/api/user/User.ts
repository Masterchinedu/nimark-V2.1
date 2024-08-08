import { Order } from "../order/Order";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
