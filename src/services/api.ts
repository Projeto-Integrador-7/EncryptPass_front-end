import axios from 'axios';
import Router from "next/router";
import { parseCookies } from 'nookies';

const { 'encryptpass.token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'https://encryptpassapi.vercel.app/'
})

// api.interceptors.request.use(config => {
//     console.log(config);

//     return config;
// })

if(token){
    api.defaults.headers['Autorization'] = `Bearer ${token}`;
}