import { describe } from "https://jslib.k6.io/expect/0.0.5/index.js";
import { check } from "k6";
import http from "k6/http";
import { commonTestSuite } from "../common.js";
import { baseUrl, productId } from "../vals.js";

export function reviewTest() {
  describe("Get product reviews", (t) => {
    console.log(baseUrl + "/1.0/products/" + productId + "/review");
    let response = http.get(baseUrl + "/1.0/products/" + productId + "/review");
    let responseBody = response.json();
    //konkretni testy
    check(responseBody, {
      "reponse body neni prazdne": (responseBody) => responseBody != null,
    });
    //obecne testy
    commonTestSuite(response);

    //pretty print
    let body = JSON.parse(response.body);
    console.log(JSON.stringify(body, null, 2));
  });
}
