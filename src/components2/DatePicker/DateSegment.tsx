import type { DateFieldState, DateSegment } from "@react-stately/datepicker";
import { useDateSegment } from "@react-aria/datepicker";
import { useRef } from "react";
import s from "./styles.module.css";

type DateSegmentCompType = {
  segment: DateSegment;
  state: DateFieldState;
};

export const DateSegmentComp = ({ segment, state }: DateSegmentCompType) => {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`${s.dateSegment} ${
        segment.isPlaceholder ? s.isPlaceholder : ""
      }`}
    >
      {segment.text}
    </div>
  );
};
