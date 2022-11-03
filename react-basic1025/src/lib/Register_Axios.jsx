import axios from "axios";

const registerAxios = axios.create({
    baseURL:'http://localhost:8000',
    withCredentials:true,
    responseType:'json',
})

export default registerAxios;