import { formatCurrency } from "../../../utils/formatCurrency";
import iconCart from "../../../assets/images/icon-cart.svg";
import iconMinus from "../../../assets/images/icon-minus.svg";
import iconPlus from "../../../assets/images/icon-plus.svg";

import _S from "../product.module.scss";
import { EControls, ISummary } from "../types";

export const Summary = ({
  totalAmount,
  discount,
  _handleControl,
  amount,
  addProduct,
  src,
}: ISummary) => (
  <div className={_S["product__summary"]}>
    <p className={_S["product__summary-company"]}>SNEAKER COMPANY</p>
    <h1 className={_S["product__summary-title"]}>
      Fall Limited Edition Sneakers
    </h1>
    <p className={_S["product__summary-description"]}>
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </p>

    <div className={_S["product__summary-price"]}>
      <h2 className={_S["product__summary-amount"]}>
        {formatCurrency(totalAmount * discount)}
      </h2>
      <div className={_S["product__summary-discount"]}>
        <span>{discount * 100}%</span>
      </div>
    </div>
    <div className={_S["product__summary-old"]}>
      <span>{formatCurrency(totalAmount)}</span>
    </div>
    <div className={_S["product__summary-controls"]}>
      <label htmlFor="add" className={_S["product__summary-controls--add"]}>
        <button
          className={_S["product__summary-controls--add-minus"]}
          onClick={() => _handleControl(EControls.minus)}
          aria-label="button minus"
        >
          <img src={iconMinus} alt="Icon minus button"/>
        </button>
        <input
          type="number"
          name="add"
          id="add"
          min={0}
          value={amount}
          readOnly
        />
        <button
          className={_S["product__summary-controls--add-plus"]}
          onClick={() => _handleControl(EControls.plus)}
          aria-label="button add"
        >
          <img src={iconPlus} alt="img of icon plus" />
        </button>
      </label>

      <button
        type="button"
        className={_S["product__summary-controls--button"]}
        aria-label="Add-to-cart"
        onClick={() =>
          addProduct({
            amount,
            total: totalAmount * discount,
            product: {
              name: "Fall Limited Edition Sneakers",
              src,
            },
          })
        }
      >
        <img src={iconCart} alt="Add item in Card" />
        Add to cart
      </button>
    </div>
  </div>
);
