import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

const MAIN_PATH = 'api/user/';

export const registration = async (email, password) => {
    const {data} = await $host.post(MAIN_PATH + 'registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post(MAIN_PATH + 'login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get(MAIN_PATH + 'auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}