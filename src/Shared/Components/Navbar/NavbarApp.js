import React from "react";
import { Link } from "react-router-dom";
import PokeIcon from "../../Images/Pokeball_icon.png";
import GithubIcon from "../../Images/github_icon.png";
import "./NavbarApp.scss";

function NavbarApp() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="navbar-link">
              <img
                src={PokeIcon}
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />{" "}
              Pokedex-Ivan
            </Link>
          </div>
          <div className="d-flex">
            <Link className="navbar-link">
              <img
                src={GithubIcon}
                alt="Logo"
                width="20"
                height="20"
                className="d-inline-block align-text-top"
              />{" "}
              Open in Github
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarApp;
