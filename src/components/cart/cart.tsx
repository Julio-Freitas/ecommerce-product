import iconCart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import _S from './cart.module.scss'
export const Cart = () => (
  <div className={_S['cart']}>
    <img src={iconCart}  className={_S['-icon'] }title="card" alt="icon cart" />
    <img src={avatar}  className={_S['-avatar'] } title="Avatar" alt="icon avatar" />
  </div>
);
