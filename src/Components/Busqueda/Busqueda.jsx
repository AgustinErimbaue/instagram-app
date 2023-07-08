import React, { useState } from 'react';
import Usuario from '../data/Usuario';
import './Busqueda.css';

const Busqueda = () => {
  const [searchUsuario, setSearchUsuario] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchUsers = () => {
    const results = Usuario.filter(user =>
      user.name.toLowerCase().includes(searchUsuario.toLowerCase().trim())
    );
    setSearchResult(results);
  };

  const clearSearch = () => {
    setSearchUsuario('');
    setSearchResult([]);
  };

  const handleChange = (e) => {
    setSearchUsuario(e.target.value);
    searchUsers();
  };

  return (
    <div className="BusquedaContainer">
      <input
        type="text"
        value={searchUsuario}
        onChange={handleChange}
        className="BusquedaInput"
        placeholder="Buscar usuario..."
      />
      {searchResult.length > 0 && (
        <div className="ResultadosContainer">
          {searchResult.map(user => (
            <div className="ResultadoUsuario" key={user.id}>
              <img src={user.photoPerfil} alt={user.name} />
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      )}
      {searchUsuario.length > 0 && (
        <button className="ClearButton" onClick={clearSearch}>
          Limpiar búsqueda
        </button>
      )}
    </div>
  );
};

export default Busqueda;
