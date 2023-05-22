import { Calendar } from "../components/Calendar";
import { useState } from "react";
import { DatePicker } from "../components/DatePicker";
import s from "../components/Calendar/calendar.module.css";

export const Try = () => {
  const [lang, setLang] = useState("en");
  const [dob, setDob] = useState({ date: "17", month: "3", year: "1994" });
  const [admission, setAdmission] = useState({
    date: "04",
    month: "4",
    year: "1999",
  });
  const [release, setRelease] = useState({
    date: "15",
    month: "5",
    year: "2023",
  });

  return (
    <div className="stack">
      <div>
        Select Language:{" "}
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className={s.select}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="stack g0">
        <label htmlFor="dob">Enter Date Of Birth</label>
        <Calendar lang={lang} selected={dob} onChange={setDob} />
        <p>
          The Selected Date is {dob.date} / {dob.month} / {dob.year}
        </p>
      </div>

      <div className="stack g0">
        <label htmlFor="dob">Enter Date Of Admission</label>
        <Calendar lang={lang} selected={admission} onChange={setAdmission} />
        <p>
          The Selected Date is {admission.date} / {admission.month} /{" "}
          {admission.year}
        </p>
      </div>

      <div className="stack g0">
        <label htmlFor="dob">Enter Date Of Release</label>
        <Calendar lang={lang} selected={release} onChange={setRelease} />
        <p>
          The Selected Date is {release.date} / {release.month} / {release.year}
        </p>
      </div>
      <DatePicker />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo
        delectus placeat architecto, excepturi ad expedita sequi temporibus
        incidunt, dignissimos officiis culpa reprehenderit suscipit soluta
        voluptatum perspiciatis eaque voluptas fugit neque? Culpa quo, odio quod
        ullam fuga, reprehenderit accusamus tempora perferendis neque, at sequi
        voluptate? Numquam modi porro veniam eaque!
      </p>
    </div>
  );
};
