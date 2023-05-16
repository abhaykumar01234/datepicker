import { useRef } from "react";
import { useButton } from "@react-aria/button";
import { type AriaButtonProps } from "@react-aria/button";
import s from "./calendar.module.css";

export const Button = ({ children, ...props }: AriaButtonProps<"button">) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} className={s.button}>
      {children}
    </button>
  );
};
