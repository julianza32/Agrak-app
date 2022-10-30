import {FC, useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap'
import React from 'react';

interface Props {
    setAvatar: Function;
    setShow: Function;
    show: boolean
}
interface avatar {
    url: string
}

export const ListAvatars: FC<Props> = ({ setAvatar, setShow, show }) => {
    const [listAvatars, setListAvatars] = useState<avatar[]>([])
    const hide = () => { setShow(false) }
    useEffect(() => {
        listarAvatars();
    }, [])

    const listarAvatars = () => {
        let list = [];
        for (let index = 1; index < 25; index++) {
            list.push({
                url: `https://robohash.org/${index}`
            })
        }
        setListAvatars(list)
        console.log(listAvatars);

    }
    return (
        <>
            <Modal show={show}  size="lg" onHide={() => setShow(false)}>

                <Modal.Body>
                    <div className='d-flex flex-wrap flex-row justify-content-around overflow-scroll'>

                        {listAvatars.map((item: avatar, index: number) => [
                            <div className="avatar m-2" onClick={() => { setAvatar(item.url); setShow(false) }} style={{ backgroundImage: `url("${item.url}")` }}></div>
                        ])}
                    </div>

                </Modal.Body>
            </Modal>
        </>

    )
}
