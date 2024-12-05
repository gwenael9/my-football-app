import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const HOST = "v3.football.api-sports.io";
const KEY = process.env.API_KEY || "";

const apiClient = axios.create({
  baseURL: `https://${HOST}/`,
  headers: {
    "x-rapidapi-key": KEY,
    "x-rapidapi-host": HOST,
    accept: "application/json",
  },
});

export default apiClient;
