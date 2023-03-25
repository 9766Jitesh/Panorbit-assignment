import axios from "axios";

// ---------- get profile ---------
export const fetchProfile = () => {
  return axios.get("https://panorbit.in/api/users.json");
};


