import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

import "./root.scss";

const Root = ({ children }) => {
  return (
    <>
      <header>
        <img className="logo" src="img/logo.png" alt="Logo KS-MONT" />
        <nav className="navigation">
          <ul className="list">
            <li>
              <Link to="/" className="link">
                <span className="icon">
                  <IoMdHome />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <span className="text">O Nas</span>
              </Link>
            </li>
          </ul>
          <img className="photo" src="img/something.png" alt="zdjęcie Karola" />
          <div className="contact">
            <Link className="phone" to="tel:+48669311319">
              +48 669 311 319
            </Link>
            <Link className="email" to="mailto:kar.switala@gmail.com">
              kar.switala@gmail.com
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p className="copyright">&copy; 2024 KS-MONT Karol Świtała. Wszelkie prawa zastrzeżone.</p>
        <Link to="/" className="link">
          <span className="facebook">
            <FaFacebook />
          </span>
        </Link>
        <Link to="/" className="link">
          <span className="instagram">
            <FaInstagram />
          </span>
        </Link>
        <Link to="/" className="link">
          <span className="tiktok">
            <FaTiktok />
          </span>
        </Link>
      </footer>
    </>
  );
};

export default Root;
