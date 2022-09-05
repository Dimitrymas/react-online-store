import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = false
        this._brands = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    get isAuth () {
        return this._isAuth
    }
    get User () {
        return this._user
    }
}