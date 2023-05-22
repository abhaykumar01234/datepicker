import { type CalendarState } from "@react-stately/calendar";
import { type CalendarDate } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import s from "./styles.module.css";

type YearType = {
  value: CalendarDate;
  formatted: string;
};

export const YearDropdown = ({ state }: { state: CalendarState }) => {
  const years: YearType[] = [];
  const formatter = useDateFormatter({
    year: "numeric",
    timeZone: state.timeZone,
  });

  for (let i = -20; i <= 20; i++) {
    const date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    const date = years[index].value;
    state.setFocusedDate(date);
  };

  return (
    <select
      aria-label="Year"
      onChange={onChange}
      value={20}
      className={s.select}
    >
      {years.map((year, i) => (
        <option key={i} value={i}>
          {year.formatted}
        </option>
      ))}
    </select>
  );
};
