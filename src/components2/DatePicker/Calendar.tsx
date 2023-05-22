import { createCalendar } from "@internationalized/date";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { type DatePickerAria } from "@react-aria/datepicker";
import { Button } from "./Button";
import { MonthDropdown } from "./MonthDropdown";
import { YearDropdown } from "./YearDropdown";
import { CalendarGrid } from "./Grid";
import s from "./styles.module.css";

export const Calendar = (props: DatePickerAria["calendarProps"]) => {
  const { locale } = useLocale();
  const state = useCalendarState({ locale, createCalendar, ...props });
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps}>
      <div className={s.header}>
        <Button {...prevButtonProps}>&lsaquo;</Button>
        <div className={s.dropdowns}>
          <MonthDropdown state={state} />
          <YearDropdown state={state} />
        </div>
        <Button {...nextButtonProps}>&rsaquo;</Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
};
