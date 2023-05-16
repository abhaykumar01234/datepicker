import { getWeeksInMonth } from "@internationalized/date";
import { useCalendarGrid } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { type CalendarState } from "@react-stately/calendar";
import { CalendarCell } from "./Cell";

export const CalendarGrid = ({ state, ...props }: { state: CalendarState }) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps} width="100%">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
