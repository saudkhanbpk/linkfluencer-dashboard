import axios from "axios";

export const fetchCountyByIp = () => {
  try {
    return axios.get("https://ipapi.co/json/");
  }
  catch (error) {
    return null;
  }
}