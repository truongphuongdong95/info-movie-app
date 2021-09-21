import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="mastfoot my-auto bg-dark">
        <div className="inner">
          <p className="text-light">
            InfoMovieApp Dev for <Link to="" id="imdb-logo">DongTruong</Link>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
