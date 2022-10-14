import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Smartphones'},
            {id:2, name: 'Refregerators'},
            {id:3, name: 'Noutbooks'},
            {id:4, name: 'TVs'},
        ]

        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
        ]

        this._devices = [
            {id:2, name: 'apple 1', price: 10, rating: 0, img: 'b0f9941a-d7bf-4bbf-a7d7-7a2513bd5442.jpg', typeId: 1, brandId: 2},
            {id:3, name: 'apple 2', price: 20, rating: 0, img: 'd519ec53-9d1f-4657-b606-d0a98da9aa29.jpg', typeId: 1, brandId: 2},
            {id:4, name: 'apple 3', price: 30, rating: 0, img: '75317b2b-660c-46c3-a24e-0967c826e22b.jpg', typeId: 1, brandId: 2},
            {id:5, name: 'apple 4', price: 40, rating: 0, img: '564191e2-add1-431e-9fd3-a0c75db0941f.jpg', typeId: 1, brandId: 2},
            {id:6, name: 'apple 5', price: 50, rating: 0, img: '2b527f78-8d43-40f3-b3f4-13f494d0e09a.jpg', typeId: 1, brandId: 2},
            {id:7, name: 'samsung 1', price: 10, rating: 0, img: '2b40bfe4-b2a5-4fcd-9113-8311cda53e15.jpg', typeId: 1, brandId: 1},
            {id:8, name: 'samsung 2', price: 20, rating: 0, img: '96ecb83d-3a88-4436-bb30-e14a6e96431d.jpg', typeId: 1, brandId: 1},
            {id:9, name: 'samsung 3', price: 30, rating: 0, img: 'c6ca121b-7d5b-4d54-b4f4-c75f7b1341d1.jpg', typeId: 1, brandId: 1},
            {id:10, name: 'samsung 4', price: 40, rating: 0, img: '3142bf20-7f7e-4824-8b8c-cf8f35c36e1c.jpg', typeId: 1, brandId: 1},
            {id:11, name: 'samsung 5', price: 50, rating: 0, img: 'fafedc59-c51c-4018-a1dd-54d6d4c4d409.jpg', typeId: 1, brandId: 1},
        ]

        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        // this.setPage(1)
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }
}