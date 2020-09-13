import axios from "axios";

//Axios makes it easy to send asynchronous HTTP requests to REST endpoints
//baseURL makes request to movie DB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;