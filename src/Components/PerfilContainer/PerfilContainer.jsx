import React from 'react'
import { useState, useEffect } from 'react'
import perfilData from '../data/Perfil'

const PerfilContainer = () => {

  const [perfilUsuario, setperfilUsuario] = useState([])

  useEffect(() => {
    setperfilUsuario(perfilData)

  }, [])


  return (
    <div>Perfil</div>
  )
}

export default PerfilContainer