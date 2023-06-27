import React from 'react'
import Item from '../Item/Item'


const Itemlist = ({perfiles}) => {
    console.log(perfiles)
  return (
    <div className='Publicaciones'>
        {perfiles.map((perfil) => <Item perfiles={perfil} key={perfil.id} />)}
    </div>
  )
}

export default Itemlist