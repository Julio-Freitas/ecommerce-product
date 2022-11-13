import { useRef, useState } from "react";
import iconCart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import iconDelete from "../../assets/images/icon-delete.svg";
import { useCart } from "../../context/cartProvider/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import _S from "./cart.module.scss";
import Button from "../button";
import { useOnClickOutside } from "../menu/hooks/useOnClickOutside";

export const Cart = () => {
  const refCart = useRef<HTMLDivElement | null>(null);
  useOnClickOutside({
    element: refCart,
    handler: (clickoutside) => !clickoutside && setShowInfo(false),
  });

  const [showInfo, setShowInfo] = useState(false);
  const { amount, product, total, removeItemCard } = useCart();

  return (
    <div className={_S["cart"]} ref={refCart}>
      <button
        type="button"
        data-amount={amount ?? 0}
        className={_S["cart-icon"]}
        onClick={() => setShowInfo((prev) => !prev)}
      >
        <img src={iconCart} title="card" alt="icon cart" />
      </button>

      <img
        src={avatar}
        className={_S["cart-avatar"]}
        title="Avatar"
        alt="icon avatar"
      />

      <div className={_S[`${showInfo ? "cart__info" : "cart__hidden--info"}`]}>
        <h3>Card</h3>
        {!amount ? (
          <p className={_S["cart__info-empty"]}>Your cart is empty.</p>
        ) : (
          <div className={_S["cart__info-content"]}>
            <div className={_S["cart__info-product"]}>
              <img
                src={product?.src}
                title="card"
                alt="icon cart"
                className={_S["cart__info-product-img"]}
              />

              <div className={_S["cart__info-price"]}>
                <p>{product?.name}</p>

                <div>
                  <span>
                    {amount &&
                      total &&
                      `${formatCurrency(total / amount)} x ${amount}`}
                  </span>
                  <p>{formatCurrency(total ?? 0)}</p>
                  <button type="button" onClick={() => removeItemCard()}>
                    <img src={iconDelete} alt="button remove item" />
                  </button>
                </div>
              </div>
            </div>
            <Button type="button">checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
};
