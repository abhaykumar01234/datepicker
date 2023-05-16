import { type CalendarState } from "@react-stately/calendar";
import { useDateFormatter } from "@react-aria/i18n";
import s from "./calendar.module.css";

export const MonthDropdown = ({ state }: { state: CalendarState }) => {
  const formatter = useDateFormatter({
    month: "long",
    timeZone: state.timeZone,
  });

  const months = [];
  const numMonths = state.focusedDate.calendar.getMonthsInYear(
    state.focusedDate
  );
  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    const date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };

  return (
    <select
      aria-label="Month"
      onChange={onChange}
      value={state.focusedDate.month}
      className={s.select}
    >
      {months.map((month, i) => (
        <option key={i} value={i + 1}>
          {month}
        </option>
      ))}
    </select>
  );
};
