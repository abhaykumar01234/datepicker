import {
  useDatePicker,
  type DateValue,
  type AriaDatePickerProps,
} from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { useEffect, useRef, useState } from "react";
import { DateField } from "./DateField";
import { TriggerButton } from "./Button";
import { ReactComponent as CalendarIcon } from "~/assets/calendar.svg";
import s from "./styles.module.css";
import * as Popover from "@radix-ui/react-popover";
import { Calendar } from "./Calendar";
import { I18nProvider } from "@react-aria/i18n";

type CustomDatePickerProps = AriaDatePickerProps<DateValue> & {
  locale?: string;
};

export const DatePicker = ({ locale, ...props }: CustomDatePickerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const state = useDatePickerState(props);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  const { onChange, ...restCalendarProps } = calendarProps;

  const handleChange = (val: DateValue) => {
    if (typeof onChange === "function") onChange(val);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) state.open();
    else state.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <I18nProvider locale={locale}>
      <div className={s.stack}>
        <label {...labelProps}>{props.label}</label>
        <Popover.Root open={isOpen} onOpenChange={() => setIsOpen((s) => !s)}>
          <div {...groupProps} ref={ref} className={s.dateGroup}>
            <DateField {...fieldProps} />
            <TriggerButton {...buttonProps}>
              <CalendarIcon />
            </TriggerButton>
          </div>
          <Popover.Content
            className={s.popperContent}
            style={{ width: ref.current?.getBoundingClientRect().width }}
            align="end"
            alignOffset={-4}
            sideOffset={8}
          >
            <div {...dialogProps}>
              <Calendar onChange={handleChange} {...restCalendarProps} />
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </I18nProvider>
  );
};
