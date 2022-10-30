import { Observable } from "rxjs"
import api from "./axios"
import { iUser } from "../models/interfaceUser"
const get_users = (): Observable<iUser[]> => {
    return api.get('/users');
}
const get_user = (id: string): Observable<iUser> => {
    return api.get(`/users/${id}`)
}

const create_user = (user: iUser): Observable<iUser> => {
    return api.post("/users", user)
}

const update_user = (user: iUser): Observable<any> => {
    return api.put(`/users/${user.id}`, user);
}

const delete_user = (id: string): Observable<any> => {
    return api.deleter(`/users`, id)
}

export default {get_users,get_user,create_user,update_user,delete_user}