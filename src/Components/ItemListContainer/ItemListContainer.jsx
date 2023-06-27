import React from 'react'
import pedirDatos from '../helpers/PedirDatos'
import Itemlist from '../ItemList/Itemlist'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const [perfiles, setPerfiles] = useState([])
    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() => {

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password')

        if (storedUsername === 'agustin' && storedPassword === '123456') {
            setisLoggedIn(true)
        }

        pedirDatos()
            .then((res) => {
                setPerfiles(res)
            });

        

        return () => {

        }
    }, [])

    return (
        <div>
            {isLoggedIn ? (
                <Itemlist perfiles={perfiles} />) :
                (<h2> Inicia Sesion</h2>)}
        </div>

    )
}

export default ItemListContainer