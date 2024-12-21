import React from 'react'
import Signout from './components/signout'
import "./perfil.css"
import Loaduser from './components/loaduser'

const page = ({ params }) => {

  return (
    <>
      <div className="profile-container">
        <Loaduser params={{params}}/>
        <div className="profile-actions">
          <Signout />
          <button>Cambiar Contraseña</button>
        </div>
      </div>
    </>
  )
}

export default page