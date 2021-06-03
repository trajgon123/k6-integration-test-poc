import { describe } from "https://jslib.k6.io/expect/0.0.5/index.js";
import { check } from "k6";
import http from "k6/http";
import { commonTestSuite } from "../common.js";
import { baseUrl, productId, setProductID } from "../vals.js";

export function productTest() {
  describe("Get product", (t) => {
    let response = http.get(baseUrl + "/1.0/products/" + productId);
    let responseBody = response.json();
    //konkretni testy
    check(responseBody, {
      "reponse body neni prazdne": (responseBody) => responseBody != null,
      "spravne id produktu": (responseBody) => responseBody.id === productId,
    });
    //obecne testy
    commonTestSuite(response);
    //extract value
    setProductID(responseBody.id);
    //pretty print
    let body = JSON.parse(response.body);
    console.log(JSON.stringify(body, null, 2));
  });

  describe("Get product short", (t) => {
    let response = http.get(baseUrl + "/1.0/products/" + productId + "/short");
    let responseBody = response.json();
    //konkretni testy
    check(responseBody, {
      "reponse body neni prazdne": (responseBody) => responseBody != null,
      "spravne id produktu": (responseBody) => responseBody.id === productId,
    });
    //obecne testy
    commonTestSuite(response);
  });
}
