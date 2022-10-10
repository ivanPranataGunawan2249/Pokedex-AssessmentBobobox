import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarApp from "../Shared/Components/Navbar/NavbarApp";

import PokeRoutes from "./PokeRoutes";

function MainRoutes() {
  return (
    // <div>MainRoutes</div>
    <div className="app">
      <div className="container">
        <NavbarApp />
        <Routes>
          <Route path="/*" element={<PokeRoutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainRoutes;
