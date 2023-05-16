import { useState } from "react";
import { createCalendar, parseDate, DateValue } from "@internationalized/date";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { I18nProvider } from "@react-aria/i18n";
import * as Popover from "@radix-ui/react-popover";
import { Button } from "./Button";
import { MonthDropdown } from "./MonthDropdown";
import { YearDropdown } from "./YearDropdown";
import { CalendarGrid } from "./Grid";
import s from "./calendar.module.css";

type DatePropValue = { year: string; month: string; date: string };

type CalendarProps = {
  lang?: string;
  selected: DatePropValue;
  onChange: (val: DatePropValue) => void;
  placeholder?: string;
};

export const Calendar = ({
  lang = "en",
  placeholder = "Select Date",
  selected,
  onChange,
}: CalendarProps) => {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const padMonth = selected.month.padStart(2, "0");
  const padDate = selected.date.padStart(2, "0");
  const dateValue = parseDate(`${selected.year}-${padMonth}-${padDate}`);

  const onDateChange = (val: DateValue) => {
    const [year, month, date] = val.toString().split("-");
    onChange({ year, month, date });
    setIsOpen(false);
  };

  const props = { value: dateValue, onChange: onDateChange };

  const state = useCalendarState({ locale, createCalendar, ...props });
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={() => setIsOpen((s) => !s)}>
      <Popover.Trigger asChild>
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          value={dateValue.toString()}
          className="dateInput"
        />
      </Popover.Trigger>
      <Popover.Content className="popper-content" align="start">
        <I18nProvider locale={lang}>
          <div {...calendarProps} className={s.calendar}>
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
        </I18nProvider>
      </Popover.Content>
    </Popover.Root>
  );
};
