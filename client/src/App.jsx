import { Route, Routes } from "react-router";

import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/home.jsx";
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx";
import Register from "./components/register/Register.jsx";
import { useState } from "react";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Edit from "./components/edit/Edit.jsx";

function App() {
  const [user, setUser] = useState(null);

  const registerHandler = async (email, password) => {

    const newUser = { email, password };

    const response = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const result = await response.json();

    console.log(result);
    

    setUser(newUser);
  }

  const loginHandler = (email, password) => {
    
    if (!user) {
      throw new Error("No such user!");
    }

    setUser(user);
  }

  const logoutHandler = () => {
    setUser(null);
  }

  return (
    <>
      <Header user={user} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details user={user} />} />
        <Route path="/games/:gameId/edit" element={<Edit />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/register" element={<Register onRegister={registerHandler}/>} />
        <Route path="/login" element={ <Login onLogin={loginHandler} /> } />
        <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
