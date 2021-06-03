import { check } from "k6";

export function commonTestSuite(response) {
  check(response, {
    "response code je 200": (response) => response.status == 200,
  });
}
