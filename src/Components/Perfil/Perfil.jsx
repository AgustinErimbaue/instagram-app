import React from 'react';
import './Perfil.css';

const Perfil = ({perfilUsuario}) => {
  return (
    <div>
        <h1>Perfil</h1>
        <p>Username: {perfilUsuario.username}</p>
        <p>Name:{perfilUsuario.name}</p>
        <p>Bio:{perfilUsuario.bio}</p>
        <p>Followers:{perfilUsuario.followers}</p>
        <p>Following:{perfilUsuario.following}</p>
    </div>
  )
}

export default Perfil