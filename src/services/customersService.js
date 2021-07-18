import http from "./httpService";

export function getCustomers() {
  return http.get("/allUsers");
}
