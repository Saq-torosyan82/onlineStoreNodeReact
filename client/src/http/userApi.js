import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

const MAIN_URL = 'api/user/';

export const registration = async (email, password) => {
    const {data} = await $host.post(MAIN_URL + 'registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post(MAIN_URL + 'login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get(MAIN_URL + 'auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}