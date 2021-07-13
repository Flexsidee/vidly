import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    (error.response.status >= 400) & (error.response.status < 500);
  if (!expectedError) {
    logger.log("Logging Error: ", error);
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});
const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
export default http;
