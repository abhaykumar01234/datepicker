import { useRef } from "react";
import {
  type DatePickerAria,
  useDateField,
  useDateSegment,
} from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import {
  type DateFieldState,
  type DateSegment,
  useDateFieldState,
} from "@react-stately/datepicker";
import { createCalendar } from "@internationalized/date";
import s from "./datefield.module.css";

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
    <div className={s.wrapper}>
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className={s.field}>
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

type DateSegmentCompType = {
  segment: DateSegment;
  state: DateFieldState;
};

const DateSegmentComp = ({ segment, state }: DateSegmentCompType) => {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`${s.segment} ${segment.isPlaceholder ? s.placeholder : ""}`}
    >
      {segment.text}
    </div>
  );
};
