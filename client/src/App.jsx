import { Route, Routes } from "react-router";

import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/home.jsx";
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx";
import Register from "./components/register/Register.jsx";

import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Edit from "./components/edit/Edit.jsx";
import UserContext from "./contexts/UserContext.jsx";
import { useContext } from "react";

function App() {
  const {user} = useContext(UserContext);
  return (
    <>
      <Header user={user} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details user={user} />} />
        <Route path="/games/:gameId/edit" element={<Edit />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
