import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { BsArrowLeftShort, BsFillPersonPlusFill } from "react-icons/bs"
import { FaUserEdit, FaUserMinus } from "react-icons/fa";
import serviceUser from "../axios/servicesUser";
import { iUser } from "../models/interfaceUser";
import { ListAvatars } from "../shared/listAvatars"
import { useLocation } from 'wouter';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PuffLoader from "react-spinners/PuffLoader";
import { Confirm } from "../shared/confirm";
import servicesUser from "../axios/servicesUser";
import Swal from 'sweetalert2'
interface iUIUser {
    id: string | null;
}

const CreateUser: React.FC<iUIUser> = (id) => {
    const { register, formState: { errors }, handleSubmit, setValue, getValues } = useForm<iUser>();
    const [avatar, setAvatar] = useState("");
    const [modal, setShow] = useState(false);
    const [modal2, setShow2] = useState(false);
    const [location, setLocation] = useLocation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        id.id ? getUser(id.id) : setLoading(false);
    }, [])


    const getUser = async (id: string) => {
        setLoading(true);
        await serviceUser.get_user(id)
            .subscribe((resp: iUser) => {
                loadForm(resp);
                setLoading(false)
            })
    }
    const loadForm = (user: iUser) => {
        console.log(user);

        if (user) {
            setAvatar(user.avatar)
            setValue('id', user.id);
            setValue('first_name', user.first_name);
            setValue('second_name', user.second_name);
            setValue('email', user.email);

        }

    }

    const submit: SubmitHandler<iUser> = (data: iUser) => {
        if (avatar === "") {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: 'Select an avatar'
            })
        } else {
            data.avatar = avatar
            id.id ? edit(data) : create(data);
        }
    }

    const create = (data: iUser) => {
        serviceUser.create_user(data).subscribe((resp: any) => {
            setLocation('/users')
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Success'
            })
        })
    }
    const edit = (data: iUser) => {
        serviceUser.update_user(data).subscribe((resp: any) => {
            setLocation('/users')
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Success'
            })
        })
    }
    const delete_u = () => {
        if (id.id) {
            servicesUser.delete_user(id.id)
                .subscribe((resp) => {
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'success',
                        title: 'Success'
                    })

                    setLocation('/users');

                })
        }

    }

    const navigate = () => {
        setLocation('/users')

    }
    return (
        <div className="w-100 d-flex flex-wrap flex-row justify-content-center p-5 p-lg-0">
            <div className="w-100 d-flex justify-content-center">
                <PuffLoader
                    color="#292828"
                    loading={loading}
                    size={500}
                />
            </div>

            {loading == false &&
                <div className="col-md-5 col-12 contenedor-form mt-4">
                    <form className="w-100 fields" onSubmit={handleSubmit(submit)} >
                        <div className="fields d-flex flex-column">
                            <div className="w-100 mt-5">
                                <div className="avatar" onClick={() => setShow(true)} style={{ backgroundImage: `url("${avatar}")` }}></div>
                                {modal ? <ListAvatars setAvatar={setAvatar} setShow={setShow} show={modal} /> : ''}

                            </div>
                            <div className="control mx-auto col-lg-10 col-12 mt-5 my-2 ">
                                <input type="text" autoComplete="off" className="w-100 px-4" placeholder="First name" id="" defaultValue={getValues('first_name')}
                                    {...register("first_name", { required: true })} />

                            </div>
                            {errors.first_name &&
                                <span className="text-danger col-lg-10 col-12 mx-auto ">
                                    First name is required
                                </span>
                            }
                            <div className="control mx-auto col-lg-10 col-12  my-2">
                                <input type="text" autoComplete="off" className="w-100 px-4" placeholder="Second name" id="" defaultValue={getValues('second_name')}
                                    {...register("second_name", { required: true })} />

                            </div>
                            {errors.second_name &&
                                <span className="text-danger col-lg-10 col-12 mx-auto ">
                                    Second name is required
                                </span>
                            }
                            <div className="control mx-auto col-lg-10 col-12  my-2">
                                <input type="text" autoComplete="off" className="w-100 px-4" placeholder="Email" id="" defaultValue={getValues('email')}
                                    {...register("email", {
                                        required: "Email name is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: 'Email invalid'
                                        }
                                    })} />
                            </div>
                            {errors.email &&
                                <span className="text-danger col-lg-10 col-12 mx-auto ">
                                    {errors.email.message}
                                </span>
                            }

                            <div className="row justify-content-center m-0 p-0 mt-5">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>
                                        Back
                                    </Tooltip>}
                                >
                                    <button type="button" onClick={() => navigate()} className="custom-button mt-2 mt-lg-0 mx-2 boton"><BsArrowLeftShort /></button>
                                </OverlayTrigger>
                                {id.id &&
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>
                                            Edit user
                                        </Tooltip>}
                                    >
                                        <button type="submit" className="custom-button mt-2 mt-lg-0 mx-2 boton"><FaUserEdit /></button>
                                    </OverlayTrigger>
                                }



                                {id.id &&
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>
                                            Delete user
                                        </Tooltip>}
                                    >
                                        <button type="button" onClick={() => { setShow2(true) }} className="custom-button mt-2 mt-lg-0 mx-2 boton"><FaUserMinus /></button>
                                    </OverlayTrigger>
                                }
                                {!id.id &&
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>
                                            Save user
                                        </Tooltip>}
                                    >
                                        <button type="submit" className="custom-button mt-2 mt-lg-0 mx-2 boton"><BsFillPersonPlusFill /></button>
                                    </OverlayTrigger>

                                }
                                {modal2 ? <Confirm message="You are sure?" setShow={setShow2} show={modal2} action={delete_u} /> : ''}

                            </div>
                        </div>

                    </form>
                </div>
            }

        </div>
    )
}
export default CreateUser