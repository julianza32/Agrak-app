import React from 'react'
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FcCancel, FcCheckmark } from "react-icons/fc";

interface UIconfirm {
    message: string;
    action: Function;
    show: boolean;
    setShow: Function;

}
export const Confirm: React.FC<UIconfirm> = ({ message, show, action, setShow }) => {
    return (
        <>
            <Modal centered show={show} size="sm" onHide={() => setShow(false)}>

                <Modal.Body>
                    <div>
                        <h4 className='text-center'>{message}</h4>
                        <div className='row justify-content-center m-0 p-0 mt-3'>

                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip>
                                    I'm, sure
                                </Tooltip>}
                            >
                                <button onClick={() => {action(); setShow(false);}} className="custom-button mt-2 mt-lg-0 mx-2 boton"><FcCheckmark /></button>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip>
                                    No, cancel
                                </Tooltip>}
                            >
                                <button onClick={() => {setShow(false);}} className="custom-button mt-2 mt-lg-0 mx-2 boton"><FcCancel /></button>
                            </OverlayTrigger>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>)
}
