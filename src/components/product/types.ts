import { ICart } from "../../context/cartProvider/types";

export enum EControls {
  "plus",
  "minus",
}

export interface ISummary {
  totalAmount: number;
  discount: number;
  _handleControl: (type: EControls) => void;
  amount: number;
  addProduct: (product: ICart)=> void;
  src: string
}
