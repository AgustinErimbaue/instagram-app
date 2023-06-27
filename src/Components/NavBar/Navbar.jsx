import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='NavbarContainer'>
            <img className='Imagen_Nav' src="/assets/instagram.png" alt="" />
            <h3>Instagram</h3>
            <div className='Navbar'>
                <ul className='Ul_Nav'>
                    <li className='NavLink'>
                        <a href="#">
                            <img
                                src="/assets/inicio.jpg"
                                alt="imagen de home"
                            />
                            Inicio
                        </a>
                    </li>
                    <li className='NavLink'>

                        <a href="#">
                            <img src="/assets/globo.png"
                                alt="Imagen de mundo" />
                            Explorar
                        </a>
                    </li>
                    <li className='NavLink'>

                        <a href="#">
                            <img src="/assets/boton-de-notificaciones.png" alt="imagen notificaciones" />
                            Notificaciones
                        </a>
                    </li>
                    <li className='NavLink'>

                        <a href="#">
                            <img src="/assets/lupa.png" alt="imagen de busqueda" />
                            Busqueda
                        </a>
                    </li>
                    <li className='NavLink'>

                        <a href="#">
                            <img src="assets/usuario.png" alt="usuario" />
                            Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar