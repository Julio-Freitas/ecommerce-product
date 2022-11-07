import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Cart from "../cart";
import _S from "./menu.module.scss";

const Menu = () => {
  return (
    <menu className={_S["container"]}>
      <Link to="/">
        <img src={logo} title="logo" alt="blacklogo " />
      </Link>

      <nav>
        <Link to="collections">Collections</Link>
        <Link to="men">Men</Link>
        <Link to="woman">Woman</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>

      <Cart />
    </menu>
  );
};

export default Menu;
