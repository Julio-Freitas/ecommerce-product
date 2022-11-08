import { createContext, useState } from "react";
import { IContext, IProvider, ICart, IProduct } from "./types";

export const CartContext = createContext<IContext>({} as IContext);

export const CardProvider = ({ children }: IProvider) => {
  const [amount, setAmount] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [product, setProduct] = useState<IProduct | null>(null);

  function addProduct(data: ICart) {
    setAmount(data.amount);
    setTotal(data.total);
    setProduct({
      src: data?.product?.src ?? "",
      name: data?.product?.name ?? "",
    });
  }

  function removeItemCard() {
    setAmount(0);
    setTotal(0);
    setProduct({
      src: "",
      name:  "",
    });
  }
  return (
    <CartContext.Provider value={{ amount, total, product, addProduct, removeItemCard }}>
      {children}
    </CartContext.Provider>
  );
};
