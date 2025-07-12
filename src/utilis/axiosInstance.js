import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "https://mernfullstack-backend-d21l.onrender.com",
  headers: {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export default instance;
