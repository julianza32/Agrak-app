import React from 'react'
import { Link } from 'wouter'

const Home = () => {
  return (
    <div className='home row justify-content-center align-items-center m-0 p-0'>
      <div className='contenedor col-5 row justify-content-center align-content-center m-0 p-0'>
        <h1 className='text-center'>Agrak - App</h1>
        <button className="btn boton-negro mx-auto mt-4 w-auto">
          <Link className="active text-decoration-none text-white" href="/users">
            Click for see all users
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home