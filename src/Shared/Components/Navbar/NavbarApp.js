import React from "react";
import { Link } from "react-router-dom";
import PokeIcon from "../../Images/Pokeball_icon.png";
import GithubIcon from "../../Images/github_icon.png";
import "./NavbarApp.scss";

function NavbarApp() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to={"/home"} className="navbar-link">
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
            <Link
              className="navbar-link"
              onClick={() =>
                openInNewTab(
                  "https://github.com/ivanPranataGunawan2249/pokedex-assessment-bobobox"
                )
              }
            >
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
