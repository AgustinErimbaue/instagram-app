import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import LoginForm from './Components/LoginForm/LoginForm';
import {useState} from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar />
          <ItemListContainer />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;