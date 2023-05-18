import { useRef } from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DateField } from "../DateField";
import { Button } from "../Calendar/Button";
import * as Popover from "@radix-ui/react-popover";
import { Calendar } from "../Calendar/Calendar";

export const DatePicker = (props = {}) => {
  const ref = useRef(null);
  const state = useDatePickerState(props);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  return (
    <div className="stack g0">
      <label {...labelProps}>Enter DOB</label>

      <div {...groupProps} ref={ref} style={{ display: "flex" }}>
        <DateField {...fieldProps} />
        <Button {...buttonProps}>🗓</Button>
      </div>
      {state.isOpen && (
        <div {...dialogProps}>
          <Calendar {...calendarProps} />
        </div>
      )}
    </div>
  );
};
