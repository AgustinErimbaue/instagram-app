import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import LoginForm from './Components/LoginForm/LoginForm';
import { useState } from 'react';
import PerfilContainer from './Components/PerfilContainer/PerfilContainer';
import Reels from './Components/Explorar/Reels';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/perfil" element={<PerfilContainer />} />
              <Route path="/reels" element={<Reels />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
