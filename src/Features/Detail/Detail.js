import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonDetail } from "../../Services/PokeApi/Pokemon";
import "./Detail.scss";
import star from "../../Shared/Images/star_favorite.png";

function Detail() {
  const params = useParams();
  const [detail, setDetail] = useState();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    getDetail();
  }, []);

  useEffect(() => {
    getFavorite();
  }, []);

  function getFavorite() {
    const favData = JSON.parse(localStorage.getItem("favorite"));

    if (favData !== null) {
      favData.map((data) => {
        if (data.url.split("/")[6] === params.pokemonId) {
          setIsFav(true);
        }
      });
    } else {
      setIsFav(false);
    }
  }

  async function getDetail() {
    getPokemonDetail(params.pokemonId)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err, "gagal dapat pokemon");
      });
  }

  function setFavorite() {
    const dataFav = [];
    const prevData = JSON.parse(localStorage.getItem("favorite"));
    if (!prevData) {
      const data = {
        name: detail.name,
        url: "https://pokeapi.co/api/v2/pokemon/" + params.pokemonId + "/",
      };
      dataFav.push(data);
    } else {
      const data = {
        name: detail.name,
        url: "https://pokeapi.co/api/v2/pokemon/" + params.pokemonId + "/",
      };
      //   dataFav.push(prevData);
      prevData.map((data) => {
        dataFav.push(data);
      });
      dataFav.push(data);
    }
    localStorage.setItem("favorite", JSON.stringify(dataFav));
    window.location.reload();
  }

  function deleteFavorite() {
    const favData = JSON.parse(localStorage.getItem("favorite"));

    const myArray = favData.filter(function (obj) {
      return obj.url.split("/")[6] !== params.pokemonId;
    });
    console.log(myArray, "delete data fav");

    localStorage.setItem("favorite", JSON.stringify(myArray));
    window.location.reload();
  }

  console.log(detail);

  return (
    <div className="detail">
      <div className="center">
        <img
          src={detail?.sprites?.other?.dream_world?.front_default}
          className="detail-image"
          alt="pokemon"
        />
      </div>
      <div className="detail-text">
        <p className="pokemon-name">
          {params.pokemonId}. {detail?.name}
          {isFav && (
            <span>
              <img
                src={star}
                alt="favorite"
                width={15}
                className="favorite-star"
              />
            </span>
          )}
        </p>
        <div className="detail-type">
          <div className="type">
            <p>Types</p>
          </div>
          {detail?.types.map((tipe) => {
            return (
              <div className="type-box" key={tipe.type.name}>
                <p className="type-text">{tipe.type.name}</p>
              </div>
            );
          })}
        </div>
        <div className="detail-type">
          <div className="ability-title">
            <p>Ability:</p>
          </div>
          {detail?.abilities.map((abilities) => {
            return (
              <div className="ability-list" key={abilities.ability.name}>
                <p>{abilities.ability.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {isFav ? (
        <button
          className="btn btn-danger"
          type="button"
          onClick={deleteFavorite}
        >
          Release Pokemon
        </button>
      ) : (
        <button className="btn btn-primary" type="button" onClick={setFavorite}>
          Catch Pokemon
        </button>
      )}
      <Link to={"/home"}>
        <button className="btn btn-secondary mt-3" type="button">
          Go Back
        </button>
      </Link>
    </div>
  );
}

export default Detail;
