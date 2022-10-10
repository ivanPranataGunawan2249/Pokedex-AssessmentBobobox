import React from "react";
import FavoriteCard from "./Component/FavoriteCard/FavoriteCard";
import ListPokemon from "./Component/ListPokemon/ListPokemon";
import "./Home.scss";

function Home() {
  return (
    <div className="container-content">
      <FavoriteCard />
      <ListPokemon />
    </div>
  );
}

export default Home;
