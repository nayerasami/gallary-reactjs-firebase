import axios from "axios";


const API_KEY =import.meta.env.VITE_API_KEY
const baseURL =import.meta.env.VITE_API_URL

export const axiosInstance =new axios.create({
baseURL,
headers:{
    Authorization: API_KEY
}
})


