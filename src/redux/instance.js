import axios from "axios";
import { TIMEOUT, SERVER_API_URL } from "./constants";

const instance = axios.create({
  baseURL: SERVER_API_URL + "/people",
  timeout: TIMEOUT
});
export default instance;
