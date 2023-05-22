import { useRef } from "react";
import { useButton } from "@react-aria/button";
import { type AriaButtonProps } from "@react-aria/button";
import * as Popover from "@radix-ui/react-popover";
import s from "./styles.module.css";

export const Button = ({ children, ...props }: AriaButtonProps<"button">) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} className={s.button}>
      {children}
    </button>
  );
};

export const TriggerButton = ({
  children,
  ...props
}: AriaButtonProps<"button">) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <Popover.Trigger {...buttonProps} className={s.dateTrigger}>
      {children}
    </Popover.Trigger>
  );
};
