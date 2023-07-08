import React from 'react';
import { NavLink } from 'react-router-dom';
import Busqueda from '../Busqueda/Busqueda';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="NavbarContainer">
      <img className="Imagen_Nav" src="/assets/instagram.png" alt="" />
      <h3>Instagram</h3>
      <div className="Navbar">
        <ul className="Ul_Nav">
          <li className="NavLink">
            <NavLink to="/" activeClassName="activeNavLink" exact>
              <img src="/assets/inicio.jpg" alt="imagen de home" />
              Inicio
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink to="/Reels" activeClassName="activeNavLink">
              <img src="/assets/globo.png" alt="Imagen de mundo" />
              Reels
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink to="/notificaciones" activeClassName="activeNavLink">
              <img src="/assets/boton-de-notificaciones.png" alt="imagen notificaciones" />
              Notificaciones
            </NavLink>
          </li>
          <li className="NavLink">
            <NavLink to="/perfil" activeClassName="activeNavLink">
              <img src="assets/usuario.png" alt="usuario" />
              Perfil
            </NavLink>
          </li>
          <li className="NavLink">
            <Busqueda />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
