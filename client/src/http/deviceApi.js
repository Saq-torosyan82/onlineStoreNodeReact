import {$authHost, $host} from "./index";

const TYPE_URL = 'api/type'
const BRAND_URL = 'api/brand'
const DEVICE_URL = 'api/device'

export const createType = async (type) => {
    const {data} = await $authHost.post(TYPE_URL, type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get(TYPE_URL)
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post(BRAND_URL, brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get(BRAND_URL, )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post(DEVICE_URL, device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get(DEVICE_URL, {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}