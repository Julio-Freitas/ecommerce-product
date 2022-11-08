import {  useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import Cart from "../cart";
import _S from "./menu.module.scss";

const Menu = () => {
  const location = useLocation();
  const menuActive = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);

  return (
    <menu className={_S["container"]}>
      <Link to="/">
        <img src={logo} title="logo" alt="blacklogo " />
      </Link>

      <nav>
        <Link
          to="collections"
          className={
            _S[menuActive === "/collections" ? "container-active" : ""]
          }
        >
          Collections
        </Link>
        <Link
          to="men"
          className={_S[menuActive === "/men" ? "container-active" : ""]}
        >
          Men
        </Link>
        <Link
          to="woman"
          className={_S[menuActive === "/woman" ? "container-active" : ""]}
        >
          Woman
        </Link>
        <Link
          to="about"
          className={_S[menuActive === "/about" ? "container-active" : ""]}
        >
          About
        </Link>
        <Link
          to="contact"
          className={_S[menuActive === "/contact" ? "container-active" : ""]}
        >
          Contact
        </Link>
      </nav>

      <Cart />
    </menu>
  );
};

export default Menu;
