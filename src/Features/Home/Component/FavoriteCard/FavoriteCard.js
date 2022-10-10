import React, { useEffect, useState } from "react";
import "./FavoriteCard.scss";
import next from "../../../../Shared/Images/next-icon.png";
import { Link } from "react-router-dom";

function FavoriteCard() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    getFavorite();
  }, []);

  function getFavorite() {
    const favData = JSON.parse(localStorage.getItem("favorite"));

    if (favData === null) {
      setCount(0);
    } else {
      setCount(favData.length);
    }

    // console.log(favData.length, "check data");
  }

  return (
    <Link to={"/favorites"} className="remove-underline">
      <div className="favorite-card">
        <div className="text">
          <p className="text-title">Favorite Pokemon</p>
          <p className="text-count">Owned: {count}</p>
        </div>
        <div className="icon-next">
          <img src={next} alt="next" width={30} />
        </div>
      </div>
    </Link>
  );
}

export default FavoriteCard;
