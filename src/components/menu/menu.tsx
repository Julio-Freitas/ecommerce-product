import { useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import iconMenu from "../../assets/images/icon-menu.svg";

import Cart from "../cart";
import _S from "./menu.module.scss";
import { useOnClickOutside } from "./hooks/useOnClickOutside";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const refmenu = useRef<HTMLDivElement | null>(null);

  const eventHandler = (value: boolean, fn: (value: boolean) => void) =>
    !value && fn(value);

  useOnClickOutside({
    element: refmenu,
    handler: (value) => eventHandler(value as boolean, setShowMenu),
  });

  const menuActive = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);

  return (
    <>
      <menu className={_S["container"]} >
        <Link to="/" className={_S["logo-mobile"]}>
          <img src={logo} title="logo" alt="blacklogo" />
        </Link>

        <div ref={refmenu}>
          <button
            onClick={(e) => setShowMenu(!showMenu)}
            type="button"
            className={_S["button-nav-mobile"]}
            data-target="#menu-mobile"
          >
            <img src={iconMenu} title="logo" alt="menu" />
          </button>

          <nav className={_S[showMenu ? "-mobile" : ""]} id="#menu-mobile">
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
              className={
                _S[menuActive === "/contact" ? "container-active" : ""]
              }
            >
              Contact
            </Link>
          </nav>
        </div>
        <Cart />
      </menu>
      {showMenu && <div className={_S["overlay"]} />}
    </>
  );
};

export default Menu;
