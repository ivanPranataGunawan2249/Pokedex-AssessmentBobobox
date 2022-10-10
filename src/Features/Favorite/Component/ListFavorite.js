import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardPoke from "../../../Shared/Components/CardPoke/CardPoke";
import "./ListFavorite.scss";

function ListFavorite() {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    getFavorite();
  }, []);

  function getFavorite() {
    const favData = JSON.parse(localStorage.getItem("favorite"));

    // console.log(favData.length, "check data");

    setFavorite(favData);
  }

  // console.log(favorite.length, "get favorite");

  return (
    // <div>akjdnwakjndskjns</div>
    <>
      {favorite && favorite?.length > 0 ? (
        <>
          <Row>
            {favorite?.map((data, id) => {
              return (
                <Col md={6} key={id}>
                  <CardPoke data={data} id={id} />
                </Col>
              );
            })}
          </Row>
          <Link to={"/home"}>
            <button className="btn btn-secondary mt-3" type="button">
              Go Back
            </button>
          </Link>
        </>
      ) : (
        <div className="empty">
          <p className="empty-text">Pokemon Favorit Anda kosong.</p>
          <p className="empty-subtext">Silahkan Tangkap Pokemon Anda.</p>
          <Link to={"/home"}>
            <button className="btn btn-secondary mt-3" type="button">
              Go Back
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ListFavorite;
