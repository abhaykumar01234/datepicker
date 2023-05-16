import { useRef } from "react";
import {
  type AriaCalendarCellProps,
  useCalendarCell,
} from "@react-aria/calendar";
import { type CalendarState } from "@react-stately/calendar";

type CalendarCelltype = {
  state: CalendarState;
  date: AriaCalendarCellProps["date"];
};

export const CalendarCell = ({ state, date }: CalendarCelltype) => {
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </div>
    </td>
  );
};
