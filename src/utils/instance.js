import axios from "axios";

import { SERVER_API_URL } from "./constants";

export default axios.create({
  baseURL: SERVER_API_URL
});
