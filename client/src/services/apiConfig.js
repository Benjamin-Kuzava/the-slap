import axios from "axios";

let apiURL;

const apiURL = {
  production: "https://the-slap-ruby.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiURL = api.development;
} else {
  apiURL = apiURL.production;
}

const api = axios.create({
  baseURL: apiURL,
});

export default api;
