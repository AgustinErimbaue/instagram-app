import React from 'react';
import './Perfil.css';
import perfilData from '../data/Perfil';

const Perfil = () => {
  const { username, name, bio, followers, following, profile_picture, recent_posts } = perfilData;

  return (
    <div className="perfil-container">
      <h1>Perfil</h1>
      <img className="foto_usuario" src={profile_picture} alt="" />
      <p className="username">{username}</p>
      <p className="name">{name}</p>
      <p className="bio">{bio}</p>
      <div className="follow">
        <span className="followers">Followers: {followers}</span>
        <span className="following">Following: {following}</span>
      </div>
      <h2>Publicaciones</h2>
      <div className="publicaciones">
        {recent_posts.map((post) => (
          <div key={post.id} className="publicacion">
            <img src={post.image} alt="" />
            <p>{post.caption}</p>
            <div className="post-info">
              <span>Likes: {post.likes}</span>
              <span>Comentarios: {post.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perfil;
