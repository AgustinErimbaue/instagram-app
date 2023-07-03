import React from 'react'
import { useState, useEffect } from 'react'
import perfilData from '../data/Perfil'
import Perfil from '../Perfil/Perfil'

const PerfilContainer = () => {

  const [perfilUsuario, setperfilUsuario] = useState([])

  useEffect(() => {
    setperfilUsuario(perfilData)

  }, [])


  return (
    <div>
      <Perfil perfilUsuario={perfilUsuario} />
    </div>
  )
}

export default PerfilContainer