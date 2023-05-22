import { useRef } from "react";
import { type DatePickerAria, useDateField } from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { useDateFieldState } from "@react-stately/datepicker";
import { createCalendar } from "@internationalized/date";
import { DateSegmentComp } from "./DateSegment";
import s from "./styles.module.css";

export const DateField = (props: DatePickerAria["fieldProps"]) => {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div className={s.dateFieldWrapper}>
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className={s.dateField}>
        {state.segments.map((segment, i) => (
          <DateSegmentComp key={i} segment={segment} state={state} />
        ))}
        {state.validationState === "invalid" && (
          <span aria-hidden="true">🚫</span>
        )}
      </div>
    </div>
  );
};
