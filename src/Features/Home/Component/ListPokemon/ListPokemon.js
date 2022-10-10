import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { getPokemon } from "../../../../Services/PokeApi/Pokemon";
import CardPoke from "../../../../Shared/Components/CardPoke/CardPoke";
import "./ListPokemon.scss";

function ListPokemon() {
  const [dataPoke, setDataPoke] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getListPokemon(offset);
  }, [offset]);

  async function getListPokemon(pagination) {
    console.log(pagination);
    getPokemon(pagination)
      .then((res) => {
        // console.log(res, "berhasil dapat pokemon");
        setDataPoke(res.data.results);
      })
      .catch((err) => {
        console.log(err, "gagal dapat pokemon");
      });
  }

  function backPage() {
    setOffset(offset - 20);
  }

  function nextPage() {
    // setOffset(offset + 20);
    setOffset(offset + 20);
  }

  // console.log(dataPoke, "berhasil");

  return (
    <div className="conteiner-list">
      <Row>
        {dataPoke.map((data, id) => {
          return (
            <Col md={6} key={id}>
              <CardPoke data={data} id={id} />
            </Col>
          );
        })}
      </Row>

      <div className="button-page">
        <Button
          onClick={backPage}
          className="button-size"
          disabled={offset === 0}
        >
          {"<"}
        </Button>
        <Button onClick={nextPage} className="button-size">
          {">"}
        </Button>
      </div>
    </div>
  );
}

export default ListPokemon;
