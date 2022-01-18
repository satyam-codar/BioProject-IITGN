import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  // baseURL: "https://hidden-ridge-05396.herokuapp.com/search",
  headers: {
    "Content-type": "application/json",
  },
});
