import { IButton } from "./type";
import _S from "./button.module.scss";

export const Button = ({ children, ...rest }: IButton) => {
  return (
    <button className={_S["button"]} {...rest}>
      {children}
    </button>
  );
};
