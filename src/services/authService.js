import http from "./httpService";

const apiEndPoint = "/auth";

export function login(email, password) {
  return http.post(apiEndPoint, { email, password });
}
