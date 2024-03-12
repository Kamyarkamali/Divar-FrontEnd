import axios from "axios";

const BASE_URL: string = "http://localhost:3400";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
