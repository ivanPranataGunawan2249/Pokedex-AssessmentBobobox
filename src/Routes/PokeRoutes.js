import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../Features/Detail/Detail";
import Favorite from "../Features/Favorite/Favorite";
import Home from "../Features/Home/Home";

function PokeRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon">
          <Route path="detail/:pokemonId" element={<Detail />} />
        </Route>
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default PokeRoutes;
