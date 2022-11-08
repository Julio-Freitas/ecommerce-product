
export interface IProduct {
    src: string,
    name: string
}
export interface ICart {
    amount: number | null;
    total: number | null;
    product: IProduct | null;
  }
  export interface IContext extends ICart {
    addProduct: (product: ICart) => void;
    removeItemCard: (product?: ICart) => void;
  }
  export interface IProvider {
    children: JSX.Element;
  }
