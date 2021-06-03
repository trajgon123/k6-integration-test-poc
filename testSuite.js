import { group } from "k6";
import { productTest } from "./section/product.js";
import { reviewTest } from "./section/review.js";

export default function () {
  group("Product test", function () {
    productTest();
  });
  group("Review test", function () {
    reviewTest();
  });
}
