import React, { useEffect } from "react"
import { Link, useLocation } from "wouter";
import { BsFillHouseFill, BsFillPersonPlusFill } from 'react-icons/bs';


const Navbar: React.FC = () => {

    const [location, setLocation] = useLocation()


    return (
        <nav className="navbar d-flex flex-row flex-wrap w-100">
            {location != '/' &&
                <h1 className="w-auto mx-3">Agrak App</h1>
            }
            <div className="w-auto">
                {location == '/users' &&
                    <button className="btn boton-negro mx-5">
                        <Link className="active text-decoration-none text-white" href="/user">
                            New user <BsFillPersonPlusFill />
                        </Link>
                    </button>}
                {location != '/' &&
                    <button className="btn boton-negro mx-5">
                        <Link className="active text-decoration-none text-white" href="/">
                            Home <BsFillHouseFill />
                        </Link>
                    </button>
                }
            </div>
        </nav >
    )
}
export default Navbar