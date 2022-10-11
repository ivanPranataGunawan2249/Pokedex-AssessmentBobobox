import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardPoke.scss";
import star from "../../Images/star_favorite.png";

function CardPoke(props) {
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const [favorite, setFavorite] = useState();

  useEffect(() => {
    getFavorite();
  }, []);

  function getFavorite() {
    const favData = JSON.parse(localStorage.getItem("favorite"));

    setFavorite(favData);
  }

  return (
    <Link
      to={`/pokemon/detail/${props.data.url.split("/")[6]}`}
      className="link-text"
    >
      <div className="box">
        <div className="box-detail">
          <div className="detail">
            <p className="link-text">No. {props.data.url.split("/")[6]}</p>
            <p className="link-text detail-name">
              {props.data.name}
              {favorite?.map((fav) => {
                if (fav.url.split("/")[6] === props.data.url.split("/")[6]) {
                  return (
                    <span>
                      <img
                        src={star}
                        alt="favorite"
                        width={15}
                        className="favorite-star"
                      />
                    </span>
                  );
                }
              })}
            </p>
          </div>
          <div className="image-section">
            <img
              src={imageUrl + props.data.url.split("/")[6] + ".png"}
              alt="imagePokemon"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardPoke;
