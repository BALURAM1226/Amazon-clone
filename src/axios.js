import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://amzon-clone.herokuapp.com/payments/create'
    
});

export default instance;
