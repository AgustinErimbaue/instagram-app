import React from 'react'
import pedirDatos from '../helpers/PedirDatos'
import Itemlist from '../ItemList/Itemlist'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const [perfiles, setPerfiles] = useState([])

    useEffect(() => {

        pedirDatos()
            .then((res) => {
                setPerfiles(res)
            })

        return () => {

        }
    }, [])

    return (
        <div>
            <Itemlist perfiles={perfiles} />
        </div>
        
    )
}

export default ItemListContainer