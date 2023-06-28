import React, { useState } from 'react';
import './Item.css';

const Item = ({ perfiles }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (nuevoComentario.trim() !== '') {
      const updatedComentarios = [
        ...comentarios,
        {
          comentario: nuevoComentario,
          nombre: 'Agustin',
          fotoPerfil: '/assets/YoPerfil.jpg'
        },
      ];
      setComentarios(updatedComentarios);
      setNuevoComentario('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCommentSubmit();
    }
  };

  return (
    <div className='publicacion'>
      <div className="perfil">
        <img className="FotoPerfil" src={perfiles.photoPerfil} alt="Foto de perfil" />
        <h5 className='Nombre'>{perfiles.name}</h5>
      </div>
      <div className="post" onDoubleClick={handleLikeClick}>
        <img className="FotoPost" src={perfiles.photoPost} alt="Foto del post" />
        <p className='Post'>{perfiles.post}</p>
        <img
          className={`Corazon ${isLiked ? 'active' : ''}`}
          src="./assets/like.png"
          alt="Corazón"
        />
        <img className='ComentarioIcono' src="./assets/comentario.png" alt="Comentarios" onClick={handleCommentSubmit} />
        <img className='CompartirIcono' src="./assets/compartir.png" alt="Compartir" />
        <input
          className='nuevoComentario'
          type="text"
          value={nuevoComentario}
          onChange={handleCommentChange}
          onKeyPress={handleKeyPress}
          placeholder="Escribe un comentario"
        />
      </div>
      <div className="comentarios">
        {comentarios.map((comentario, index) => (
          <div key={index} className="Comentario">
            <img className='FotoPerfilComentario' src={comentario.fotoPerfil} alt="Foto de perfil" />
            <p className='NombreComentario'>{comentario.nombre}</p>
            <p className='TextoComentario'>{comentario.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
