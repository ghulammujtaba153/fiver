import axios from "axios";


const newRequest = axios.create({
  baseURL: "http://localhost:500/api/",
  withCredentials: true,
});

export default newRequest;