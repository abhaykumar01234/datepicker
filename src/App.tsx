import { Calendar } from "./components/Calendar";
import { useState } from "react";

import s from "./components/Calendar/calendar.module.css";

const App = () => {
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
    </div>
  );
};

export default App;
