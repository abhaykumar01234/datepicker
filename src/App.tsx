import { useState } from "react";
import { DatePicker } from "~/components2/DatePicker";

const App = () => {
  const [lang, setLang] = useState("en");
  return (
    <div className="stack">
      <h1>DatePicker from react-aria</h1>
      <div>
        Select Language:{" "}
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div style={{ width: 300 }}>
        <DatePicker label={"Enter DOB"} locale={lang} />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vel ad
        optio velit nam. Commodi error iure repudiandae ad omnis debitis
        assumenda ullam voluptates nemo quia maiores ipsum minima aspernatur
        possimus eos distinctio dolore, sequi illo consequuntur molestiae non
        odit voluptas. Cupiditate unde ad qui eos accusamus optio eius iusto
        sunt reprehenderit, corrupti dignissimos ut excepturi, molestiae dolorum
        maxime totam inventore ipsa. Nemo inventore sapiente esse ad maiores
        deserunt tempore accusantium qui autem illo earum rem delectus dolore
        sunt aspernatur, debitis asperiores incidunt quaerat. Repellendus qui
        obcaecati possimus magnam deleniti quos nostrum, quasi, maxime, id culpa
        sit impedit quaerat odit. Nobis consectetur et mollitia nemo rerum eos
        dolores, repellendus repellat. Expedita, voluptate quae quis ad nostrum
        veritatis error optio autem enim, obcaecati nemo voluptatum itaque
        ducimus tempora! Temporibus, recusandae suscipit hic porro qui inventore
        quas ullam impedit, quis laudantium earum possimus in molestiae iste
        repudiandae cumque quia commodi culpa architecto explicabo. Doloremque,
        quisquam debitis! Quibusdam at quod repudiandae dignissimos cumque totam
        vel laborum, nisi temporibus commodi odit placeat odio saepe maxime
        aperiam consequatur inventore, eum doloribus nulla atque, tempora natus
        voluptatum quaerat? Eos nam alias iure laudantium perferendis, earum
        optio eligendi dolore. Iure ullam omnis ea voluptates quia placeat sequi
        quidem natus, error veniam sapiente culpa consectetur dolorum vitae,
        reiciendis debitis autem ex porro tempore provident mollitia officiis
        est voluptatibus amet. Expedita itaque aspernatur nihil? Maiores
        repellat eaque qui repellendus ipsa, rem tempora optio inventore
        reprehenderit architecto recusandae deserunt! Obcaecati error commodi,
        ea soluta neque, illum, quo totam est iure velit ipsum. Officiis nemo
        dignissimos, ad at doloribus impedit et dolores adipisci autem ullam!
        Repudiandae earum, impedit ut neque recusandae, autem obcaecati facere
        tempora dolor perspiciatis, sunt rerum reprehenderit deleniti id modi
        similique voluptatem eaque mollitia nesciunt quia quas praesentium rem
        ipsam doloremque. Minima nesciunt sit, porro beatae fugiat ad.
      </p>
    </div>
  );
};

export default App;
