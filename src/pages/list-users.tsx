import React, { useEffect, useState } from "react";
import { iUser } from "../models/interfaceUser";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import serviceUser from "../axios/servicesUser";
import { setUsers } from "../store/userSlice";
import { BsPencilSquare } from "react-icons/bs";
import { useLocation } from "wouter";
import PuffLoader from "react-spinners/PuffLoader";

const ListUser: React.FC = () => {

    const listUsers = useAppSelector((state) => state.userSlice.list_users)
    const [location, setLocation] = useLocation()
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLoading(true)
        getUsers();
    }, [])

    const getUsers = () => {
        serviceUser.get_users()
            .subscribe((resp: iUser[]) => {
                dispatch(setUsers(resp));
                setLoading(false)
            })
    }
    const navigate = (rute: string) => {
        setLocation(`/user/${rute}`)
    }

    return (
        <div className="d-flex flex-column flex-md-row flex-md-wrap pt-4 justify-content-md-start">
            {listUsers.map((element: iUser) =>
                <div className="tarjeta p-3 col-md-3 col-9 mx-lg-5 mx-auto my-lg-4 my-4 d-flex flex-column">
                    <div className="avatar" style={{ backgroundImage: `url("${element.avatar}")` }}></div>

                    <b className="text-center h4 mt-4">{element.first_name} {element.second_name}</b>
                    <p className="text-center text-muted">{element.email}</p>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <button onClick={() => navigate(element.id)} className="btn boton">Editar <BsPencilSquare /></button>
                    </div>
                </div>
            )}
            <div className="w-100 d-flex justify-content-center">
                <PuffLoader
                    color="#292828"
                    loading={loading}
                    size={500}
                />
            </div>




        </div>
    )
}
export default ListUser